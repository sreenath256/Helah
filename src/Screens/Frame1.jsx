import FlashSaleBanner from "@/Components/Banners/FlashSaleBanner";
import BestSellers from "@/Components/BestSellers/BestSellers";
import HelahPromis from "@/Components/HelahPromise/HelahPromis";
import ImageSlider from "@/Components/ImageSlider/ImageSlider";
import RecentlyViewed from "@/Components/RecentlyViewed/RecentlyViewed";
import ShopCatogories from "@/Components/ShopCatogories/ShopCatogories";
import React from "react";

const Frame1 = () => {
  return (
    <div>
      <div className="w-full flex h-[640px] bg-[#FFEFF1] md:py-11 md:px-20 justify-center">
        <ImageSlider />
      </div>
      <div className="mt-6">
        <FlashSaleBanner />
      </div>
      <div className="mt-8">
        <RecentlyViewed />
      </div>
      <div className="mt-8">
        <ShopCatogories/>
      </div>
      <div className="mt-8">
        <BestSellers/>
      </div>
      <div className="mt-8">
        <HelahPromis/>
      </div>
    </div>
  );
};

export default Frame1;
