'default client';

export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0B0C10] mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F222F_1px,transparent_1px),linear-gradient(to_bottom,#1F222F_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
    </div>
  );
}