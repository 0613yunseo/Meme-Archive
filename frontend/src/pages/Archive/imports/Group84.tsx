function Frame() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex items-center justify-center px-[25px] py-[10px] relative rounded-[50px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#8d8d8d] text-[14px] text-nowrap">Hot on TikTok</p>
    </div>
  );
}

function K() {
  return (
    <div className="bg-[red] content-stretch flex items-center relative rounded-[50px] shrink-0" data-name="k/1">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#7557ff] content-stretch flex items-center justify-center px-[25px] py-[10px] relative rounded-[50px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#f2fbf9] text-[14px] text-nowrap">Hot on X</p>
    </div>
  );
}

function K1() {
  return (
    <div className="bg-[red] content-stretch flex items-center relative rounded-[50px] shrink-0" data-name="k/2">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#7557ff] content-stretch flex items-center justify-center px-[25px] py-[10px] relative rounded-[50px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#f2fbf9] text-[14px] text-nowrap">{`Hot on  Instagram`}</p>
    </div>
  );
}

function K2() {
  return (
    <div className="bg-[red] content-stretch flex items-center relative rounded-[50px] shrink-0 w-full" data-name="k/2">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-start left-0 top-[86px] w-[170px]">
      <K />
      <K1 />
      <K2 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-85px)] not-italic text-[#212121] text-[18px] top-0 w-[82.129px]">트렌드별</p>
      <Frame3 />
    </div>
  );
}