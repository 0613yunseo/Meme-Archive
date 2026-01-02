import { Link } from "react-router-dom";

// 공용 컴포넌트 (src/components)
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Home 전용 컴포넌트 (src/pages/Home/components)
import HeroMemeCard from "./components/HeroMemeCard";
import SuggestMeme from "./components/SuggestMeme";
import VoteForHotMeme from "./components/VoteForHotMeme";

// 아이콘(svg path 모듈) (src/pages/Home/icons)
import svgPaths from "./icons/svg-zrnl2ixbqm";
import svgPathsCard from "./icons/svg-9uyemc2mj5";
import svgPathsCard2 from "./icons/svg-5iqltrt36e";
import svgPathsSearch from "./icons/svg-gbu6at6zs5";
import svgPathsArchiveArrow from "./icons/svg-xaolkape27";

// 이미지 (src/pages/Home/assets)
// 👉 파일명은 네가 실제 저장한 이름으로 변경해 줘
import imgHero1 from "./assets/hero-1.png";
import imgHero2 from "./assets/hero-2.png";
import imgHero3 from "./assets/hero-3.png";

import imgFrame427318914 from "./assets/frame-427318914.png";
import imgFrame427318915 from "./assets/frame-427318915.png";
import imgFrame427318916 from "./assets/frame-427318916.png";
import imgFrame427318917 from "./assets/frame-427318917.png";

import imgRectangle37 from "./assets/rectangle-37.png";
import imgRectangle38 from "./assets/rectangle-38.png";
import imgRectangle39 from "./assets/rectangle-39.png";
import imgRectangle40 from "./assets/rectangle-40.png";
import imgRectangle41 from "./assets/rectangle-41.png";

import imgSubtract from "./assets/subtract.png";
import imgRectangle157 from "./assets/rectangle-157.png";
import imgRectangle158 from "./assets/rectangle-158.png";

import imgFrame427318918 from "./assets/frame-427318918.png";
import imgFrame427318919 from "./assets/frame-427318919.png";
import imgFrame427318920 from "./assets/frame-427318920.png";
import imgFrame427318921 from "./assets/frame-427318921.png";
import imgEllipse2 from "./assets/ellipse-2.png";

// ─────────────────────────────────────────────

