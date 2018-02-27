/* eslint-disable no-param-reassign */
import * as THREE from 'three';
import getOrbitControls from 'three-orbit-controls';

const OrbitControls = getOrbitControls(THREE);

const getAnimator = (shoe, camera, scene, renderer) => {
  const controls = new OrbitControls(camera);
  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    shoe.rotation.y += 0.005;
    renderer.render(scene, camera);
  };
  return animate;
};

export default getAnimator;
