export function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ambient-grid absolute inset-0" />
      <div className="ambient-orb ambient-orb-cyan absolute left-[-10rem] top-[8rem] h-[26rem] w-[26rem] rounded-full" />
      <div className="ambient-orb ambient-orb-violet absolute right-[-8rem] top-[20rem] h-[24rem] w-[24rem] rounded-full" />
      <div className="ambient-orb ambient-orb-gold absolute bottom-[-10rem] left-[30%] h-[30rem] w-[30rem] rounded-full" />
      <div className="ambient-beam absolute inset-x-[18%] top-[-12rem] h-[32rem] rounded-full" />
      <div className="ambient-noise absolute inset-0 opacity-[0.08]" />
    </div>
  );
}
