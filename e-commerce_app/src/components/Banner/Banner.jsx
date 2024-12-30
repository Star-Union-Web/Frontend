import React from 'react'
import BannerImg from '../../assets/Banner.png'
import { PiPlantLight } from "react-icons/pi";
import { CiNoWaitingSign } from "react-icons/ci";
import { RiMentalHealthFill } from "react-icons/ri";
import { GiFastArrow } from "react-icons/gi";


const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center
    items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            gap-6 items-center'>
                {/* Image Section */}
                <div data-aos="zoom-in">
                    <img src={BannerImg}
                     alt="" 
                     className='w-[300px] sm:w-[430px] h-auto sm:h-[530px]
                     mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                      object-cover'
                     />
                </div>
                {/* Text Section */}
                <div>
                    <h1 data-aos="fade-left" className='text-center sm:text-start text-3xl sm:text-4xl mt-6 sm:mt-0 font-bold text-secondary'>
                       Benefit Using Our Product
                    </h1>
                    <p data-aos="fade-left" className='text-center sm:text-start text-sm  text-gray-500 my-4 mb-14'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Necessitatibus, voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Necessitatibus, voluptatibus
                    </p>
                    <div className='grid grid-cols-2 gap-2'>
                        <div data-aos="fade-left" className='flex flex-col gap-4'>
                            <PiPlantLight size={50} className='text-green-700'/>
                            <div>
                                <h1 className='text-sm sm:text-lg font-semibold'>Natural Ingredients</h1>
                                <p className='text-xs sm:text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className='flex flex-col gap-2'>
                            <CiNoWaitingSign size={50} className='text-red-500'/>
                            <div>
                                <h1 className='text-sm sm:text-lg  font-semibold'>No Side Effect</h1>
                                <p className='text-xs sm:text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className='flex flex-col gap-2 mt-5'>
                            <RiMentalHealthFill size={50} className='text-secondary'/>
                            <div>
                                <h1 className='text-sm sm:text-lg  font-semibold'>Healthy Skin</h1>
                                <p className='text-xs sm:text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className='flex flex-col gap-2 mt-5'>
                            <GiFastArrow size={50} className=''/>
                            <div>
                                <h1 className='text-sm sm:text-lg  font-semibold'>Fastest Refresgment</h1>
                                <p className='text-xs sm:text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>

                    </div> 
                </div>


            </div>
        </div>
    </div>
  )
}

export default Banner