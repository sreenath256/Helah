import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const SecondBanner = () => {
    return (
        <div className="mx-auto max-w-6xl  " >
          <div className="flex rounded-xl flex-col md:flex-row  md:h-[522px] shadow-lg overflow-hidden bg-[#CC4254]">
            <div className="w-full relative md:w-1/2 ">
              <img
                alt="Jewelry"
                className=" inset-0 w-full h-full object-cover rounded-xl"
                height="400"
                src={'https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/image10.png'}
                style={{
                  aspectRatio: "800/400",
                  objectFit: "cover",
                }}
                width="800"
              />
              <div className='w-24 h-24 absolute left-1/2 -translate-x-1/2 translate-y-6 transform bottom-1/4 rounded-full bg-white opacity-10'>
                  </div>

              <button
                aria-label="Next"
                className="absolute left-1/2 bottom-1/4 -translate-x-1/2 transform bg-white p-3  rounded-full shadow-lg flex items-center justify-center"
                >
                <ChevronRightIcon className="text-[#CC4254] " />
              </button>
            </div>
            <div className="w-full md:w-1/2 bg-[#CC4254] p-8 flex flex-col items-center justify-center text-center">
              <h2 className="text-xl font-Inter text-white mb-6">Sale</h2>
              <h3 className="text-5xl  text-white leading-tight mb-6">Get a 20% Discount on your first order!</h3>
              <div className="flex items-center mb-6 bg-white rounded-full">
                <Input className="border-0 px-4 py-2 w-full rounded-full focus:border-0 " placeholder="Enter your email" type="email" />
                <Button className="bg-white text-[#777777] hover:bg-white rounded-full " variant="default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                </Button>
              </div>
              <p className="text-white  text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
        </div>
      )
    }
    
    function ChevronRightIcon(props) {
      return (
        <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24 "
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
      )
    }
    
    
    function MailboxIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
          <polyline points="15,9 18,9 18,11" />
          <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
          <line x1="6" x2="7" y1="10" y2="10" />
        </svg>
      )
}

export default SecondBanner
