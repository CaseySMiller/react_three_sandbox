import "./App.css";
import { Canvas, useThree } from "@react-three/fiber";
// import * as THREE from 'three';

import Cylinder3d from "./components/Cylinder3d";
import Scene from "./components/Scene";
// import PolyShape from "./components/PolyShape";

function App() {
  // useThree(({ camera }) => {
  //   camera.rotation.set(THREE.MathUtils.degToRad(30), 0, 0);
  // });
  return (
    <>
      <section className="fullSize">
      <Canvas camera={{ fov: 75, position: [0, 4, 38]}}>

        {/* <Scene> */}
          <pointLight position={[5, 10, 40]} intensity={75}/>
          <ambientLight intensity={.2} />
          <Cylinder3d position={[0, 2, 0]} />
        </Canvas>
        {/* </Scene> */}
      </section>
    </>
  );
}

export default App;
