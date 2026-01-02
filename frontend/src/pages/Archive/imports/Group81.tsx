function Frame() {
  return (
    <div className="bg-[#7557ff] content-stretch flex items-center justify-center px-[25px] py-[10px] relative rounded-[50px] shrink-0">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#f2fbf9] text-[14px] text-nowrap">인기순</p>
    </div>
  );
}

function K() {
  return (
    <div className="bg-[red] content-stretch flex items-center relative rounded-[50px] shrink-0" data-name="k/2">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex items-center justify-center px-[25px] py-[10px] relative rounded-[50px] shrink-0">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#8d8d8d] text-[14px] text-nowrap">최신순</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[red] content-stretch flex items-center relative rounded-[50px] shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-0 top-[61px]">
      <K />
      <Frame2 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-93.55px)] not-italic text-[#212121] text-[18px] top-0 w-[41.677px]">정렬</p>
      <Frame3 />
    </div>
  );
}