'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import logo from "../public/logo.jpg"
import Image from 'next/image'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'

export default function Hero() {
    const [formProfile, setFormProfile] = useState({
        firstName: "",
        matricNo: "",
        email: "",
        hall:  "",
        roomNo : ""
    });
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

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {value ,name} = e.target
        setFormProfile({
            ...formProfile,
            [name] : value
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
                    setFormProfile({firstName: "", matricNo: "", email: "", hall:  "", roomNo : "" })
                }
            });

        } else {
            console.error("Korapay script not loaded");
        }
    }
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
            <div className=" flex flex-col  gap-12 p-6 mt-10 rounded-[1rem] shadow-xl border-[1.5px] border-black w-[80%] z-30 h-[80%] ">
                <Input placeholder='Name' value={formProfile.firstName} name='firstName' onChange={handleChange} type='text'/>
                <Input placeholder='Email' value={formProfile.email} type='email' name='email' onChange={handleChange}/> 
                <Input placeholder='Matric-No'  value={formProfile.matricNo} type='text' name='matricNo' onChange={handleChange}/>
                <Input placeholder='Hall' value={formProfile.hall} type='text' name='hall' onChange={handleChange}/>
                <Input placeholder='Room Number' value={formProfile.roomNo} type='text' name='roomNo' onChange={handleChange}/>
            </div>
            <div>
                <div className="relative top-5 z-50">
                    <button className="px-6 py-3 w-[20rem] tracking-[1.5px]  rounded-lg text-[1.1rem] text-white font-semibold bg-gradient-to-b from-gray-900 via-orange-700 to-orange-500 hover:opacity-90 transition duration-300 shadow-lg" onClick={payKorapay}>
                        Submit
                    </button>

                </div>
            </div>
        </div>
    )
}