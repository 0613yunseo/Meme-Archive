import svgPaths from "./svg-j5nvccxdt6";

function Frame() {
  return (
    <div className="relative size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pfed3cb0} fill="var(--fill-0, #212121)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28216780} fill="var(--fill-0, #212121)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-px w-[218px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f4f1fb] content-stretch flex flex-col items-center justify-center relative rounded-[3px] shrink-0 size-[30px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#7557ff] text-[16px] text-center text-nowrap">1</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[30px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-center text-nowrap">2</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[30px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-center text-nowrap">3</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[30px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-center text-nowrap">...</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[34px] top-0">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[34px] top-0">
      <Frame7 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[34px] top-0">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[34px] top-0">
      <Group1 />
    </div>
  );
}

export default function Group3() {
  return (
    <div className="relative size-full">
      <Frame6 />
      <Group2 />
    </div>
  );
}