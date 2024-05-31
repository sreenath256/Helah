import { Button } from "@/components/ui/button";
import React from "react";

const ProductCard4 = () => {
  return (
    <div
      className="w-[417px] h-[533px] flex flex-col rounded-2xl py-10 ml-8  bg-cover items-center justify-end"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="flex justify-center items-center flex-col"> 
        <h1 className="text-[30px] text-white"> Explore below</h1>{" "}
        <Button className="bg-[#CC4254] mt-3 w-[158px] h-[54px] rounded-[27px] font-Inter text-[20px] text-white  ">
          Explore now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard4;
