// src/Home/Home.jsx
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Hero from "./Hero";
import TodayMeme from "./TodayMeme";
import MemeArchivePreview from "./MemeArchivePreview";
import SuggestSection from "./SuggestSection";
import CreateShowcase from "./CreateShowcase";
import CommunityPreview from "./CommunityPreview";
import WhatWeDo from "./WhatWeDo";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TodayMeme />
      <MemeArchivePreview />
      <SuggestSection />
      <CreateShowcase />
      <CommunityPreview />
      <WhatWeDo />
      <Footer />
    </>
  );
}
