import React, { useState, useEffect } from "react";
import ArtistReminder from "../../components/ArtistReminder/ArtistReminder";
import Footer from "../../components/Footer/Footer";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import MusicShowcase from "../../components/MusicShowcase/MusicShowcase";
import MainNavigation from "../../components/Navbars/MainNavigation/MainNavigation";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import NFTBreakdown from "../../components/NFTBreakdown/NFTBreakdown";
import SubscribeSection from "../../components/Subscribe/SubscribeSection";
import TestHero from "./TestHero";
import "./TestHomepageStyles.scss";

function TestHomepage() {
  const [hiddenNavClass, setHiddenNavClass] = useState("hidden-nav");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 25) {
        setHiddenNavClass("visible-nav");
      } else {
        setHiddenNavClass("hidden-nav");
      }
    };
    // const abortCont = new AbortController();
    window.addEventListener(
      "scroll",
      handleScroll
      // {
      //   signal: abortCont.signal,
      // }
    );
    // return () => abortCont.abort();
  }, []);

  return (
    <>
      {/* <nav className={hiddenNavClass}>
        <ul>
          <li>sfsafsaf</li>
          <li>afsfsd</li>
          <li>safsafsda</li>
        </ul>
      </nav> */}
      <MainNavigation />
      <TestHero />
      <HowItWorks />
      <MusicShowcase />
      <NFTBreakdown />
      <div>
        <ArtistReminder />
        <SubscribeSection />
      </div>
      <Footer />
    </>
  );
}

export default TestHomepage;
