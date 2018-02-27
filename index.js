import { initScene, initMeshes } from './src/init';
import getAnimator from './src/animate';

const { scene, camera, renderer } = initScene();
const meshes = initMeshes();

scene.add(meshes.cube);
camera.position.z = 5;


const animate = getAnimator(meshes, camera, scene, renderer);
animate();
