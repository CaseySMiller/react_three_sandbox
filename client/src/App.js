import "./App.css";
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./components/Cylinder3d";

function App() {
  return (
    <>
      <section className="App-header">
        <Canvas>
          <pointLight position={[5, 2, 3]} intensity={100} color="#fff" />
          {/* <pointLight position={[10, 10, 10]} /> */}
          {/* <ambientLight /> */}
          <Cylinder3d position={[-1.5, 0, 0]} />
          <Cylinder3d position={[1.5, 0, 0]} />
        </Canvas>
      </section>
    </>
  );
}

export default App;
