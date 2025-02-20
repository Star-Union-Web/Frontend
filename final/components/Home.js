import React from "react";
import img1 from "../assets/1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers,  faBoxOpen,faGlobe,faPhoneVolume, faEnvelope ,faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import img2 from "../assets/about.png"
import s1 from "../assets/donate.jpg"
import s2 from "../assets/exchange.jpg"
import s3 from "../assets/sell.jpg"
import env from "../assets/env.png"
import  box from "../assets/box.png"
import { Link } from "react-router-dom";
import {useState} from "react";
function Home() {
    const [isOpen, setIsOpen] = useState(false);
    function scrolltoabout (){
        document.getElementById("about").scrollIntoView({

        })
    }
    function scrolltoaservice (){
        document.getElementById("service").scrollIntoView({

        })
    }
    function scrolltocontact (){
        document.getElementById("contact").scrollIntoView({

        })
    }

    return (
        <div className="flex flex-col  bg-[#fffaf7]">

            <div id="home">
                <div style={{backgroundColor: "#fffaf7"}} className="w-full h-screen relative ">
                    {/* Header Section */}
                    <div
                        className="absolute sm:left-10 sm:top-10 sm:mx-20 mx-2  left-5 top-5 sm:text-4xl text-3xl flex font-bold z-50">
                        <h1 style={{color: "#cc4b48"}}>SHARE
                        </h1>
                        <span className="font-thin" style={{color: "#cc4b48"}}>LET</span>
                    </div>

                    {/* Navigation Bar */}
                    <nav
                        className="  justify-end  mx-20 py-10 px-5 sm:relative fixed   space-x-7 text-2xl font-semibold sm:flex hidden z-10"
                        id="home">
                        <a href="#home" className="text-[#47456a] hover:scale-125 hover:text-amber-600">Home</a>
                        <a href="#about" className="text-[#47456a] hover:scale-125 hover:text-amber-600">About</a>
                        <a href="#service" className="text-[#47456a] hover:scale-125 hover:text-amber-600">Service</a>
                        <a href="#contact" className="text-[#47456a] hover:scale-125 hover:text-amber-600">Contact</a>
                    </nav>


                    <div className="relative w-full h-screen bg-[#fffaf7] ">
                        {/* Bars Icon (Opens Sidebar) */}
                        <div
                            className="w-10 h-10 bg-[#47456a] flex items-center justify-center sm:hidden absolute right-5 top-5 rounded-full text-white hover:scale-110 cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        >
                            <FontAwesomeIcon icon={faBars} size="lg"/>
                        </div>

                        {/* Sidebar Menu */}
                        <div
                            className={`fixed top-0 right-0 h-screen w-1/3 bg-white  shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} sm:hidden z-50`}>
                            {/* Close Icon */}
                            <div className="p-5 flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-[#cc4b48]">Menu</h2>
                                <button onClick={() => setIsOpen(false)}>
                                    <FontAwesomeIcon icon={faXmark} size="lg" className="text-[#47456a]"/>
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex flex-col  sm:hidden space-y-5 text-xl font-bold p-5 z-50">
                                <a href="#home" className="text-[#47456a] hover:text-amber-600 z-50"
                                   onClick={() => setIsOpen(false)}>Home</a>
                                <a href="#about" className="text-[#47456a] hover:text-amber-600 z-50"
                                   onClick={() => setIsOpen(false)}>About</a>
                                <a href="#service" className="text-[#47456a] hover:text-amber-600 z-50"
                                   onClick={() => setIsOpen(false)}>Service</a>
                                <a href="#contact" className="text-[#47456a] hover:text-amber-600 z-50"
                                   onClick={() => setIsOpen(false)}>Contact</a>
                            </nav>
                        </div>
                    </div>


                    {/* Social Media Icons */}
                    <div
                        className="absolute sm:bottom-10  mx-2  sm:left-3/4 sm:translate-x-40  translate-x-0  left-2 bottom-80   sm:flex sm:flex-row flex-col sm:gap-5  space-y-3 sm:space-y-0 z-50  ">
                        <div
                            className="sm:w-10 sm:h-10  w-8 h-8 bg-[#47456a] flex items-center justify-center rounded-full text-white hover:scale-110  cursor-pointer">
                            <FontAwesomeIcon icon={faPhoneVolume} size="lg"/>
                        </div>
                        <div
                            className="sm:w-10 sm:h-10   w-8 h-8 bg-[#47456a] flex items-center justify-center rounded-full text-white hover:scale-110 cursor-pointer">
                            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                        </div>
                        <div
                            className="sm:w-10 sm:h-10   w-8 h-8 bg-[#47456a] flex items-center justify-center rounded-full text-white hover:scale-110 cursor-pointer">
                            <FontAwesomeIcon icon={faTelegram} size="lg"/>
                        </div>
                    </div>

                    {/* Main Section (Image and Text) */}
                    <div
                        className="flex  sm:mx-20 mx-1 sm:flex-row  bg-[#fffaf7]    flex-col z-10 items-center sm:h-[70vh] sm:mt-20   mt-10 h-[100vh]   absolute top-10 justify-between px-10 py-20 space-x-10">
                        {/* Image Section */}
                        <img src={img1} className="sm:w-[40%] w-[90%]  h-auto sm:mt-0 -mt-20 rounded-full"
                             alt="Sharelet"/>

                        {/* Text Section */}
                        <div className="flex flex-col  justify-center items-center space-y-6 sm:w-[50%] w-full  relative sm:items-start bg-red-500 ">
                            <h1 className="text-5xl font-bold text-[#47456a] bg-gradient-to-r sm:flex hidden  from-[#cc4b48] via-[#ffab7b] to-[#fbd3b4] text-transparent bg-clip-text absolute -top-44">
                                Sharelet Is Your Best Choice
                            </h1>
                            <p className="sm:text-lg  text-md text-gray-500  sm:mt-0    font-light sm:text-left text-center absolute sm:-top-24 -top-72">
                                Sharelet is a platform where you can give a second life to your unused items by putting
                                them up
                                for sale, exchange, or donation. We aim to reduce waste, promote sustainability, and
                                create an
                                easy way for you to declutter while helping others.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-row gap-x-6  mx-auto justify-center items-center sm:items-start absolute top-2/3 left-1/2  transform">
                            <Link to="/signup">
                                <button
                                    className="bg-[#cc4b48] w-full  mx-auto -translate-x-[80%] translate-y-20  sm:translate-x-0 sm:translate-y-0   rounded-3xl sm:py-3 sm:px-12 py-1   px-5 text-xl font-bold text-white transition-transform transform hover:scale-110 hover:bg-[#ffab7b]">
                                    Get Started
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button
                                    className="border-black border-2  hidden sm:flex rounded-3xl py-3 px-12 text-xl font-bold text-black transition-transform transform hover:scale-110 hover:border-[#ffab7b] hover:text-[#ffab7b]">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div
                    className="   text-[#47456a] cursor-pointer  bg-[#fffaf7]   z-50 items-center flex flex-col -bottom-10  left-1/2 transform -translate-x-1/2  sm:bottom-10 absolute   "
                    onClick={scrolltoabout}>
                    <FontAwesomeIcon icon={faAngleDown} size="lg"
                                     className={"sm:w-12 sm:h-12   w-8 h-8   sm:flex  hidden   smooth-bounce  font-thin mb-10  "}/>
                    <h5 className={" bottom-2 font-light  text-xl  sm:flex  hidden  "}>Scroll To Learn More</h5>
                </div>

            </div>

            <div id="about" className="w-full bg-[#fffaf7]   mt-10  mb-10 sm:h-screen h-auto flex flex-col text-center px-4 relative">
                <h2 className=" sm:text-3xl text-2xl  mt-10 font-bold text-[#47456a] mb-12">About Sharelet</h2>

                {/* Grid Container */}
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 items-start w-full px-10">

                    {[
                        {
                            title: "Our Mission",
                            text: "At Sharelet, we aim to reduce waste and build a community-driven platform where people can sell, exchange, or donate unused items. Our vision is to make a positive impact on the environment and society by extending the life cycle of everyday products.",
                            imgSrc: "https://img.freepik.com/free-vector/world-globe-design_25030-68341.jpg?t=st=1739137118~exp=1739140718~hmac=9f5911a7b55f8529d53b9f998c299461ce528fc4d4b8a383d1ab732b456f6cbf&w=740",
                            imgAlt: "Mission Globe"
                        },
                        {
                            title: "How It Works",
                            text: "Post your items by uploading details of things you no longer need, whether they are for sale, exchange, or donation. Connect with others in a thriving community where you can easily find people interested in giving your items a new home. Make a difference by reducing waste.",
                            imgSrc: box,
                            imgAlt: "How It Works"
                        },
                        {
                            title: "Join Our Community",
                            text: "Sharelet is more than just a platform—it's a movement. By participating, you become part of a thriving community that values sustainability, affordability, and giving back. Our goal is to make a lasting impact by helping people buy, sell, exchange, or donate items they no longer need.",
                            imgSrc: "https://img.freepik.com/free-vector/online-community_24877-50878.jpg?t=st=1739137302~exp=1739140902~hmac=74637954cae23b63d82acd2dc0568b9e244427acd3c40d90f73a5e7b1fbfdc7e&w=740",
                            imgAlt: "Join Community"
                        }
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg p-8 rounded-3xl hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out text-gray-700 flex flex-col items-center text-center min-h-[400px] flex-grow"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-[#cc4b48] mb-3 tracking-wide">{card.title}</h3>
                            <p className="text-gray-600 sm:text-md text-sm leading-relaxed w-11/12">{card.text}</p>
                            <img
                                src={card.imgSrc}
                                alt={card.imgAlt}
                                className="sm:w-48 sm:h-48 w-40 h-40  rounded-full object-cover border-4 border-[#47456a] shadow-md mt-2 transition-transform duration-300 "
                            />
                        </div>
                    ))}
                </div>

                <div
                    className="text-[#47456a] cursor-pointer z-50 items-center flex flex-col -bottom-10 left-1/2 transform -translate-x-1/2 sm:bottom-10 absolute"
                    onClick={scrolltoaservice}
                >
                    <FontAwesomeIcon icon={faAngleDown} size="lg"
                                     className="sm:w-12 sm:h-12 mt-5 w-8 h-8  sm:flex  hidden   smooth-bounce font-thin"/>
                </div>
            </div>


            <div id={"service"} className={"w-full  bg-[#fffaf7]  relative z-10  "}>
                <h1 className={"text-3xl font-bold text-[#47456a]  text-center  "}>Services </h1>
                <div
                    className={"grid sm:grid-cols-3  sm:grid-rows-1  sm:mx-52 mx-20 grid-cols-1 grid-rows-3  sm:gap-4 gap-8 px-10 py-36 "}>
                    <div className="relative group ">
                        <img src={s1} className="rounded-full cursor-pointer "/>
                        <div
                            className="absolute inset-0 bg-transparent h-full w-full transition-all duration-500 group-hover:bg-[#424063] group-hover:opacity-50 flex items-center justify-center rounded-full  cursor-pointer">
                            <h3 className="w-full font-medium text-white text-4xl   text-center  absolute left-1/2 transform -translate-x-1/2 bottom-0 opacity-0 transition-all duration-500 group-hover:bottom-1/2 group-hover:opacity-100">
                                donate
                            </h3>
                        </div>
                    </div>
                    <div className="relative group">
                        <img src={s2} className="rounded-full cursor-pointer "/>
                        <div
                            className="absolute inset-0 bg-transparent h-full w-full transition-all duration-500 group-hover:bg-[#424063] group-hover:opacity-50 flex items-center justify-center rounded-full  cursor-pointer">
                            <h3 className="w-full font-medium text-white text-4xl absolute  text-center  left-1/2 transform -translate-x-1/2 bottom-0 opacity-0 transition-all duration-500 group-hover:bottom-1/2 group-hover:opacity-100">
                                swap
                            </h3>
                        </div>
                    </div>
                    <div className="relative group">
                        <img src={s3} className="rounded-full cursor-pointer"/>
                        <div
                            className="absolute inset-0 bg-transparent h-full w-full transition-all duration-500 group-hover:bg-[#424063] group-hover:opacity-50 flex items-center justify-center rounded-full  cursor-pointer">
                            <h3 className="w-full font-medium text-white  text-center text-4xl absolute left-1/2 transform -translate-x-1/2 bottom-0 opacity-0 transition-all duration-500 group-hover:bottom-1/2 group-hover:opacity-100">
                                sell
                            </h3>
                        </div>
                    </div>
                    <div
                        className="   text-[#47456a] cursor-pointer  items-center flex flex-col    left-1/2 transform -translate-x-1/2 bottom-10 absolute   "
                        onClick={scrolltocontact}>
                        <FontAwesomeIcon icon={faAngleDown} size="lg"
                                         className={"sm:w-12 sm:h-12 w-10 h-10 sm:mt-20 mt-10   sm:flex  hidden     smooth-bounce  font-thin  "}/>

                    </div>


                </div>
            </div>
            <div className="w-full sm:h-[60vh] h-auto bg-[#fffaf7] flex flex-col sm:flex-row relative" id="contact">
                {/* Contact Form */}
                <form className="w-full sm:w-2/3 bg-[#fffaf7] sm:mx-20 mx-0 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-[#cc4b48] mb-4 mt-6">Contact Us</h2>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex flex-col w-full sm:w-1/2">
                            <label className="text-[#47456a] text-sm mb-1">Your Name</label>
                            <input type="text"
                                   className="w-full p-2 rounded-xl border border-gray-300 outline-none bg-[#47456a]/10 text-gray-800"
                                   placeholder="Enter your name"/>
                        </div>

                        <div className="flex flex-col w-full sm:w-1/2">
                            <label className="text-[#47456a] text-sm mb-1">Your Last Name</label>
                            <input type="text"
                                   className="w-full p-2 rounded-xl border border-gray-300 outline-none bg-[#47456a]/10 text-gray-800"
                                   placeholder="Enter your last name"/>
                        </div>
                    </div>

                    <div className="flex flex-col mt-3">
                        <label className="text-sm mb-1 text-[#47456a]">Your Email</label>
                        <input type="email"
                               className="w-full p-2 rounded-xl border border-gray-300 outline-none text-gray-800 bg-[#47456a]/10"
                               placeholder="Enter your email"/>
                    </div>

                    <div className="flex flex-col mt-3">
                        <label className="text-sm mb-1 text-[#47456a]">Message</label>
                        <textarea
                            className="w-full p-2 rounded-xl border border-gray-300 outline-none text-gray-800 bg-[#47456a]/10"
                            rows="3" placeholder="Write your message..."></textarea>
                    </div>

                    <button
                        className="w-full sm:w-1/3 bg-[#cc4b48] mt-4  mb-5 rounded-xl text-center text-white font-bold p-2 shadow-md hover:shadow-lg transition-all hover:opacity-90 flex items-center justify-center gap-2">
                        Send <FontAwesomeIcon icon={faTelegram} size="sm"/>
                    </button>
                </form>

                {/* Right Side - Image */}
                <div className="w-full sm:w-1/4 flex justify-center sm:justify-end p-6">
                    <img src={env} className="w-full mr-32  sm:flex hidden max-w-[200px] sm:w-auto sm:h-[80%] object-cover rounded-xl"
                         alt="Contact Image"/>
                </div>
            </div>


        </div>


    );
}

export default Home;

