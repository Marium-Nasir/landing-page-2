import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import BlackCard from "./BlackCard";
import BottomCards from "./BottomCards";
import Footer from "../FooterComponent/Footer";
// 

const MainSection = () => {
  return (
    <>
      <div className="flex flex-col bg-[#F0F0F0]">
        <Card1 />
        <Card2 />
        <Card3 />
        <BlackCard />
        <BottomCards />
        <Footer />
      </div>
    </>
  );
};

export default MainSection;
