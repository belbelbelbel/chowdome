import React from 'react'
import logo from "../public/logo.jpg"
import Image from 'next/image'
import { Input } from './ui/input'

export default function Hero() {
    return (
        <div className='h-full w-full flex-col flex justify-center items-center'>
            <div className="absolute inset-0 bg-black bg-opacity-90 z-20"></div>
            <div>
                <div className="absolute z-50  top-3 left-6">
                    <Image src={logo} alt="logo" width={150} height={150} className="  " />
                </div>
            </div>

            <div className="absolute z-50 top-16 right-8">
                <button className="px-6 py-2 w-[12rem] tracking-[1.2px]  rounded-lg text-[1.1rem] text-white font-semibold bg-gradient-to-b from-gray-900 via-orange-700 to-orange-500 hover:opacity-90 transition duration-300 shadow-lg">
                    Contact Us
                </button>

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
                <div className="relative top-5 z-50">
                    <button className="px-6 py-3 w-[20rem] tracking-[1.5px]  rounded-lg text-[1.1rem] text-white font-semibold bg-gradient-to-b from-gray-900 via-orange-700 to-orange-500 hover:opacity-90 transition duration-300 shadow-lg">
                        Submit
                    </button>

                </div>
            </div>
        </div>
    )
}