import React from 'react';
import { BsFacebook, BsInstagram, BsTwitterX , BsWhatsapp} from "react-icons/bs";


const Footer = () => {
  return (
    <div className="bg-primary text-gray-700 flex flex-col items-center gap-5 py-10 px-8 md:px-[8vw] mt-20" id="footer">
      <div className="w-full gap-20 flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col items-start gap-5">
            <h2 className='text-secondary text-xl font-bold'>SKiNY</h2>
            <p>Our mission is to transform the way people eat. It's ambitious, but so are we. And we need people like you to help us do it.</p>
            <div className="flex gap-4 text-xl">
                <BsFacebook className='cursor-pointer text-blue-800'/>
                <BsInstagram className='cursor-pointer text-red-500'/>
                <BsTwitterX className='cursor-pointer text-blue-400'/>
                <BsWhatsapp className='cursor-pointer text-green-500'/>
            </div>
        </div>

        <div className="flex flex-col items-start gap-5">
            <h2 className="text-secondary font-semibold">COMPANY</h2>
            <ul className="space-y-2">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Delivery</li>
                <li className="cursor-pointer">Privacy Policy</li>
            </ul>
        </div>

        <div className="flex flex-col items-start gap-5">
            <h2 className="text-secondary font-semibold">CONTACT</h2>
            <ul className="space-y-2">
                <li>1234 Street Name, City Name, United States</li>
                <li>+1-234-567-1989</li>
                <li>contact@skiny.com</li>
            </ul>
        </div>
      </div>
      <hr className="w-full border-secondary my-5" />
      <p className="text-center text-xs sm:text-sm">Copyright 2024 skiny - All rights reserved</p>
    </div>
  );
};

export default Footer;
