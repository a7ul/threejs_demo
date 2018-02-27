import { initScene } from './src/init';
import getAnimator from './src/animate';
import shoeModel from './assets/model.dae';
import { loadCollada } from './src/util/modelLoader';
import getShoeMaterial from './src/materialHelper';

const { scene, camera, renderer } = initScene();

loadCollada(shoeModel)
  .then((rawModel) => {
    const shoe = rawModel.children[0];
    shoe.scale.set(3, 3, 3);
    shoe.position.set(0, 0, 0);
    shoe.castShadow = true;
    shoe.receiveShadow = true;
    return getShoeMaterial().then((material) => {
      shoe.children[0].material = material;
      return shoe;
    });
  })
  .then((materialShoe) => {
    scene.add(materialShoe);
    const animate = getAnimator(materialShoe, camera, scene, renderer);
    animate();
  })
  .catch(console.log); // eslint-disable-line no-console

