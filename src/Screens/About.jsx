import React from 'react'
import { Button } from "@/components/ui/button"


const About = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16">
          <h1 className="text-4xl font-semibold mb-12">About us</h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="rounded-lg overflow-hidden w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
              <img
                alt="Jewelry"
                className="object-cover w-full h-full"
                height="500"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/500",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
            <div className="max-w-md space-y-6">
              <h2 className="text-3xl font-bold">Adorn Yourself With Our Classics</h2>
              <p className="text-lg">
                Welcome to helah, where every piece tells a story of affordable glamour. Proudly made in India with a
                passion for blending style and accessibility, we bring you imitation jewelry that mirrors the beauty of real
                gems. Join us on this journey of adornment, where each piece at helah is more than an accessory – it's a
                reflection of your unique style.
              </p>
              <Button className="bg-[#bd1e59] text-white">Explore our collections</Button>
            </div>
          </div>
        </div>
      )
}

export default About
