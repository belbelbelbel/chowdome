import React from 'react'
import logo from "../public/logo.jpg"
import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'


export default function Hero() {
    return (
        <div className='h-full w-full flex-col flex justify-center items-center'>
            <div className="absolute inset-0 bg-black bg-opacity-70 z-20"></div>
            <div>
                <div className="absolute z-50  top-3 left-6">
                    <Image src={logo} alt="logo" width={150} height={150} className="  " />
                </div>
            </div>
            {/* <div className='flex absolute top-16 left-0  h-[3rem] items-center justify-center w-full'>
                <div className='  top-6 left- text-2xl  z-50'>Contact Us</div>
            </div> */}
            {/* <div className='w-[7rem] h-[7rem] rounded-full absolute right-3 top-6 bg-orange-400 z-50 shadow-lg'> </div> */}
            <div className=" flex flex-col  gap-12 p-6 mt-10 rounded-[1rem] shadow-xl border-[1.5px] border-black w-[80%] z-30 h-[80%] ">
                <Input placeholder='Name' />
                <Input placeholder='Email' />
                <Input placeholder='Matric-No' />
                <Input placeholder='Hall' />
                <Input placeholder='Room Number' />
            </div>
            <div>
                <Button className=''>Sign Up Progress</Button>
            </div>
        </div>
    )
}