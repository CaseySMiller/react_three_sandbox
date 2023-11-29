//this is designed to take 16:9 images like 1280x720 in an arry of 3, 6, or 12
import "./App.css";
import { Canvas } from "@react-three/fiber";

import Cylinder3d from "./components/Cylinder3d";

const imgArr = ["uri","uri","uri",];

function App() {
  return (
    <>
      <section className="fullSize">
        <Canvas camera={{ fov: 75, position: [0, 4, 38] }}>
          <pointLight position={[5, 10, 40]} intensity={75} />
          <ambientLight intensity={0.2} />
          <Cylinder3d position={[0, 2, 0]} array={imgArr}/>
        </Canvas>
      </section>
    </>
  );
}

export default App;
