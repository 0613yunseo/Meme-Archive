import imgRectangle72 from "figma:asset/c5a3f6fd68430fafb89bbd295de5a91b414918f5.png";
import imgRectangle145 from "figma:asset/2f490e9d1c9d6edc4d31f909360f02aadc262c6a.png";
import imgRectangle146 from "figma:asset/1609729925f2e1cd01a3a010bda00a264a594bff.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-[84.13px] top-[86.5px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[32px] w-[268px]">Rising Keywords</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[726px] top-[56px]">
      <div className="absolute h-[219px] left-[906px] rounded-tl-[10px] rounded-tr-[10px] top-[107px] w-[149px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-tl-[10px] rounded-tr-[10px] size-full" src={imgRectangle72} />
          <div className="absolute bg-[rgba(0,0,0,0.45)] inset-0 rounded-tl-[10px] rounded-tr-[10px]" />
        </div>
      </div>
      <div className="absolute h-[144px] left-[726px] rounded-tl-[10px] rounded-tr-[10px] top-[182px] w-[149px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-tl-[10px] rounded-tr-[10px] size-full" src={imgRectangle145} />
          <div className="absolute bg-[rgba(0,0,0,0.45)] inset-0 rounded-tl-[10px] rounded-tr-[10px]" />
        </div>
      </div>
      <div className="absolute h-[144px] left-[1086px] rounded-tl-[10px] rounded-tr-[10px] top-[182px] w-[149px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-tl-[10px] rounded-tr-[10px] size-full" src={imgRectangle146} />
          <div className="absolute bg-[rgba(0,0,0,0.45)] inset-0 rounded-tl-[10px] rounded-tr-[10px]" />
        </div>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[754px] not-italic text-[#7557ff] text-[24px] text-nowrap top-[132px]">Fandom</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1119px] not-italic text-[#7557ff] text-[24px] text-nowrap top-[132px]">English</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[945px] not-italic text-[#7557ff] text-[24px] text-nowrap top-[56px]">Funny</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[972px] not-italic text-[#f2fbf9] text-[32px] text-nowrap top-[138px]">1</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[792px] not-italic text-[#f2fbf9] text-[32px] text-nowrap top-[215px]">2</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1152px] not-italic text-[#f2fbf9] text-[32px] text-nowrap top-[215px]">3</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[326px] left-0 rounded-[10px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)] top-0 w-[1360px]" style={{ backgroundImage: "linear-gradient(96.2195deg, rgb(238, 235, 255) 0.99988%, rgb(251, 249, 255) 22.664%, rgb(244, 239, 255) 60.695%, rgb(233, 224, 255) 98.727%)" }} />
      <Frame />
      <Group1 />
    </div>
  );
}