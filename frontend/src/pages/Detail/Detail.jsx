import React from "react";
import "./Detail.css";
import { Link } from "react-router-dom";
import { Search, Heart, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";


// ✅ 공통 Header/Footer - 주석 처리
// import Header from "../../components/Header.jsx";
// import Footer from "../../components/Footer.jsx";

//공통 컴포넌트
import KeywordPill from "../../components/KeywordUI/KeywordPill";
import KeywordCardTall from "../../components/KeywordUI/KeywordCardTall";
import KeywordCardWide from "../../components/KeywordUI/KeywordCardWide";

import mainImage from "./assets/images/detail-main-goat.png";
import useCase1 from "./assets/images/usecase-01-basketball.png";
import useCase2 from "./assets/images/usecase-02-just-goat.png";
import useCase3 from "./assets/images/usecase-03-travelgo.png";
import useCase4 from "./assets/images/usecase-04-pizza.png";
import useCase5 from "./assets/images/usecase-05-you-goat.png";

import similar1 from "./assets/images/similar-01.png";
import similar2 from "./assets/images/similar-02.png";
import similar3 from "./assets/images/similar-03.png";

import prevMeme from "./assets/images/nav-prev-meme.png";
import nextMeme from "./assets/images/nav-next-meme.png";

export default function Detail() {
  return (
    <div className="detailPage">
      <div className="detailWrap">
        {/* ✅ 공통 Header - 주석 처리 */}
        {/* <div className="detailHeaderSticky">
          <Header />
        </div> */}

        <div className="detailContent">
          {/* Title + Search */}
          <div className="detailTopRow">
            <h1 className="detailTitle">Meme Archive</h1>
            <button className="detailSearchBtn" type="button">
              <Search className="detailSearchIcon" size={24} />
            </button>
          </div>

          {/* Main 2 columns */}
          <div className="detailMainGrid">
            <div className="detailMainImageBox">
              <img className="detailMainImage" src={mainImage} alt="GOAT Meme" />
              <button className="detailOriginBtn" type="button">
                원본 링크
              </button>
            </div>

            <div className="detailInfo">
              <div className="detailNameRow">
                <h2 className="detailMemeName">GOAT</h2>
                <div className="detailHeart">
                  <Heart className="detailHeartIcon" size={18} />
                </div>
              </div>

              <div className="detailTags">
                <button className="tagBtn" type="button">Funny</button>
                <button className="tagBtn" type="button">Fandom</button>
                <button className="tagBtn" type="button">Celebrity</button>
              </div>

              <div className="detailDesc">
                <p>
                  GOAT는 영어 'Greatest Of All Time'의 약자로, 최고를 뜻하는 표현입니다.
                  1990년대 해외에서 복싱선수 무하마드 알리를 지칭하는 말로 처음 확산되었으며,
                  국내에서는 2010년대 농구선수 마이클 조던을 'GOAT'라고 부르며 널리 사용되기 시작했습니다.
                  이후 메시, 호날두 등 다양한 스포츠 스타에게 적용되면서 수많은 변형 밈이 생성되었고,
                  현재는 스포츠 분야를 넘어 인터넷 전반에서 '레전드', 'GOD'과 유사한 의미로 사용됩니다.
                </p>
                <p>
                  GOAT는 뛰어나고 훌륭한 대상에 감탄을 표현할 때 쓰이며, 염소 이모티콘과 함께 활용되거나
                  다양한 합성 밈 형태로 변주되기도 합니다. 예를 들어 '그저 GOAT', '또 당신입니까 GOAT'처럼
                  대상에 대한 존경과 찬사를 강조하는 문구로 자주 사용됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* Meme Use Cases */}
          <section className="useCaseSection">
            <h3 className="sectionTitle">Meme Use Cases</h3>

            <div className="useCaseViewport">
              <div className="useCaseScroller">
                <div className="useCaseRow">
                  <UseCard src={useCase1} alt="usecase 1" />
                  <UseCard src={useCase2} alt="usecase 2" />
                  <UseCard src={useCase3} alt="usecase 3" />
                  <UseCard src={useCase4} alt="usecase 4" />
                  <UseCard src={useCase5} alt="usecase 5" />
                </div>
              </div>
            </div>
          </section>

          {/* Similar Memes */}
          <section className="similarSection">
            <div className="similarBg">
              <div className="similarLayout">
                <div className="similarLeft">
                  <h3 className="similarTitle">See More</h3>
                  <p className="similarTitle2">Similar Memes</p>

                  <div className="similarTags">
                    <button className="tagBtn" type="button">Funny</button>
                    <button className="tagBtn" type="button">Fandom</button>
                    <button className="tagBtn" type="button">Celebrity</button>
                  </div>
                </div>

                <div className="similarRight">
                  <div className="similarBig">
                    <img src={similar1} alt="similar 1" />
                  </div>

                  <div className="similarBottomRow">
                    <div className="similarSmall">
                      <img src={similar2} alt="similar 2" />
                    </div>

                    <div className="similarSmall hasArrow">
                      <img src={similar3} alt="similar 3" />
                      <div className="similarArrow">
                        <ArrowUpRight className="similarArrowIcon" size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prev / Next */}
          <div className="navRow">
            <Link to="/community" className="navItem left">
              <div className="navLabel">
                <ArrowLeft className="navIcon" size={25} />
                <span>Previous Meme</span>
              </div>
              <img className="navThumb" src={prevMeme} alt="prev meme" />
            </Link>

            <Link to="/community" className="navItem right">
              <div className="navLabel">
                <span>Next meme</span>
                <ArrowRight className="navIcon" size={25} />
              </div>
              <img className="navThumb" src={nextMeme} alt="next meme" />
            </Link>
          </div>
        </div>

        {/* ✅ 공통 Footer - 주석 처리 */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

// ✅ CSS로 크기 제어하므로 props 제거
function UseCard({ src, alt }) {
  return (
    <div className="useCard">
      <img className="useImg" src={src} alt={alt} />
    </div>
  );
}
