import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome, faBoxOpen, faHandHoldingHeart,
    faUser,  faSignOutAlt, faSearch,faCalendar,
    faBars, faAngleLeft,faHandsHelping
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Items from "./Items";
import { faBell, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import Profile from "./Profile";
import Home2 from "./Home2";
import Donation  from "./Donation";
import Voluntry from "./Voluntry";
import Gallery from "./Gallery";
function Dashboard({ userName, letter,email,pass }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setIsCollapsed(true);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex w-full min-h-screen     ">
            {/* Sidebar */}
            <aside
                className={`min-h-screen   bg-white p-6 shadow-md rounded-xl transition-all duration-300 ${isCollapsed ? "w-20" : "w-[17%]"}`}>
                <div className={`flex ${isCollapsed ? "justify-center left-2" : "justify-between"} fixed  gap-8`}>
                    {!isCollapsed && (
                        <div className="text-3xl font-bold flex flex-row  justify-center items-center">
                            <h1 style={{color: "#cc4b48"}}>SHARE</h1>
                            <span className="font-thin" style={{color: "#cc4b48"}}>LET</span>
                        </div>
                    )}
                    {!isMobile && (
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="text-gray-700 hover:text-gray-900 w-12 h-12  hover:bg-[#47456a]/30 rounded-full px-2 text-center py-1.5 ">
                            <FontAwesomeIcon icon={isCollapsed ? faBars : faAngleLeft} size="lg"/>
                        </button>
                    )}
                </div>


                {/* Sidebar Navigation */}
                <nav
                    className={`flex flex-col gap-4 fixed top-40  ${isCollapsed ? 'justify-center items-center' : 'justify-start items-start'}  z-10 -translate-y-14 rounded-full ${isCollapsed ? 'left-3' : 'left-4'}`}>
                    <Link to="/dashboard/home"
                        className={`flex items-center justify-center cursor-pointer    text-xl  ${isCollapsed ? 'w-14 h-14' : ' '}  px-6 py-3 rounded-full text-2xl font-semibold gap-3 text-gray-700 hover:text-[#cc4b48] duration-200 ${!isCollapsed ? 'justify-start' : 'justify-center'} `}
                        >
                        <FontAwesomeIcon icon={faHome}/>
                        {!isCollapsed && <span>Home</span>}
                    </Link>

                    <Link  to="/dashboard/items"
                           className={`flex items-center cursor-pointer    text-xl ${isCollapsed ? 'w-14 h-14' : ' '}  text-2xl font-semibold gap-3 text-gray-700 px-6 py-3 rounded-full hover:text-[#cc4b48] duration-200 ${!isCollapsed ? 'justify-start' : 'justify-center'}`}
                       >
                        <FontAwesomeIcon icon={faBoxOpen}/>
                        {!isCollapsed && "Items"}
                    </Link>

                    <Link to="/dashboard/voluntary"
                        className={`flex items-center cursor-pointer  text-xl  ${isCollapsed ? 'w-14 h-14' : ''} text-2xl font-semibold gap-3 text-gray-700 px-6 py-3 rounded-full  hover:text-[#cc4b48] duration-200  ${!isCollapsed ? 'justify-start' : 'justify-center'}`}

                    >
                        <FontAwesomeIcon icon={faHandsHelping}/>
                        {!isCollapsed && "Voluntary Work"}
                    </Link>

                    <Link to="/dashboard/donate">
                        <div
                            className={`flex items-center font-semibold text-xl ${isCollapsed ? 'w-14 h-14' : ''} gap-3 text-gray-700 px-6 py-3 cursor-pointer rounded-full hover:text-[#cc4b48] duration-200 ${!isCollapsed ? 'justify-start' : 'justify-center'}`}
                        >
                            <FontAwesomeIcon icon={faHandHoldingHeart} />
                            {!isCollapsed && "Donations"}
                        </div>
                    </Link>

                    <Link to="/dashboard/profile"
                        className={`flex items-center cursor-pointer text-xl  ${isCollapsed ? 'w-14 h-14' : ' '} font-semibold gap-3 text-gray-700  px-6 py-3  hover:text-[#cc4b48] duration-200 rounded-full ${!isCollapsed ? 'justify-start' : 'justify-center'}`}
                       >
                        <FontAwesomeIcon icon={faUser}/>
                        {!isCollapsed && "Profile"}
                    </Link>
                    <Link to="/dashboard/event"
                        className={`flex items-center cursor-pointer text-xl ${isCollapsed ? 'w-14 h-14' : ' '} font-semibold gap-3 text-gray-700 px-6 py-3 hover:text-[#cc4b48] duration-200 rounded-full ${!isCollapsed ? 'justify-start' : 'justify-center'}`}>
                        <FontAwesomeIcon icon={faCalendar}/>
                        {!isCollapsed && "Events"}
                    </Link>


                    <a href="#"
                       className={`flex items-center text-2xl font-semibold  ${isCollapsed ? 'w-14 h-14' : ' '}  gap-3 text-red-500 hover:text-red-700 mt-4 px-6 py-3 rounded-full ${!isCollapsed ? 'justify-start' : 'justify-center'}`}   >
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                        {!isCollapsed && "Logout"}
                    </a>
                </nav>

            </aside>

            {/* Main Content Section */}
            <main className="flex-1 p-6">
                <div
                    className={`fixed top-0 right-5 bg-white  z-30 rounded-xl flex-1  border-b border-gray-300 p-4 shadow-md transition-all duration-300 
  ${isCollapsed ? 'w-[77%] sm:w-[92%]' : 'w-[77%] sm:w-[80%]'}
`}>


                <div className="flex justify-between items-center">
                        <div className="relative">
                            <input type="text" placeholder="Search items..."
                                   className="border border-gray-300 px-4 py-2 rounded-2xl focus:outline-none"/>
                            <FontAwesomeIcon icon={faSearch}
                                             className="absolute right-3 top-3 text-gray-500 cursor-pointer"/>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative cursor-pointer">
                                <FontAwesomeIcon icon={faBell} className="text-gray-600 text-2xl hover:text-gray-800"/>
                                <span
                                    className="absolute -top-1 text-xs -right-1 bg-red-500 text-white font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
                            </div>

                            <div className="relative cursor-pointer">
                                <FontAwesomeIcon icon={faCommentDots}
                                                 className="text-gray-600 text-2xl hover:text-gray-800"/>
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">5</span>
                            </div>

                            <h1 className="text-xl rounded-full flex items-center justify-center w-10 h-10 text-center font-bold bg-[#cc4b48] text-white">
                                {letter}
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="mt-16">

                    <Routes>
                        <Route index element={<Home2 />} /> {/* Default route */}
                        <Route path="home" element={<Home2 />} />
                        <Route path="items" element={<Items />} />
                        <Route path="voluntary" element={<Voluntry />} />
                        <Route path="profile" element={<Profile  letter={letter} userName={userName} email={email}/>} />
                        <Route path="event" element={<Gallery />} />
                        <Route path="donate" element={<Donation />} />
                    </Routes>
                </div>
            </main>


        </div>
    );
}

export default Dashboard;
