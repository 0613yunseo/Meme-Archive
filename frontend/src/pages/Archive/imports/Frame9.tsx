export default function Frame() {
  return (
    <div className="relative size-full">
      <div aria-hidden="true" className="absolute border-[#212121] border-[0px_0px_3px] border-solid inset-[0_0_-1.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[3px] py-[15px] relative size-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[20px] text-nowrap">전체 밈 리스트</p>
        </div>
      </div>
    </div>
  );
}