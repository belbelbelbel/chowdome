'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import logo from "../public/logo.jpg"
import Image from 'next/image'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'
import Select from './Selected'
import SelectedHalls from './SelectedHalls'
import { Textarea } from './ui/textarea'
import Selecteddelivered from './Selecteddelivered'
import animationData from "../components/lotties/Animation - 1738441076866.json";
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
    const [formProfile, setFormProfile] = useState({
        firstName: "",
        matricNo: "",
        email: "",
        hall: "",
        roomNo: "",
        description: ""
    });
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    const router = useRouter()
    const formattedAmount = '1500'
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://korablobstorage.blob.core.windows.net/modal-bucket/korapay-collections.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target
        setFormProfile({
            ...formProfile,
            [name]: value
        })
    }

    function payKorapay() {
        if ((window as any).Korapay) {
            (window as any).Korapay.initialize({
                key: process.env.NEXT_PUBLIC_KORA_CHECKOUT_PUBLIC_KEY,
                reference: "",
                amount: parseFloat(formattedAmount),
                currency: "NGN",
                customer: {
                    name: formProfile.firstName,
                    email: formProfile.email
                },
                notification_url: "https://example.com/webhook",
                onClose: () => {
                    router.push('/')
                    setFormProfile({ firstName: "", matricNo: "", email: "", hall: "", roomNo: "", description: "" })
                }
            });

        } else {
            console.error("Korapay script not loaded");
        }
    }
    return (
        <div className='h-full w-full flex-col gap-3  flex justify-center bg-black items-center'>
            <div className="absolute inset-0 bg-black bg-opacity-90 z-20"></div>
            <div>
                <div className="absolute z-50  top-3 left-0 xl:left-6">
                    <Image src={logo} alt="logo" priority={true} width={150} height={150} className="  " />
                </div>
            </div>

            <div className="absolute hidden xl:flex z-50 xl:top-16 right-8">
                <button className="px-6 py-2 w-[10rem] md:w-[12rem] border-0 outline-0  tracking-[1.2px]  rounded-lg text-[1rem] xl:text-[1.1rem] text-white font-semibold bg-gradient-to-l from-gray-900 via-orange-700 to-orange-500 hover:opacity-90 transition duration-300 shadow-lg">
                    Contact Us
                </button>
            </div>

            <div className=" flex flex-col gap-[3rem]  xl:gap-7  mt-20 rounded-[1rem]  shadow-xl border-[1.5px] border-black w-[90%] 2xl:w-[90%] xl:w-[96%] z-30 h-full xl:h-[90%] ">
                <div className='flex xl:flex-row flex-col items-center xl:gap-5 gap-[3rem]'>
                    <Input placeholder='Name' value={formProfile.firstName} name='firstName' onChange={handleChange} type='text' />
                    <Input placeholder='Email' value={formProfile.email} type='email' name='email' onChange={handleChange} />
                </div>
                <div className='flex xl:flex-row flex-col gap-[3rem] xl:gap-5'>
                    <Input placeholder='Matric-No' value={formProfile.matricNo} type='text' name='matricNo' onChange={handleChange} />
                    <Input placeholder='Room Number' value={formProfile.roomNo} type='text' name='roomNo' onChange={handleChange} />
                </div>
                <Select />
                <Selecteddelivered />
                <SelectedHalls />
                <div>
                    <div className='flex items-center gap-5 w-[95%] mx-auto'>
                        <div className='flex items-center gap-2'>
                            <div>No</div>
                            <input type="radio" id="contactChoice1" name="contact" value="no" className='border-0 outline-0' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <div>Yes</div>
                            <input type="radio" id="contactChoice2" name="contact" value="yes" className='border-0 outline-0 ' />
                        </div>
                    </div>
                </div>
                {/* <Input placeholder='Description of Item' type='text' name='roomNo' onChange={handleChange} /> */}
                <Textarea placeholder='Give a description of item' value={formProfile.description} onChange={handleChange}/>
                {/* <Input placeholder='Hall' value={formProfile.hall} type='text' name='hall' onChange={handleChange} /> */}
            </div>
            <div className='w-full  '>
                <div className="md:relative flex items-center flex justify-center xl:my-0 my-5 mb-10 w-full z-50 top-5 z-50">
                    <button className="px-6 py-3 md:py-3 w-[90%]  lt:h-[3.5rem] tracking-[1.5px] border-0 outline-0 rounded-lg text-[1.1rem] text-white font-semibold bg-gradient-to-r from-black via-orange-700 to-orange-500 hover:opacity-90 transition duration-300 shadow-lg" onClick={payKorapay}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}