import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, useTexture, OrbitControls } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

function Cylinder3d(props) {
  const speed = 0.0017;
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [stopped, stop] = useState(speed);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    // ref.current.rotation.x += 0.01
    ref.current.rotation.y += stopped;
  });
  // Return the view, these are regular Threejs elements expressed in JSX

  const texture = useTexture("/images/cyberpunk-city-7415576_1280.jpg");
  const texture1 = useTexture("/images/dreaming-7415565_1280.jpg");
  const texture2 = useTexture("/images/northern-7415567_1280.jpg");
  const texture3 = useTexture("/images/studio-ghibli-7415572_1280.jpg");
  const texture4 = useTexture("/images/wallpaper-7415568_1280.jpg");
  const texture5 = useTexture("/images/wallpaper-7415571_1280.jpg");
  const texture6 = useTexture("/images/cyberpunk-city-7415576_1280.jpg");
  const texture7 = useTexture("/images/dreaming-7415565_1280.jpg");
  const texture8 = useTexture("/images/northern-7415567_1280.jpg");
  const texture9 = useTexture("/images/studio-ghibli-7415572_1280.jpg");
  const texture10 = useTexture("/images/wallpaper-7415568_1280.jpg");
  const texture11 = useTexture("/images/wallpaper-7415571_1280.jpg");


  return (
    <>
      {/* <OrbitControls /> */}
      <mesh
        {...props}
        ref={ref}
        // scale={clicked ? 1.5 : 1}
        onClick={(e) => stop(!stopped ? speed : 0)}
      >
        <cylinderGeometry args={[30.9, 30.9, 9, 12, undefined, false]} />
        <meshNormalMaterial wireframe={props.wireframe} color={"#b7b7b7"} />

        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[8.4, 0, 31]} // Position of the decal
          rotation={[0, degToRad(15), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[22, 0, 22]} // Position of the decal
          rotation={[0, degToRad(45), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture1}
            polygonOffset
            polygonOffsetFactor={-2} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[28.9, 0, 7.75]} // Position of the decal
          rotation={[0, degToRad(75), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture2}
            polygonOffset
            polygonOffsetFactor={-3} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[30, 0, -8]} // Position of the decal
          rotation={[0, degToRad(105), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture3}
            polygonOffset
            polygonOffsetFactor={-4} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[22.1, 0, -22]} // Position of the decal
          rotation={[0, degToRad(135), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture4}
            polygonOffset
            polygonOffsetFactor={-5} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[7.85, 0, -29]} // Position of the decal
          rotation={[0, degToRad(165), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture5}
            polygonOffset
            polygonOffsetFactor={-6} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-7.97, 0, -30]} // Position of the decal
          rotation={[0, degToRad(195), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture6}
            polygonOffset
            polygonOffsetFactor={-7} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-21, 0, -21.08]} // Position of the decal
          rotation={[0, degToRad(225), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16.04, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture7}
            polygonOffset
            polygonOffsetFactor={-8} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-29, 0, -7.78]} // Position of the decal
          rotation={[0, degToRad(255), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16.04, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture8}
            polygonOffset
            polygonOffsetFactor={-8} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-30, 0, 8.08]} // Position of the decal
          rotation={[0, degToRad(285), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16.04, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture9}
            polygonOffset
            polygonOffsetFactor={-9} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-21.865, 0, 22]} // Position of the decal
          rotation={[0, degToRad(315), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16.04, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture10}
            polygonOffset
            polygonOffsetFactor={-10} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-7.96, 0, 30]} // Position of the decal
          rotation={[0, degToRad(345), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture11}
            polygonOffset
            polygonOffsetFactor={-11} // The material should take precedence over the original
          />
        </Decal>
      </mesh>
    </>
  );
}

export default Cylinder3d;
