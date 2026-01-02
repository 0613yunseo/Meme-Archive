import svgPaths from "./svg-yc348q2pq8";

function Frame() {
  return (
    <div className="absolute inset-[23.83%_3.75%_57.48%_93.31%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p2af7f400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function SuggestMeme() {
  return (
    <div className="relative size-full" data-name="SuggestMeme">
      <div className="absolute bg-[rgba(117,87,255,0.2)] inset-0 rounded-[10px]" />
      <p className="absolute font-['Inter:Light',sans-serif] font-light inset-[59.35%_56.76%_29.44%_4.71%] leading-[normal] not-italic text-[20px] text-black text-nowrap">Can’t find the meme you want? Request a new one now.</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[23.83%_66.84%_55.61%_4.71%] leading-[normal] not-italic text-[36px] text-black text-nowrap">Suggest a New Meme!</p>
      <div className="absolute inset-[18.69%_2.94%_52.34%_92.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
          <circle cx="31" cy="31" fill="var(--fill-0, #F2FBF9)" id="Ellipse 3" r="31" />
        </svg>
      </div>
      <Frame />
    </div>
  );
}