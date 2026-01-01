import imgRectangle72 from "../../../assets/Photo/2.png";
import imgRectangle145 from "../../../assets/Photo/Funny.png";
import imgRectangle146 from "../../../assets/Photo/17.png";

function TrophyIcon({ className = "" }) {

  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Figma 느낌에 맞춰 stroke 기반 트로피 */}
      <path
        d="M20 16H40V26C40 34.5 35.5 40 30 40C24.5 40 20 34.5 20 26V16Z"
        stroke="#7557FF"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M20 20H14V26C14 31 17 34 20 34"
        stroke="#7557FF"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M40 20H46V26C46 31 43 34 40 34"
        stroke="#7557FF"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M30 40V46"
        stroke="#7557FF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 52H38"
        stroke="#7557FF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 48H40"
        stroke="#7557FF"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Group56() {
  return (
    <div className="relative h-[326px] w-full max-w-[1360px] mx-auto">
      {/* 전체 배경 */}
      <div
        className="absolute left-0 top-0 h-[326px] w-full rounded-[10px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)]"
        style={{
          background:
            "linear-gradient(91.5deg, #EEEBFF 1%, #FBF9FF 22.66%, #F4EFFF 60.7%, #E9E0FF 98.73%)",
        }}
      />

      {/* Rising Keywords 텍스트 (페이지좌표 -> 컴포넌트좌표 변환 반영) */}
      <p
        className="absolute left-[84.13px] top-[86.5px] h-[39px] w-[268px] font-['Inter'] text-[32px] font-semibold text-[#212121]"
        style={{ lineHeight: "39px" }}
      >
        Rising Keywords
      </p>

      {/* 트로피 원형 배경 (91x91, bg #E7E1FF) */}
      <div className="absolute left-[84.13px] top-[148.5px] h-[91px] w-[91px] rounded-full bg-[#E7E1FF]">
        {/* 아이콘 크기/위치: w 53 h 52, top 19.5 left 18.88 */}
        <TrophyIcon className="absolute left-[18.88px] top-[19.5px] h-[52px] w-[53px]" />
      </div>

      {/* ====== 순위 카드 영역 (오른쪽 기준 + gap 고정, 겹침 방지) ====== */}
      <div className="absolute right-[125px] bottom-0 flex gap-[31px]">
        {/* Fandom (2) - 아래쪽 */}
        <div className="relative w-[149px] mt-[76px]">
          <p className="w-full text-center font-['Inter'] text-[24px] font-semibold text-[#7557FF]">
            Fandom
          </p>

          <div className="relative mt-[26px] h-[144px] w-[149px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px]">
            <img
              alt=""
              src={imgRectangle145}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
            <p className="absolute top-[33px] left-0 right-0 text-center font-['Inter'] text-[32px] font-medium text-[#F2FBF9]">
              2
            </p>
          </div>
        </div>

        {/* Funny (1) - 위쪽(큰 카드) */}
        <div className="relative w-[149px]">
          <p className="w-full text-center font-['Inter'] text-[24px] font-semibold text-[#7557FF]">
            Funny
          </p>

          <div className="relative mt-[27px] h-[219px] w-[149px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px]">
            <img
              alt=""
              src={imgRectangle72}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
            <p className="absolute top-[31px] left-0 right-0 text-center font-['Inter'] text-[32px] font-medium text-[#F2FBF9]">
              1
            </p>
          </div>
        </div>

        {/* English (3) - 아래쪽 */}
        <div className="relative w-[149px] mt-[76px]">
          <p className="w-full text-center font-['Inter'] text-[24px] font-semibold text-[#7557FF]">
            English
          </p>

          <div className="relative mt-[26px] h-[144px] w-[149px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px]">
            <img
              alt=""
              src={imgRectangle146}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
            <p className="absolute top-[33px] left-0 right-0 text-center font-['Inter'] text-[32px] font-medium text-[#F2FBF9]">
              3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}