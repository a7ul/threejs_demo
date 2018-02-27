import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight } from 'three';

export const initScene = () => {
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  camera.position.z = 5;

  const ambientLight = new AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const firstDirectionalLight = new DirectionalLight(0xffffff, 0.7);
  firstDirectionalLight.position.set(0, 30, 10);
  firstDirectionalLight.castShadow = true;
  scene.add(firstDirectionalLight);

  const secondDirectionalLight = new DirectionalLight(0xffffff, 0.5);
  secondDirectionalLight.position.set(0, -30, 10);
  scene.add(secondDirectionalLight);

  // const thirdDirectionalLight = new DirectionalLight(0xffffff, 0.7);
  // thirdDirectionalLight.position.set(-10, -10, -10);
  // thirdDirectionalLight.target.position.set(10, 10, 10);
  // scene.add(thirdDirectionalLight);

  return {
    scene, camera, renderer,
  };
};


export default initScene;
