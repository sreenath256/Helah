import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#FFECEF]">
      <div className="flex flex-col   justify-center md:items-center p-8 bg-[#FFECEF]  text-[#CC4254]">
        <div className="w-1/2 ">
          <h1 className="text-4xl">Adorn</h1>

          <h1 className="text-7xl">yourself</h1>
          <h1 className="text-4xl">with our</h1>
          <h1 className="text-7xl">Classics</h1>
            <Link to='/collection'>
          <Button className="bg-[#CC4254] mt-3 text-white font-Inter ">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart4"
              viewBox="0 0 16 16"
              >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>  
              Shop Collection
          </Button>
              </Link>
        </div>
      </div>
      <div
        className="pt-4 bg-no-repeat bg-bottom  flex items-end"
        style={{ backgroundSize: "100%" }}
      >
        <div
          className="flex items-end bg-bottom relative right-9 bg-no-repeat w-full h-full"
          style={{ backgroundSize: "81%" }}
        >
          <img
            alt="Fashion model"
            className="object-contain w-full h-full"
            height="100"
            src={
              "https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/helahomeimg1.png"
            }
            style={{
              aspectRatio: "100/100",
              objectFit: "contain",
              objectPosition: "bottom",
            }}
            width="100"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
