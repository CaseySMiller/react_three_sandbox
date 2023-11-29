import React, { useRef, } from "react";
import { useFrame } from "@react-three/fiber";

const verticesOfCube = [
  -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
  -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
  2,1,0,    0,3,2,
  0,4,7,    7,3,0,
  0,1,5,    5,4,0,
  1,2,6,    6,5,1,
  2,3,7,    7,6,2,
  4,5,6,    6,7,4
];

const PolyShape = (props) => {
  // set up rotation
  const ref = useRef();
  useFrame((state, delta) => {
    // ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh {...props} ref={ref} scale={1}>
      <polyhedronGeometry args={[ verticesOfCube, indicesOfFaces, 6, 2 ]} />
      <meshStandardMaterial wireframe={props.wireframe} color={"orange"} />
    </mesh>
  );
};

// const geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
export default PolyShape;
