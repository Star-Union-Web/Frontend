import React from 'react'
import Image1 from '../../assets/home3 (5).png';
import Image2 from '../../assets/home3 (2).png';
import Image3 from '../../assets/home3 (3).png';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const ImageList = [
    {
        id: 1,
        img: Image1,
        title : 'The Power Of Healthy Skin',
        desc: 'Your Path to Flawless Skin Starts Here.Harness the power of Nature for Beatiful Skin.'
    }
    ,
    {
        id: 2,
        img: Image2,
        title : 'UP TO 50% OFF ON NATURAL OILS',
        desc: 'Your Path to Flawless Skin Starts Here.Harness the power of Nature for Beatiful Skin.'
    },
    {
        id: 3,
        img: Image3,
        title : 'The Power Of Healthy Skin',
        desc: 'Your Path to Flawless Skin Starts Here.Harness the power of Nature for Beatiful Skin.'
    }
]

const Header = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

  return (
    <div className='relative min-h-[550px]
    sm:min-h-[650px] bg-primary flex justify-center items-center '>
        <div className='container pb-8 sm:pb-0 px-6 sm:px-12'>
            <Slider {...settings}>
                {ImageList.map((data) => (
                    <div className='container ' key={data.id}>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center order-2 sm:text-left sm:order-1'>
                                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary'>
                                    {data.title}
                                </h1>
                                <p className='text-sm text-gray-700'>
                                    {data.desc}
                                </p>
                                <div className='flex justify-center sm:justify-start'>
                                    <Link to = '/shop' className='bg-secondary text-white px-4 py-2 rounded-full mt-4
                                    hover:bg-primary hover:border hover:border-secondary hover:text-secondary'>
                                        Shop Now
                                    </Link>
                                    <button className=' text-secondary py-1 px-1  mt-4 ml-4 border-b-2 border-secondary'>
                                        Explore Our Product
                                    </button>
                                </div>
                            </div>
                            {/* Image section */}
                            <div className='order-1 sm:order-2'>
                                <div className='relative'>
                                    <img src={data.img} alt=""
                                    className='w-full sm:w-auto h-[300px] sm:h-[450px] object-contain mx-auto'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}   
            </Slider>

        </div>
    </div>
  )
}

export default Header