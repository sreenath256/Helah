import React from "react";
import ProductCard3 from "../Cards/ProductCard3";
import ProductCard2 from "../Cards/ProductCard2";

const ShopCatogories = () => {
  return (
    <div className="md:mx-8 my-4 flex flex-col items-center w-full bg-[#CC4254] py-5 pb-12 md:rounded-[20px] px-3">
      <h1 className="text-white text-[25px] md:text-[30px] my-6 ">Shop by Categories</h1>
      <div className="grid gap-4 w-full mt-2 grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 ">
        <ProductCard3 />

        <ProductCard3 />
        <ProductCard3 />
        <ProductCard3 />

      </div>
    </div>
  );
};

export default ShopCatogories;
