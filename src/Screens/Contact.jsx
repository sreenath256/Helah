import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFEFF1] p-4">
          <h1 className="text-[45px]  mb-8">Contact</h1>
          <form className="w-full max-w-lg">
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-2 gap-4">
                <Input className="border-[0.8px] font-Inter border-[#C84253] rounded-md p-2" placeholder="Name" />
                <Input className="border-[0.8px] font-Inter border-[#C84253] rounded-md p-2" placeholder="Email*" required type="email" />
              </div>
              <Input className="border-[0.8px] font-Inter border-[#C84253] rounded-md p-2" placeholder="Phone" />
              <Textarea className="border-[0.8px] font-Inter border-[#C84253] rounded-md p-2 h-32" placeholder="Comment" />
              <Button className="bg-[#C84253] text-lg hover:bg-[#a93746] text-white font-Inter w-[158px] rounded-sm py-2">Send</Button>
            </div>
          </form>
        </div>
      )
}

export default Contact
