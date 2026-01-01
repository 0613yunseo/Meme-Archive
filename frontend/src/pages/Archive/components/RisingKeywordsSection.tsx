import imgRectangle72 from "figma:asset/c5a3f6fd68430fafb89bbd295de5a91b414918f5.png";
import imgRectangle145 from "figma:asset/2f490e9d1c9d6edc4d31f909360f02aadc262c6a.png";
import imgRectangle146 from "figma:asset/1609729925f2e1cd01a3a010bda00a264a594bff.png";
import { Trophy } from "lucide-react@0.487.0";

export default function RisingKeywordsSection() {
  return (
    <div className="relative w-full h-[326px] rounded-[10px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)]" 
         style={{ backgroundImage: "linear-gradient(96.2195deg, rgb(238, 235, 255) 0.99988%, rgb(251, 249, 255) 22.664%, rgb(244, 239, 255) 60.695%, rgb(233, 224, 255) 98.727%)" }}>
      
      {/* Left: Title with Trophy Icon */}
      <div className="absolute left-20 top-1/2 -translate-y-1/2 flex flex-col items-start">
        <p className="font-['Inter'] font-semibold text-[#212121] text-[32px] mb-4">
          Rising Keywords
        </p>
        <Trophy className="w-12 h-12 text-[#7557ff]" strokeWidth={1.5} />
      </div>

      {/* Right: Keywords Cards */}
      <div className="absolute right-20 bottom-0 flex items-end gap-4">
        {/* Rank 2: Fandom */}
        <div className="flex flex-col items-center">
          <p className="font-['Inter'] font-semibold text-[#7557ff] text-[20px] mb-3">
            Fandom
          </p>
          <div className="relative h-[144px] w-[120px] rounded-tl-[10px] rounded-tr-[10px] overflow-hidden">
            <img 
              alt="Fandom meme" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
              src={imgRectangle145} 
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Inter'] font-medium text-[#f2fbf9] text-[32px] z-10">
              2
            </p>
          </div>
        </div>

        {/* Rank 1: Funny (Tallest) */}
        <div className="flex flex-col items-center">
          <p className="font-['Inter'] font-semibold text-[#7557ff] text-[20px] mb-3">
            Funny
          </p>
          <div className="relative h-[180px] w-[120px] rounded-tl-[10px] rounded-tr-[10px] overflow-hidden">
            <img 
              alt="Funny meme" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
              src={imgRectangle72} 
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Inter'] font-medium text-[#f2fbf9] text-[32px] z-10">
              1
            </p>
          </div>
        </div>

        {/* Rank 3: English */}
        <div className="flex flex-col items-center">
          <p className="font-['Inter'] font-semibold text-[#7557ff] text-[20px] mb-3">
            English
          </p>
          <div className="relative h-[144px] w-[120px] rounded-tl-[10px] rounded-tr-[10px] overflow-hidden">
            <img 
              alt="English meme" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
              src={imgRectangle146} 
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Inter'] font-medium text-[#f2fbf9] text-[32px] z-10">
              3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}