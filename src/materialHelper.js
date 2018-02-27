import { MeshStandardMaterial } from 'three';
import albedoTexture from '../assets/textures/DefaultMaterial_albedo.jpg';
import metallicTexture from '../assets/textures/DefaultMaterial_metallic.jpg';
import normalTexture from '../assets/textures/DefaultMaterial_normal.png';
import roughnessTexture from '../assets/textures/DefaultMaterial_roughness.jpg';
import { loadTexture } from './util/modelLoader';

const getShoeMaterial = () => {
  const texturePromise = Promise.all([
    loadTexture(albedoTexture),
    loadTexture(metallicTexture),
    loadTexture(normalTexture),
    loadTexture(roughnessTexture),
  ]).then(([albedo, metallic, normal, roughness]) => {
    const material = new MeshStandardMaterial({
      map: albedo,
      normalMap: normal,
      roughnessMap: roughness,
      metalnessMap: metallic,
      metalness: 0.7,
    });
    return material;
  });
  return texturePromise;
};

export default getShoeMaterial;

