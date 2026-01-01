import svgPaths from "./svg-02tnca7ivg";

function Frame() {
  return (
    <div className="h-[35px] relative shrink-0 w-[34px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 35">
        <g id="Frame">
          <path d={svgPaths.p2012a500} fill="var(--fill-0, #7557FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#f4f1fb] relative rounded-[100px] size-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pl-[32px] pr-[17px] py-[17px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}