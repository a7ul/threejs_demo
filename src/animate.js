/* eslint-disable no-param-reassign */

const animationLogic = (meshes) => {
  meshes.cube.rotation.x += 0.1;
  meshes.cube.rotation.y += 0.1;
};

const getAnimator = (meshes, camera, scene, renderer) => {
  const animate = () => {
    requestAnimationFrame(animate);
    animationLogic(meshes, camera, scene, renderer);
    renderer.render(scene, camera);
  };
  return animate;
};

export default getAnimator;