function TodayMemeCard({ image, title, label }) {
  return (
    <Link to="/archive/1" className="group cursor-pointer">
      <div className="h-[210px] rounded-[10px] overflow-hidden relative">
        <img alt={title} className="w-full h-full object-cover" src={image} />
        <div className="absolute bottom-[12px] left-[12px] right-[12px]">
          <div className="bg-white/90 backdrop-blur-sm rounded-[8px] px-[12px] py-[8px]">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#212121] truncate">
              {title}
            </p>
            {label && (
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#8d8d8d] mt-[2px]">
                {label}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

function MemeArchivePreview() {
  const memes = [
    { image: imgRectangle37, width: 286, height: 275 },
    { image: imgRectangle38, width: 422, height: 407 },
    { image: imgRectangle39, width: 286, height: 275 },
    { image: imgRectangle40, width: 286, height: 275 },
    { image: imgRectangle41, width: 286, height: 275 },
  ];

  return (
    <div className="content-stretch flex gap-[42px] items-center -ml-[300px]">
      {memes.map((meme, index) => (
        <Link
          key={index}
          to="/archive/1"
          className="group cursor-pointer block shrink-0"
          style={{ width: `${meme.width}px`, height: `${meme.height}px` }}
        >
          <div className="relative size-full">
            <div className="absolute inset-0 rounded-[10px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-[10px]"
              >
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[10px] size-full group-hover:scale-105 transition-transform duration-300"
                  src={meme.image}
                />
                <div className="absolute bg-[rgba(33,33,33,0.3)] inset-0 rounded-[10px]" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function QuickAction({  title, description, link }) {
  return (
    <Link to={link} className="group block">
      <div className="relative h-[214px] w-full bg-[rgba(117,87,255,0.2)] rounded-[10px] hover:bg-[rgba(117,87,255,0.25)] transition-colors cursor-pointer">
        {/* Circle Background */}
        <div className="absolute left-[40px] top-[40px] w-[62px] h-[62px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 62 62"
          >
            <circle cx="31" cy="31" fill="#FAFAFA" r="31" />
          </svg>
        </div>

        {/* Arrow Icon */}
        <div className="absolute right-[40px] top-[51px] w-[40px] h-[40px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 40 40"
          >
            <path d={svgPaths.p2af7f400} fill="#212121" />
          </svg>
        </div>

        {/* Title */}
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-[40px] top-[51px] text-[36px] text-[#212121] leading-[normal]">
          {title}
        </p>

        {/* Description */}
        <p className="absolute font-['Inter:Light',sans-serif] font-light left-[40px] top-[127px] text-[20px] text-[#212121] leading-[normal]">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {


  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Header */}
      <div className="relative w-full h-[121px]">
        <Header />
      </div>

      {/* Search + Today Meme 배경 그라데이션 */}
      <div className="relative w-full">
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="bg-gradient-to-b blur-[2px] filter from-[#fafafa] h-full to-[#fafafa] via-50% via-[#f4f1fb] w-full" />
        </div>

        {/* Search Bar */}
        <div className="w-full px-[40px] pt-[40px]">
          <div className="max-w-[560px] mx-auto">
            <div className="bg-[#f4f1fb] flex h-[50px] items-center justify-end pl-[32px] pr-[17px] py-[17px] rounded-[100px]">
              <input
                type="text"
                placeholder=""
                className="flex-1 bg-transparent border-none outline-none font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#212121] placeholder:text-[#8d8d8d]"
              />
              <div className="h-[35px] w-[34px] flex-shrink-0">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 34 35"
                >
                  <path d={svgPathsSearch.p2012a500} fill="#7557FF" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Today Meme Section */}
        <div className="w-full px-[40px] mt-[83px] pb-[60px]">
          <div className="max-w-[1360px] mx-auto">
            <div className="relative flex items-start justify-between">
              {/* Left Group */}
              <div className="flex items-start gap-[20px]">
                {/* 꽁꽁 고양이 */}
                <HeroMemeCard
                  image={imgHero3}
                  name="꽁꽁 고양이"
                  keyword="동물"
                  badge="NEW"
                  linkTo="/archive/1"
                />

                {/* Sad cat + popular list */}
                <div className="mt-[313px] flex items-start gap-[46px]">
                  <HeroMemeCard
                    image={imgHero1}
                    name="sad cat"
                    keyword="동물"
                    linkTo="/archive/1"
                  />

                  <div className="pb-[20px]">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-[#212121] mb-[16px]">
                      meme popular list
                    </p>
                    <div className="space-y-[8px]">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#212121]">
                        #1 Animals
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#212121]">
                        #2 Global
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#212121]">
                        #3 Funny
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Title */}
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[40px] flex flex-col items-center justify-start">
                <div className="text-center">
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[64px] text-[#7557ff] mb-[8px]">
                    Today meme
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-[#8d8d8d]">
                    Introduce today's meme
                  </p>
                </div>
              </div>

              {/* Right Card */}
              <HeroMemeCard
                image={imgHero2}
                name="Rick Roll"
                keyword="재미"
                linkTo="/archive/1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Meme Archive Section */}
      <div className="w-full px-[40px] mt-[120px]">
        <div className="max-w-[1360px] mx-auto">
          <Link
            to="/archive"
            className="flex items-center gap-[12px] mb-[40px] group w-fit"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[40px] text-[#212121] group-hover:text-[#7557ff] transition-colors">
              Meme Archive
            </p>
            <div className="h-[47px] w-[47px] group-hover:translate-x-1 transition-transform flex items-center justify-center">
              <div className="flex-none rotate-[180deg]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 47 47"
                >
                  <path
                    d={svgPathsArchiveArrow.p1fb1de80}
                    fill="#070707"
                    className="group-hover:fill-[#7557ff] transition-colors"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <MemeArchivePreview />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="w-full px-[40px] mt-[202px]">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col gap-[24px]">
            <Link to="/archive" className="block w-full h-[214px]">
              <SuggestMeme />
            </Link>

            <Link to="/community" className="block w-full h-[214px]">
              <VoteForHotMeme />
            </Link>
          </div>
        </div>
      </div>

      {/* Create Memes Section */}
      <div className="relative mt-[120px]">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="bg-gradient-to-b blur-[2px] filter from-[#fafafa] h-full to-[#fafafa] via-50% via-[#f4f1fb] w-full" />
        </div>

        <div className="w-full px-[40px] py-[80px]">
          <div className="max-w-[1360px] mx-auto">
            {/* Title */}
            <div className="text-center mb-[40px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[48px] text-[#212121] mb-[16px]">
                "Create Memes & Share Instantly"
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#212121]">
                "Design your own meme, remix trends, and share with the
                community in seconds."
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-[16px] justify-center mb-[60px]">
              <Link
                to="/archive"
                className="bg-[#f2fbf9] h-[48px] px-[32px] rounded-[10px] flex items-center justify-center hover:bg-[#e5f5f2] transition-colors"
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[20px] text-[#7557ff]">
                  Upload Memes
                </p>
              </Link>
              <Link
                to="/archive"
                className="bg-[#7557ff] h-[48px] px-[32px] rounded-[10px] flex items-center justify-center hover:bg-[#6547ef] transition-colors"
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[20px] text-[#f2fbf9]">
                  Get Started
                </p>
              </Link>
            </div>

            {/* Editor Preview */}
            <div className="mb-[60px] flex justify-center">
              <div className="w-[1170px] h-[600px] rounded-[18px] overflow-hidden">
                <img
                  alt="Meme editor preview"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1764663908286-b6b6ec959d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBzb2Z0d2FyZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjczNjU1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-[40px]">
              {/* Simple Editing Tools */}
              <div className="relative h-[286px] w-full">
                <div className="absolute left-0 top-0 w-[63px] h-[63px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 63 63"
                  >
                    <circle cx="31.5" cy="31.5" fill="#D8D9FA" r="31.5" />
                  </svg>
                </div>
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 440 286"
                >
                  <path
                    d="M430 0C435.523 0 440 4.47715 440 10V276C440 281.523 435.523 286 430 286H10C4.47715 286 0 281.523 0 276V96.1169C0 87.8088 10.0749 82.6116 18.0598 84.9062C22.8044 86.2696 27.8169 87 33 87C62.8234 87 87 62.8234 87 33C87 27.8169 86.2696 22.8044 84.9062 18.0598C82.6116 10.0749 87.8088 0 96.1169 0H430Z"
                    fill="#D8D9FA"
                  />
                </svg>
                <div className="absolute left-[13px] top-[13px] w-[38px] h-[38px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 38 38"
                  >
                    <path
                      d="M8.40394 32.4583C7.60409 32.4583 6.92708 32.1812 6.37292 31.6271C5.81875 31.0729 5.54167 30.3959 5.54167 29.5961V8.40394C5.54167 7.60409 5.81875 6.92708 6.37292 6.37292C6.92708 5.81875 7.60409 5.54167 8.40394 5.54167H19.2529C19.6488 5.54167 19.9456 5.66596 20.1436 5.91454C20.3415 6.16339 20.4404 6.43493 20.4404 6.72917C20.4404 7.0234 20.3374 7.29494 20.1313 7.54379C19.9252 7.79238 19.6242 7.91667 19.2284 7.91667H8.40394C8.28202 7.91667 8.1704 7.96746 8.06906 8.06906C7.96746 8.17039 7.91667 8.28202 7.91667 8.40394V29.5961C7.91667 29.718 7.96746 29.8296 8.06906 29.9309C8.1704 30.0325 8.28202 30.0833 8.40394 30.0833H29.5961C29.718 30.0833 29.8296 30.0325 29.9309 29.9309C30.0325 29.8296 30.0833 29.718 30.0833 29.5961V18.6711C30.0833 18.2752 30.2076 17.9784 30.4562 17.7804C30.7051 17.5825 30.9766 17.4836 31.2708 17.4836C31.5651 17.4836 31.8366 17.5825 32.0855 17.7804C32.334 17.9784 32.4583 18.2752 32.4583 18.6711V29.5961C32.4583 30.3959 32.1812 31.0729 31.6271 31.6271C31.0729 32.1812 30.3959 32.4583 29.5961 32.4583H8.40394ZM15.0417 21.527V18.7079C15.0417 18.326 15.1158 17.9591 15.2641 17.6071C15.4122 17.2548 15.6162 16.9488 15.8761 16.6891L29.3863 3.17894C29.6317 2.93326 29.9016 2.75408 30.1961 2.64139C30.4904 2.52871 30.7898 2.47238 31.0943 2.47238C31.4049 2.47238 31.7032 2.52871 31.9893 2.64139C32.2756 2.75408 32.5364 2.92811 32.7718 3.1635L34.7601 5.14583C34.9894 5.39151 35.1656 5.66253 35.2885 5.95887C35.4112 6.25522 35.4726 6.55566 35.4726 6.86019C35.4726 7.16471 35.4204 7.46001 35.3159 7.74606C35.2114 8.03238 35.0363 8.29825 34.7906 8.54367L21.2349 22.0998C20.9749 22.3594 20.669 22.5675 20.3169 22.724C19.9646 22.8802 19.5977 22.9583 19.2161 22.9583H16.473C16.0648 22.9583 15.7242 22.8218 15.4514 22.5486C15.1782 22.2758 15.0417 21.9352 15.0417 21.527ZM17.4167 20.5833H19.3899L29.258 10.7148L28.2716 9.7284L27.2151 8.7115L17.4167 18.51V20.5833Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-[127px] top-[32px] text-[24px] text-black">
                  Simple Editing Tools
                </p>
                <div className="absolute left-[127px] top-[83px] w-[298px] h-[0.85px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 298 0.85"
                  >
                    <line
                      stroke="#F2FBF9"
                      strokeWidth="0.85"
                      x2="298"
                      y1="0.425"
                      y2="0.425"
                    />
                  </svg>
                </div>
                <div className="absolute font-['Inter:Regular',sans-serif] font-normal left-[32px] top-[158px] text-[20px] text-black">
                  <p className="mb-0">Edit text, emoji, and layout easily</p>
                  <p>with drag &amp; drop.</p>
                </div>
              </div>

              {/* Live Preview */}
              <div className="relative h-[286px] w-full">
                <div className="absolute left-0 top-0 w-[63px] h-[63px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 63 63"
                  >
                    <circle cx="31.5" cy="31.5" fill="#D8D9FA" r="31.5" />
                  </svg>
                </div>
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 440 286"
                >
                  <path
                    d="M430 0C435.523 0 440 4.47715 440 10V276C440 281.523 435.523 286 430 286H10C4.47715 286 0 281.523 0 276V96.1169C0 87.8088 10.0749 82.6116 18.0598 84.9062C22.8044 86.2696 27.8169 87 33 87C62.8234 87 87 62.8234 87 33C87 27.8169 86.2696 22.8044 84.9062 18.0598C82.6116 10.0749 87.8088 0 96.1169 0H430Z"
                    fill="#D8D9FA"
                  />
                </svg>
                <div className="absolute left-[13px] top-[13px] w-[38px] h-[38px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 38 38"
                  >
                    <path
                      d="M19 6V20M19 6L14 11M19 6L24 11M10 14V26C10 27.1046 10.8954 28 12 28H26C27.1046 28 28 27.1046 28 26V14"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-[127px] top-[32px] text-[24px] text-black">
                  Live Preview
                </p>
                <div className="absolute left-[127px] top-[83px] w-[298px] h-[0.85px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 298 0.85"
                  >
                    <line
                      stroke="#F2FBF9"
                      strokeWidth="0.85"
                      x2="298"
                      y1="0.425"
                      y2="0.425"
                    />
                  </svg>
                </div>
                <div className="absolute font-['Inter:Regular',sans-serif] font-normal left-[32px] top-[158px] text-[20px] text-black">
                  <p className="mb-0">See your meme update instantly</p>
                  <p>as you edit.</p>
                </div>
              </div>

              {/* Instant Sharing */}
              <div className="relative h-[286px] w-full">
                <div className="absolute left-0 top-0 w-[63px] h-[63px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 63 63"
                  >
                    <circle cx="31.5" cy="31.5" fill="#D8D9FA" r="31.5" />
                  </svg>
                </div>
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 440 286"
                >
                  <path
                    d="M430 0C435.523 0 440 4.47715 440 10V276C440 281.523 435.523 286 430 286H10C4.47715 286 0 281.523 0 276V96.1169C0 87.8088 10.0749 82.6116 18.0598 84.9062C22.8044 86.2696 27.8169 87 33 87C62.8234 87 87 62.8234 87 33C87 27.8169 86.2696 22.8044 84.9062 18.0598C82.6116 10.0749 87.8088 0 96.1169 0H430Z"
                    fill="#D8D9FA"
                  />
                </svg>
                <div className="absolute left-[13px] top-[13px] w-[38px] h-[38px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 38 38"
                  >
                    <path
                      d="M19 6V20M19 6L14 11M19 6L24 11M10 14V26C10 27.1046 10.8954 28 12 28H26C27.1046 28 28 27.1046 28 26V14"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-[127px] top-[32px] text-[24px] text-black">
                  Instant Sharing
                </p>
                <div className="absolute left-[127px] top-[83px] w-[298px] h-[0.85px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 298 0.85"
                  >
                    <line
                      stroke="#F2FBF9"
                      strokeWidth="0.85"
                      x2="298"
                      y1="0.425"
                      y2="0.425"
                    />
                  </svg>
                </div>
                <div className="absolute font-['Inter:Regular',sans-serif] font-normal left-[32px] top-[158px] text-[20px] text-black">
                  <p className="mb-0">Upload and share your meme</p>
                  <p>to the community with one click.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="w-full px-[40px] mt-[120px]">
        <div className="max-w-[1360px] mx-auto">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] mb-[40px] not-italic text-[#212121] text-[40px]">
            Community
          </p>

          {/* Featured Meme of the Week */}
          <div className="flex gap-[20px] mb-[60px]">
            <div className="bg-[#f4f1fb] h-[385px] overflow-clip rounded-[18px] w-[670px]">
              <div className="relative h-full">
                <div className="absolute h-[161px] left-[166.5px] top-[114.5px] w-[337px]">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[168.5px] not-italic text-[#212121] text-[24px] text-center top-0 translate-x-[-50%] w-[337px]">
                    Featured Meme of the Week
                  </p>
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#212121] text-[16px] top-[37px] w-[337px]">
                    "When Monday hits different" - by @user123
                  </p>
                  <div className="absolute left-[128px] size-[81px] top-[80px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 81 81"
                    >
                      <circle cx="40.5" cy="40.5" fill="#FAFAFA" r="40.5" />
                    </svg>
                  </div>
                  <div className="absolute left-[135px] size-[67px] top-[87px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 67 67"
                    >
                      <path
                        d="M67 33.5C67 51.9731 51.9731 67 33.5 67C15.0269 67 0 51.9731 0 33.5C0 15.0269 15.0269 0 33.5 0C51.9731 0 67 15.0269 67 33.5Z"
                        fill="#7557FF"
                      />
                      <path
                        d="M34.0089 13.1077L37.5089 23.7077H48.5089L39.5089 30.4077L43.0089 41.0077L34.0089 34.3077L25.0089 41.0077L28.5089 30.4077L19.5089 23.7077H30.5089L34.0089 13.1077Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="relative h-[385px] rounded-[18px] w-[670px]">
              <img
                alt="Featured meme of the week"
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full"
                src="https://images.unsplash.com/photo-1667745009296-fae4f97bdf7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5ueSUyMGdvbGRlbiUyMGJpdGNvaW58ZW58MXx8fHwxNzY3MzY0NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </div>
          </div>

          {/* Today's Meme Poll */}
          <div className="mb-[32px]">
            <div className="h-[41px] mb-[24px] overflow-clip relative w-[1360px]">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[37px] not-italic text-[#212121] text-[24px] text-nowrap top-[8px]">
                Today's Meme Poll
              </p>
              <div className="absolute left-0 size-[32px] top-[4px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 32 32"
                >
                  <rect width="3" height="18" x="3" y="3" fill="#212121" rx="1" />
                  <rect width="3" height="12" x="9" y="9" fill="#212121" rx="1" />
                  <rect width="3" height="14" x="15" y="7" fill="#212121" rx="1" />
                </svg>
              </div>
            </div>

            {/* Poll Cards */}
            <div className="grid grid-cols-3 gap-[20px] mb-[56px]">
              {/* Card 1 */}
              <div className="relative bg-[rgba(117,87,255,0.2)] h-[290px] overflow-clip rounded-[10px] w-full">
                <div className="absolute h-[183px] left-[33px] rounded-[10px] top-[24px] w-[373px]">
                  <img
                    alt="Vote option 1"
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full"
                    src="https://images.unsplash.com/photo-1582140141257-f4588733e374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGRvZyUyMGRyYXdpbmd8ZW58MXx8fHwxNzY3MzY0NTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </div>
                <button className="absolute bg-[#7557ff] h-[34px] left-[50%] overflow-clip rounded-[10px] top-[224px] translate-x-[-50%] w-[373px] hover:bg-[#6447ef] transition-colors">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[50%] not-italic text-[16px] text-nowrap text-white top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    Vote
                  </p>
                </button>
                <div className="absolute content-stretch flex flex-col inset-[258px_24px_5px_24px] items-center justify-center overflow-clip px-[137px] py-[5px]">
                  <div className="h-[17px] leading-[normal] not-italic relative shrink-0 text-nowrap w-[99px]">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[#212121] text-[14px] top-0">
                      42%
                    </p>
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[36px] text-[#7557ff] text-[10px] top-[4px]">
                      (1,245 votes)
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative bg-[rgba(117,87,255,0.2)] h-[290px] overflow-clip rounded-[10px] w-full">
                <div className="absolute h-[183px] left-[33px] rounded-[10px] top-[24px] w-[373px]">
                  <img
                    alt="Vote option 2"
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full"
                    src="https://images.unsplash.com/photo-1726981896511-330f72686b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzY3MzY0NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </div>
                <button className="absolute bg-[#7557ff] h-[34px] left-[50%] overflow-clip rounded-[10px] top-[224px] translate-x-[-50%] w-[373px] hover:bg-[#6447ef] transition-colors">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[50%] not-italic text-[16px] text-nowrap text-white top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    Vote
                  </p>
                </button>
                <div className="absolute content-stretch flex flex-col inset-[258px_24px_5px_24px] items-center justify-center overflow-clip px-[137px] py-[5px]">
                  <div className="h-[17px] leading-[normal] not-italic relative shrink-0 text-nowrap w-[99px]">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[#212121] text-[14px] top-0">
                      35%
                    </p>
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[36px] text-[#7557ff] text-[10px] top-[4px]">
                      (1,037 votes)
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative bg-[rgba(117,87,255,0.2)] h-[290px] overflow-clip rounded-[10px] w-full">
                <div className="absolute h-[183px] left-[33px] rounded-[10px] top-[24px] w-[373px]">
                  <img
                    alt="Vote option 3"
                    className="w-full h-full object-cover rounded-[10px]"
                    src="https://images.unsplash.com/photo-1657314310600-6a63e9ef1859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNhdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzM2NDUyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </div>
                <button className="absolute bg-[#7557ff] h-[34px] left-[50%] overflow-clip rounded-[10px] top-[224px] translate-x-[-50%] w-[373px] hover:bg-[#6447ef] transition-colors">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[50%] not-italic text-[16px] text-nowrap text-white top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    Vote
                  </p>
                </button>
                <div className="absolute content-stretch flex flex-col inset-[258px_24px_5px_24px] items-center justify-center overflow-clip px-[137px] py-[5px]">
                  <div className="h-[17px] leading-[normal] not-italic relative shrink-0 text-nowrap w-[99px]">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[#212121] text-[14px] top-0">
                      20%
                    </p>
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[36px] text-[#7557ff] text-[10px] top-[4px]">
                      (593 votes)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Top Memes */}
          <div className="flex items-center justify-between mb-[32px]">
            <div className="flex items-center gap-[8px]">
              <div className="size-[32px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 32 32"
                >
                  <path d={svgPaths.p6c41d80} fill="#212121" />
                </svg>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[24px] text-[#212121]">
                Weekly Top Memes
              </p>
            </div>
            <Link
              to="/community"
              className="flex items-center gap-[8px] hover:opacity-70 transition-opacity"
            >
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#7557ff]">
                View all
              </p>
              <div className="h-[20px] w-[20px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    d={svgPaths.p1de2ce00}
                    fill="#7557FF"
                    transform="rotate(180 10 10)"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Weekly Top Meme Cards */}
          <div className="grid grid-cols-4 gap-[27px]">
            {[
              {
                image: imgFrame427318914,
                title: '"Suspicious Shiba"',
                likes: "10.5k",
                comments: "250",
              },
              {
                image: imgFrame427318915,
                title: 'Primogif/미드 "The Office"',
                likes: "9.6k",
                comments: "158",
              },
              {
                image: imgFrame427318916,
                title: "Make no peace with evil",
                likes: "8.8k",
                comments: "102",
              },
              {
                image: imgFrame427318917,
                title: "Off-Work Hamster",
                likes: "7.9k",
                comments: "98",
              },
            ].map((meme, index) => (
              <Link key={index} to="/archive/1" className="group">
                <div className="relative h-[255px] w-[320px] group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute h-[188px] left-[-2px] rounded-tl-[10px] rounded-tr-[10px] top-0 w-[325px]">
                    <img
                      alt={meme.title}
                      className="w-full h-full object-cover rounded-tl-[10px] rounded-tr-[10px]"
                      src={meme.image}
                    />
                  </div>
                  <div className="absolute bg-[#f4f1fb] h-[97px] left-[-2px] overflow-clip rounded-b-[10px] top-[158px] w-[325px]">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[10px] not-italic text-[#212121] text-[12px] text-nowrap top-[calc(50%-2.5px)]">
                      {meme.title}
                    </p>
                    <div className="absolute content-stretch flex gap-[4px] items-center left-[11px] top-[69px]">
                      <div className="h-[10px] relative shrink-0 w-[11px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 11 10"
                        >
                          <path
                            d={svgPaths.p21abd00}
                            fill="var(--fill-0, #212121)"
                          />
                        </svg>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#212121] text-[10px] text-nowrap">
                        {meme.likes}
                      </p>
                    </div>
                    <div className="absolute content-stretch flex gap-[4px] items-end left-[55px] top-[69px]">
                      <div className="h-[10px] relative shrink-0 w-[11px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 11 10"
                        >
                          <path
                            d={svgPaths.p18e27000}
                            fill="var(--fill-0, #212121)"
                          />
                        </svg>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#212121] text-[10px] text-nowrap">
                        {meme.comments}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* User Recommended Memes */}
      <div className="w-full px-[40px] mt-[56px]">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex items-center mb-[32px]">
            <div className="size-[32px] mr-[8px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 32 32"
              >
                <path d={svgPaths.p26256300} fill="#212121" />
              </svg>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[24px] text-[#212121]">
              User Recommended Memes
            </p>
            <div className="ml-auto flex items-center gap-[8px] cursor-pointer hover:opacity-70 transition-opacity">
              <Link to="/community" className="flex items-center gap-[8px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#7557ff]">
                  View all
                </p>
                <div className="size-[20px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d={svgPaths.p1de2ce00}
                      fill="#7557FF"
                      transform="rotate(180 10 10)"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-[27px]">
            {[
              { image: imgFrame427318918, user: "@Aiden", likes: "7.8k" },
              { image: imgFrame427318919, user: "@Mason", likes: "6.1k" },
              { image: imgFrame427318920, user: "@Logan", likes: "4.8k" },
              { image: imgFrame427318921, user: "@Caleb", likes: "5.6k" },
            ].map((meme, index) => (
              <Link key={index} to="/archive/1" className="group">
                <div className="relative h-[255px] w-[320px] group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute h-[188px] left-[-2px] rounded-tl-[10px] rounded-tr-[10px] top-0 w-[325px]">
                    <img
                      alt={meme.user}
                      className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[10px] rounded-tr-[10px] size-full"
                      src={meme.image}
                    />
                  </div>
                  <div className="absolute bg-[#f4f1fb] h-[97px] left-[-2px] overflow-clip rounded-[10px] top-[158px] w-[325px]">
                    <div className="absolute inset-[40px_80px_30px_10px] overflow-clip">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[33px] not-italic text-[#212121] text-[12px] text-nowrap top-[calc(50%-5.5px)]">
                        {meme.user}
                      </p>
                      <div className="absolute left-[3px] size-[24px] top-[2px]">
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          height="24"
                          src={imgEllipse2}
                          width="24"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-[69px_70px_13px_0] overflow-clip">
                      <div className="absolute content-stretch flex gap-[4px] items-center left-[18px] top-[3px]">
                        <div className="h-[8px] relative shrink-0 w-[9px]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 9 8"
                          >
                            <path
                              d={svgPaths.p3b240410}
                              fill="var(--fill-0, #212121)"
                            />
                          </svg>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#212121] text-[10px] text-nowrap">
                          {meme.likes}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* What we do */}
      <div className="relative mt-[120px] mb-[120px]">
        <div className="w-full px-[40px]">
          <div className="max-w-[1360px] mx-auto">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[48px] text-[#212121] mb-[60px]">
              What we do
            </p>

            <div className="flex gap-[80px] items-start">
              {/* Left side */}
              <div className="flex-shrink-0 h-[449.178px] flex flex-col justify-between">
                <button className="bg-[#7557ff] text-white px-[24px] py-[12px] rounded-[8px] flex items-center gap-[8px] hover:bg-[#6347ef] transition-colors w-fit">
                  <span className="font-['Inter:Medium',sans-serif] text-[16px]">
                    Explore Services
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <p className="font-['Inter:Regular',sans-serif] font-normal text-[18px] text-[#212121]">
                  Design, Develop and Run
                  <br />
                  Any Business meme
                  <br />
                  You Need
                </p>
              </div>

              {/* Right cards */}
              <div className="flex gap-[30.7px]">
                {/* About company */}
                <div className="relative w-[347.305px] h-[449.178px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 347.305 449.178"
                  >
                    <path d={svgPathsCard.p32c06680} fill="#D8D9FA" />
                  </svg>
                  <div className="absolute inset-[5.02%_5.76%_48.25%_5.76%]">
                    <img
                      alt="About company"
                      className="block max-w-none size-full object-cover rounded-[10px]"
                      src={imgSubtract}
                    />
                  </div>
                  <div className="absolute inset-[2%_76.97%_81.3%_1.44%]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 75 75"
                    >
                      <circle cx="37.5" cy="37.5" fill="#D8D9FA" r="37.5" />
                    </svg>
                  </div>
                  <div className="absolute left-[25px] size-[36px] top-[29px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 36 36"
                    >
                      <path d={svgPathsCard.p3bc06b80} fill="black" />
                    </svg>
                  </div>
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[55.88%_37.23%_37.66%_5.18%] leading-[normal] not-italic text-[#7557ff]">
                    <span className="text-[24px]">About_</span>
                    <span className="text-[20px]"> </span>
                    <span className="text-[24px]">company</span>
                  </p>
                  <div className="absolute inset-[64.69%_37.23%_35.31%_5.31%]">
                    <div className="absolute inset-[-0.43px_-0.21%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 200.424 0.850781"
                      >
                        <path
                          d={svgPathsCard.p370c4280}
                          stroke="#FAFAFA"
                          strokeLinecap="round"
                          strokeWidth="0.85"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[71.24%_13.62%_15.4%_5.18%] leading-[normal] not-italic text-[#212121] text-[12px]">
                    <p className="mb-0">
                      저희는 사용자들이 추천한 다양한 밈을 가져와 투표와 꾸미기를 통해
                      더 쉽게 접근할 수 있도록 합니다. 또한 사용자들의 다양한 의견을
                      수집해 밈 커뮤니티 활동이 더 나은
                    </p>
                    <p>방향으로 운영되도록 합니다.</p>
                  </div>
                </div>

                {/* About community */}
                <div className="relative w-[347.305px] h-[449.178px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 347.305 449.178"
                  >
                    <path d={svgPathsCard2.p527480} fill="#D8D9FA" />
                  </svg>
                  <div className="absolute font-['Inter:Medium',sans-serif] font-normal inset-[7.12%_31.18%_79.74%_6.05%] leading-[normal] not-italic text-[#7557ff] text-[24px]">
                    <p className="mb-0">About_ </p>
                    <p>community</p>
                  </div>
                  <div className="absolute inset-[24.63%_5.92%_48.11%_5.92%] rounded-[10px]">
                    <img
                      alt="About community"
                      className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[10px] size-full"
                      src={imgRectangle157}
                    />
                  </div>
                  <div className="absolute inset-[64.69%_37.35%_35.31%_5.18%]">
                    <div className="absolute inset-[-0.43px_-0.21%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 200.424 0.850781"
                      >
                        <path
                          d={svgPathsCard2.p370c4280}
                          stroke="#FAFAFA"
                          strokeLinecap="round"
                          strokeWidth="0.85"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular','Noto_Sans:Regular',sans-serif] font-normal inset-[71.24%_12.76%_15.4%_6.05%] leading-[normal] not-italic text-[#212121] text-[12px]">
                    <p className="mb-0">
                      저희 커뮤니티는 누구나 편하게 의견을 나누고 콘텐츠를 공유할 수 있는
                      열린 공간을 지향합니다.
                    </p>
                    <p className="mb-0">
                      사용자는 단순한 구독자가 아니라, 함께 문화를 만들고
                    </p>
                    <p>확장하는 크리에이터 입니다.</p>
                  </div>
                </div>

                {/* About meme */}
                <div className="relative w-[347.305px] h-[449.178px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 347.305 449.178"
                  >
                    <path d={svgPathsCard2.p527480} fill="#D8D9FA" />
                  </svg>
                  <div className="absolute font-['Inter:Medium',sans-serif] font-normal inset-[7.12%_31.18%_79.74%_6.05%] leading-[normal] not-italic text-[#7557ff] text-[24px]">
                    <p className="mb-0">About_ </p>
                    <p>meme</p>
                  </div>
                  <div className="absolute inset-[24.63%_5.92%_48.11%_5.92%] rounded-[10px]">
                    <img
                      alt="About meme"
                      className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[10px] size-full"
                      src={imgRectangle158}
                    />
                  </div>
                  <div className="absolute inset-[64.69%_37.35%_35.31%_5.18%]">
                    <div className="absolute inset-[-0.43px_-0.21%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 200.424 0.850781"
                      >
                        <path
                          d={svgPathsCard2.p370c4280}
                          stroke="#FAFAFA"
                          strokeLinecap="round"
                          strokeWidth="0.85"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular','Noto_Sans:Regular',sans-serif] font-normal inset-[71.24%_12.76%_15.4%_6.05%] leading-[normal] not-italic text-[#212121] text-[12px]">
                    <p className="mb-0">
                      저희는 유머와 창의성의 자유를 존중하면서도,
                    </p>
                    <p className="mb-0">
                      모두가 편안하고 안전한 환경을 유지하는 것을 최우선 가치로
                    </p>
                    <p>두고 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-[180px]">
        <Footer />
      </div>
    </div>
  );
}
