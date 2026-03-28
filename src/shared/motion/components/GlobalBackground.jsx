// src/shared/components/GlobalBackground.jsx

export default function GlobalBackground() {
  return (
    <div className="fixed bg-red-800 inset-0 z-0 pointer-events-none">
      
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Aura 1 */}
      <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[#B9FF66]/10 blur-[150px] rounded-full" />

      {/* Aura 2 */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-blue-50/40 blur-[120px] rounded-full" />
    </div>
  );
}