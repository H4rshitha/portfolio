export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={80} color="#c084fc" />
      <pointLight position={[-4, -2, -4]} intensity={40} color="#7dd3fc" />
    </>
  );
}
