import { Button } from '@/components/ui/button'
import React from 'react'

const ProductCard3 = () => {
  return (
    <div className='w-[323px] h-[422px] flex flex-col rounded-lg py-6 ml-4  bg-cover items-center justify-between'  style={{backgroundImage:'url(https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
        <div className='text-[30px] text-white'>
            Necklaces
        </div>
        <div>
        <Button className="bg-transparent opacity-50 border-[1px] mt-3 w-[176px] h-[62px] rounded-[5px] font-Inter text-[20px] hover:opacity-100 hover:bg-white hover:text-[#2C2C2C] text-white  ">
          Explore now
        </Button>
        </div>
    </div>
  )
}

export default ProductCard3