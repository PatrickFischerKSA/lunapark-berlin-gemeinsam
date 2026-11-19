import { useState } from "react";

export function ImageComparison({ before, after, beforeAlt, afterAlt }: { before: string; after: string; beforeAlt: string; afterAlt: string }) {
  const [position, setPosition] = useState(50);
  return <div>
    <div className="relative aspect-[4/3] overflow-hidden border border-border md:aspect-[16/9]">
      <img src={after} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" />
      <img src={before} alt={beforeAlt} className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} />
      <div className="absolute inset-y-0 w-0.5 bg-primary" style={{ left: `${position}%` }}><span className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-primary bg-background text-primary">↔</span></div>
      <span className="absolute left-3 top-3 bg-background/90 px-3 py-2 font-mono text-xs">DAMALS</span>
      <span className="absolute right-3 top-3 bg-background/90 px-3 py-2 font-mono text-xs">HEUTE</span>
    </div>
    <input type="range" min="0" max="100" value={position} onChange={e => setPosition(Number(e.target.value))} aria-label="Bildvergleich verschieben" className="mt-4 w-full accent-primary" />
  </div>;
}