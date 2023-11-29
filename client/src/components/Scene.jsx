import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from 'three';

const Scene = () => {
  useThree(({ camera }) => {
    camera.rotation.set(THREE.MathUtils.degToRad(30), 0, 0);
  });

  return <Canvas/>
}


export default Scene;