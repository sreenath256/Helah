import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[90vh] bg-[#FFEFF1] ">
        <div className="flex flex-col items-center  justify-center">

      <h1 className="text-[45px]  mb-8">Contact</h1>
      <form className="w-full max-w-lg">
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              className="border-[0.8px] font-Inter border-[#C84253] rounded-lg p-2"
              placeholder="Name"
            />
            <Input
              className="border-[0.8px] font-Inter border-[#C84253] rounded-lg p-2"
              placeholder="Email*"
              required
              type="email"
            />
          </div>
          <Input
            className="border-[0.8px] font-Inter border-[#C84253] rounded-lg p-2"
            placeholder="Phone"
            />
          <Textarea
            className="border-[0.8px]  font-Inter focus:ring-transparent border-[#C84253] rounded-lg p-2 h-32"
            placeholder="Comment"
            />
          <Button className="bg-[#CC4254] text-lg hover:bg-[#c24051] text-white font-Inter w-[158px] rounded-sm py-2">
            Send
          </Button>
        </div>
      </form>
            </div>
      <div className="flex  bg-white flex-col items-center justify-center  w-full px-4 mt-14 py-16">
        <h1 className="text-5xl text-[#2C2C2C] font-Inter mb-2">Subscribe to our emails</h1>
        <p className="text-xl text-[#777777] font-Inter my-6">
          Join our email list for exclusive offers and latest news
        </p>
        <div className="flex border-[0.8px] border-[#C84253] rounded-xl">
          <Input
            className="border-none rounded-xl font-Inter text-[#777777] focus:ring-0 px-4 py-2"
            placeholder="Email"
            type="email"
          />
          <Button className="bg-white hover:bg-white font-black text-2xl  text-[#777777] px-4 py-2 rounded-xl">
            →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
