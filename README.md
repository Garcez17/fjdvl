
// const MyMesh = () => {
//   const refMesh = useRef(null);
//   // const gltf = useGLTFLoader('/scene.gltf', true);

//   // console.log(gltf);

//   useFrame(() => {
//     if(refMesh.current) {
//       refMesh.current.rotate.x += 0.01;
//     }
//   });

//   return (
//     <>
//       <mesh>
//         <boxBufferGeometry attach="geometry" />
//         <meshLambertMaterial attach="material" color="hotpink" />
//       </mesh>
//     </>
//   )
// }

// const Model = () => {
//   const gltf = useGLTFLoader('/scene.gltf', true);

//   console.log(gltf);

//   return <primitive object={gltf.scene} dispose={null} />
// } 