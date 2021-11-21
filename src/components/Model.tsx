import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D";
import { AnimationClip } from "three/src/animation/AnimationClip";

interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}

interface actions {
  current: {
    idle: {
      play: () => void;
    };
  };
}

type ModelProps = {
  moviment: boolean;
}

const Model: React.FC<ModelProps> = ({ moviment }) => {
  const group: group = useRef();
  const actions: actions = useRef();

  const [model, setModel] = useState<Object3D | null>(null);
  const [animation, setAnimation] = useState<AnimationClip[] | null>(null);

  const [mixer] = useState(() => new THREE.AnimationMixer(null));

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("scene.gltf", async (gltf) => {
      const nodes = await gltf.parser.getDependencies("node");
      const animations = await gltf.parser.getDependencies("animation");
      setModel(nodes[0]);
      setAnimation(animations);
    });
  }, []);

  /* Set animation */
  // useEffect(() => {
  //   if (animation && typeof group.current != "undefined") {
  //     if (moviment)
  //       group.current.rotation.x += 0.01;

  //     actions.current = {
  //       idle: mixer.clipAction(animation[0], group.current as Object3D),
  //     };
  //     actions.current.idle.play();
  //     return () => animation.forEach((clip) => mixer.uncacheClip(clip));
  //   }
  // }, [animation]);

  useFrame((_, delta) => mixer.update(delta));
  useFrame(() => {
    if (typeof group.current != "undefined")
      return (moviment ? group.current.rotation.y += 0.01 : group.current.rotation.y += 0);
  });

  return (
    <>
      {model ? (
        <group ref={group} position={[0, -70, 0]} dispose={null}>
          <primitive ref={group} name="Object_0" object={model} />
        </group>
      ) : (
        <Html>
          <p>Loading...</p>
        </Html>
      )}
    </>
  );
};

export default Model;
