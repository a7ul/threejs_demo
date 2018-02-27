import ColladaLoader from 'three-collada-loader';
import { TextureLoader } from 'three';

export const loadCollada = (modelUrl) => {
  let model = null;
  return new Promise((resolve, reject) => {
    const loader = new ColladaLoader();
    loader.load(`${modelUrl}`, (collada) => {
      model = collada.scene;
      resolve(model);
    }, undefined, err => reject(err));
  });
};

export const loadTexture = (textureUrl) => {
  const textureLoader = new TextureLoader();
  return new Promise((resolve, reject) => {
    textureLoader.load(textureUrl, (textureMap) => {
      resolve(textureMap);
    }, undefined, reject);
  });
};
