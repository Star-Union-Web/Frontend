import React, { useState, useEffect } from "react";
import img from "../assets/vol.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img2 from "../assets/per.png"
import { faBookOpen,faMedal,faShoePrints,faUserTag,faHandHoldingHeart,faCalendarAlt,faShareAlt } from "@fortawesome/free-solid-svg-icons";
function Voluntry() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("/fre2.json")
            .then(response => response.json())
            .then(data => setFriends(data))
            .catch(error => console.error("Error fetching friends:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col w-full p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

                {/* Card 1 - Find Opportunities (Wider) */}
                <div
                    className="bg-purple-100 flex flex-col relative sm:flex-row p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2">
                    <div className="flex flex-col sm:w-1/2  sm:items-start  items-center  relative gap-2  sm:pb-0 pb-20">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-500">
                            Make a Difference Today! 🌍
                        </h1>
                        <h2 className="text-md font-semibold text-gray-400">Find Volunteering Opportunities</h2>
                        <p className="text-gray-600 sm:mt-2  font-thin w-11/12">
                            Volunteering offers countless opportunities to make a difference. Whether it's helping
                            communities,
                            protecting the environment, or supporting education, your efforts can create real change.
                            Join a cause that matters to you and start making an impact today.
                        </p>
                        <button
                            className="mt-4 bg-purple-900 absolute sm:bottom-10 bottom-0  text-white px-4 py-2  sm:sm:w-[80%] w-[80%] rounded-lg hover:bg-purple-800">
                            Apply
                        </button>
                    </div>
                    <div className="w-full sm:w-[50%]  top-1  mt-4 sm:mt-0 flex justify-center">
                        <img src={img} className="rounded-full  sm:w-full sm:h-auto"/>
                    </div>
                </div>

                {/* Card 2 - Become a Volunteer */}
                <div
                    className="bg-[#ddf4f3]/60 p-6 flex flex-col  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-500">Become a Volunteer</h2>
                    <p className="text-gray-600 mt-2 mb-3">
                        Join our community of volunteers, covering 80% of the world, and help create positive change
                        worldwide.
                    </p>


                    <img src={img2} className={" w-[70%] rounded-full  mx-auto "}/>

                </div>

                {/* Card 3 - Volunteer Success Stories (Wider) */}
                <div
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl overflow-auto  no-scrollbar max-h-[500px] transition-all duration-300 md:col-span-2">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-500">Our Volunteers</h2>
                    <p className="text-gray-600 mt-2">Meet some of our amazing volunteers and read their inspiring
                        stories.</p>

                    <div className="mt-4 space-y-4">
                        {friends.map((volunteer, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex items-center gap-3 relative">
                                    <img src={volunteer.image_url} alt={volunteer.name}
                                         className="w-16 h-16 rounded-full"/>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-700">{volunteer.name}</h3>
                                        <div className="text-yellow-500 text-sm">
                                            {"★".repeat(volunteer.rate) + "☆".repeat(5 - volunteer.rate)}
                                        </div>
                                        <h1 className={"text-sm font-light text-gray-500 "}>Eco Warriors</h1>
                                    </div>

                                    <FontAwesomeIcon
                                        icon={faBookOpen}
                                        className="text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-full transition"
                                    />
                                </div>

                                <div className="flex justify-between text-gray-700 mt-3 text-md">
                                    <div className="flex items-center gap-1">
                                        <FontAwesomeIcon icon={faMedal} className="text-yellow-500"/>
                                        <span>{volunteer.points_collected} Points</span>
                                    </div>


                                    <div className="flex items-center gap-1">
                                        <FontAwesomeIcon icon={faUserTag} className="text-green-500"/>
                                        <span>{volunteer.volunteer_type}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card 4 - Donate & Support */}
                <div
                    className="relative p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                    style={{
                        backgroundImage: 'url("https://img.freepik.com/free-vector/charity-doodle-vector-hand-giving-heart-money-donation-concept_53876-143487.jpg?t=st=1739062513~exp=1739066113~hmac=f498648b7a69596b26e464104f9a101c64965eee3136b9b81f3e031ec3b05787&w=740")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>

                    <div className="absolute inset-0 bg-[#47456a]/80 opacity-60 rounded-2xl"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faHandHoldingHeart} className="text-white text-2xl -mt-5"/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Donate & Support</h2>
                        </div>

                        <p className="text-white text-xl font-bold mt-2 mb-6">
                            Can't volunteer? Help by donating to support volunteer programs.
                        </p>

                        <div className="w-full bg-white bg-opacity-50 rounded-full h-2 mt-3">
                            <div className="bg-white h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <p className="text-lg text-white mt-1 font-semibold">$7,500 / $10,000 Raised</p>
                        <p className="text-lg text-white mt-1">75% funded - Help us reach our goal!</p>

                        <ul className="mt-4 text-md text-white space-y-1">
                            <li>✅ Provide meals for families</li>
                            <li>✅ Support medical aid & shelters</li>
                            <li>✅ Fund education programs</li>
                        </ul>

                        <p className="italic text-md text-white mt-3">
                            "My donation helped provide meals for 500 families. Every bit counts!" – Sarah L.
                        </p>

                        <div className="flex  flex-row gap-3 mt-4">
                            <button
                                className="flex flex-row gap-2 bg-yellow-400 text-[#47456a] px-4 py-2 rounded-lg hover:bg-yellow-300 transition-all">
                                <FontAwesomeIcon icon={faHandHoldingHeart}/>
                                Donate Once
                            </button>


                        </div>


                    </div>
                </div>


            </div>
        </div>
    );
}

export default Voluntry;
