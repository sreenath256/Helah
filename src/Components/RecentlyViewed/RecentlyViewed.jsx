import React from "react";
import ProductCard2 from "../Cards/ProductCard2";

const RecentlyViewed = () => {
  return (
    <div className="my-12 mx-4"> 
      <h1 className="text-[30px] text-[#2C2C2C] text-center">Recently Viewed</h1>
      <div className="grid gap-4 mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
        </div>
    </div>
  );
};

export default RecentlyViewed;
