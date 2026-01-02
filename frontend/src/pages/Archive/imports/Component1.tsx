import svgPaths from "./svg-j4wt7y1of4";

function Frame1() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[40px] inset-[31.57%_24.65%_31.57%_24.15%] items-center leading-[1.5] not-italic text-[18px] text-center tracking-[-0.342px]">
      <p className="relative shrink-0 text-[rgba(33,33,33,0.8)] w-[126.968px]">Meme Archive</p>
      <p className="relative shrink-0 text-[#212121] text-nowrap">/</p>
      <p className="relative shrink-0 text-[rgba(33,33,33,0.8)] w-[137.162px]">Meme Creation</p>
      <p className="relative shrink-0 text-[#212121] text-nowrap">/</p>
      <p className="relative shrink-0 text-[rgba(33,33,33,0.8)] w-[97.313px]">Community</p>
      <p className="relative shrink-0 text-[#212121] text-nowrap">/</p>
      <p className="relative shrink-0 text-[rgba(33,33,33,0.8)] w-[77.39px]">My Page</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative size-full" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pd10f80} fill="var(--fill-0, #7557FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="Component 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[31.57%_1.79%_31.57%_92.54%] leading-[1.5] not-italic text-[#7557ff] text-[18px] text-center tracking-[-0.342px]">Sign in</p>
      <Frame1 />
      <div className="absolute flex inset-[27.86%_0_25.84%_97.52%] items-center justify-center">
        <div className="flex-none rotate-[317.505deg] size-[24px]">
          <Frame />
        </div>
      </div>
      <p className="absolute font-['Orbitron:Medium',sans-serif] font-medium h-[47px] leading-[normal] left-0 right-[83.91%] text-[#7557ff] text-[40px] top-[calc(50%-23.62px)]">TrendArc</p>
    </div>
  );
}