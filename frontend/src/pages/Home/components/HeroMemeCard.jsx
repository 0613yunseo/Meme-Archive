// src/pages/Home/components/HeroMemeCard.jsx
import { Link } from "react-router-dom";

export default function HeroMemeCard({ image, name, keyword, badge, linkTo }) {
  return (
    <Link to={linkTo} className="group cursor-pointer block">
      <div className="bg-[#f4f1fb] overflow-hidden relative rounded-[10px] w-[325px] h-[428px]">
        {/* Hero Image */}
        <div className="absolute bg-[#cecece] h-[375px] left-0 rounded-[10px] top-0 w-[325px] overflow-hidden">
          <img 
            alt={name} 
            className="w-full h-full object-cover" 
            src={image} 
          />
        </div>

        {/* Badge (NEW) */}
        {badge && (
          <div className="absolute top-[12px] left-[12px] bg-[#7557ff] text-white px-[8px] py-[4px] rounded-[6px] text-[10px] font-['Inter:Medium',sans-serif] z-10">
            {badge}
          </div>
        )}

        {/* Name */}
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[12px] not-italic text-[16px] text-black top-[393.5px]">
          {name}
        </p>

        {/* Keyword Tag */}
        <div className="absolute left-[249px] top-[389px]">
          <div className="bg-[#fafafa] content-stretch flex h-[29px] items-center justify-center px-[25px] py-[10px] rounded-[50px] shrink-0 w-[60px]">
            <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic shrink-0 text-[#7557ff] text-[10px] text-nowrap">
              {keyword}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
