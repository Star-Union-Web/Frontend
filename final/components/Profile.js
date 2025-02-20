import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCommentDots, faCamera, faSearch, faMedal,faTrophy, faEdit, faCog, faMusic, faHeadphones, faSyncAlt, faSignOutAlt, faUpload, faHistory, faBalanceScale, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import trophy from "../assets/trophy.png";

function Profile({ letter, userName, email, phone, sold, donated, exchanged, points }) {
    const [image, setImage] = useState(localStorage.getItem("profileImage") || false );
    const [coverimage, setcoverImage] = useState(localStorage.getItem("coverImage") || null);
    const [text, setText] = useState(false);
    const [description, setDescription] = useState(localStorage.getItem("description") || null);
    const handlecoverUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setcoverImage(imageUrl);
            localStorage.setItem("coverImage", imageUrl);
        }
    };

    const handleEditClick = () => setText(true);
    const handleBlur = () => setText(false);
    const textself = (e) => {
        const inputtext = e.target.value;
        setDescription(inputtext);
        localStorage.setItem("description", inputtext);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            localStorage.setItem("profileImage", imageUrl);
        }
    };

    return (
        <>
            <div className="p-6 rounded-xl shadow-md mb-6 bg-white ">
                <div className="flex w-full bg-gray-300 h-24 sm:h-32  rounded-2xl relative">
                    <label
                        className="absolute right-0 bg-gray-700 hover:bg-gray-600 bottom-0 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center py-3 px-2 text-white rounded-full cursor-pointer transition">
                        <FontAwesomeIcon icon={faEdit} className="text-lg sm:text-xl"/>
                        <input type="file" className="hidden" accept="image/*" onChange={handlecoverUpload}/>
                    </label>
                    {coverimage && (
                        <img src={coverimage} className="w-full h-full rounded-2xl object-cover"/>
                    )}
                </div>
                <div className="flex items-center gap-4 sm:gap-6 -mt-5">
                    <div
                        className={`relative w-24 h-24 sm:w-32  sm:h-32 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg`}
                    >
                        {!image ? (
                            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                <h2 className="text-xl sm:text-2xl font-bold text-white">{letter}</h2>
                            </div>
                        ) : (
                            <img src={image} alt="Profile" className="w-full h-full object-cover"/>
                        )}

                        <label
                            className="absolute bottom-0 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center right-0 bg-gray-500 hover:bg-gray-600 py-2 px-2 text-white rounded-full cursor-pointer transition">
                            <FontAwesomeIcon icon={faCamera} className="text-sm sm:text-lg"/>
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload}/>
                        </label>
                    </div>
                    <div>
                        <h2 className="text-md sm:mt-0 mt-5 sm:text-3xl font-bold text-[#47456a]/70 z-50 flex items-center gap-2">
                            {userName}
                            <span className="text-yellow-500 text-md sm:text-xl ">
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStarHalfAlt}/>
        </span>
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base">{email}</p>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="flex justify-between">
                        <h3 className="text-lg font-semibold text-[#47456a]/70">About Me</h3>
                        <FontAwesomeIcon icon={faEdit} className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                         onClick={handleEditClick}/>
                    </div>
                    {text ? (
                        <textarea
                            className="w-full sm:w-1/2 outline-none bg-gray-100 text-gray-500 font-bold rounded-2xl p-4"
                            value={description} onChange={textself} onBlur={handleBlur} autoFocus/>
                    ) : (
                        <p className="text-gray-600 font-bold text-sm sm:text-base">{description}</p>
                    )}
                </div>
                <div className="mt-4 flex justify-end gap-4">
                    <button
                        className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 flex items-center gap-2">
                        <FontAwesomeIcon icon={faEdit}/> Edit Profile
                    </button>
                    <button
                        className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 flex items-center gap-2">
                        <FontAwesomeIcon icon={faCog}/> Settings
                    </button>
                </div>
            </div>


            <div className="mt-6 mb-10 flex flex-col items-center  w-full">
                <h3 className="text-lg font-semibold text-[#47456a]/70">Badges and Achievements</h3>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-6 w-full  mt-4 px-4">
                    {/* Badge 1 */}
                    <div className="p-4 rounded-xl shadow-xl text-center flex flex-col items-center bg-white">
                        <img src={trophy} className="max-h-[150px] mb-3 w-full object-contain rounded-xl"
                             alt="Best Performer"/>
                        <p className="font-semibold text-lg mt-2">Performer</p>
                    </div>

                    {/* Badge 2 */}
                    <div className="p-4 rounded-xl shadow-xl text-center flex flex-col items-center bg-white">
                        <img
                            src="https://img.freepik.com/free-vector/medal-1_78370-530.jpg?t=st=1739834572~exp=1739838172~hmac=89a658c5a57645da8bb77ccd6c093c91cb09832332df66e1d2877f51d9608096&w=740"
                            className="max-h-[150px] w-full object-contain rounded-xl"
                            alt="Best Seller"
                        />
                        <p className="font-semibold text-lg mt-2">Seller</p>
                    </div>

                    {/* Badge 3 */}
                    <div className="p-4 rounded-xl shadow-xl text-center flex flex-col items-center bg-white">
                        <img
                            src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1739836399~exp=1739839999~hmac=f7da5ccc45d7653fcc2732fde44e9401cfee14e2fa02b7bee85f5787f649e352&w=740"
                            className="max-h-[150px] w-full object-contain rounded-xl"
                            alt="Best Seller"
                        />
                        <p className="font-semibold text-lg mt-2">Member</p>
                    </div>

                    {/* Badge 4 */}
                    <div className="p-4 rounded-xl shadow-xl text-center flex flex-col items-center bg-white">
                        <img
                            src="https://img.freepik.com/free-vector/employee-month-concept_23-2148468053.jpg?uid=R117230801&ga=GA1.1.578030478.1725297375&semt=ais_hybrid"
                            className="max-h-[150px] w-full object-contain rounded-xl"
                            alt="Collaborator"
                        />
                        <p className="font-semibold text-lg mt-2">Collaborator</p>
                    </div>

                    {/* Badge 5 */}
                    <div className="p-4 rounded-xl shadow-xl text-center flex flex-col items-center bg-white">
                        <img
                            src="https://img.freepik.com/free-vector/shooting-star-flat_78370-4564.jpg?uid=R117230801&ga=GA1.1.578030478.1725297375&semt=ais_hybrid"
                            className="max-h-[150px] w-full object-contain rounded-xl"
                            alt="Top Rated"
                        />
                        <p className="font-semibold text-lg mt-2">Helper</p>
                    </div>

                    {/* LOCKED Badge 6 */}
                    <div
                        className="p-4 rounded-xl shadow-xl text-center flex flex-col items-center bg-gray-200 opacity-50 cursor-not-allowed relative">
                        {/* Main Badge Image */}
                        <img
                            src="https://img.freepik.com/free-vector/world-humanitarian-day-illustration_23-2149004517.jpg?uid=R117230801&ga=GA1.1.578030478.1725297375&semt=ais_hybrid"
                            className="max-h-[150px] w-full object-contain rounded-xl"

                        />

                        {/* Lock Icon (Overlay) */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 opacity-60"/>


                    </div>


                    {/* LOCKED Badge 7 */}
                    <div
                        className="p-4 rounded-xl shadow-xl text-center flex flex-col items-center bg-gray-200 opacity-50 cursor-not-allowed relative">
                        {/* Main Badge Image */}
                        <img
                            src="https://img.freepik.com/free-psd/dartboard-with-arrow-color-year-2023-3d-illustration_47987-14017.jpg?t=st=1739837819~exp=1739841419~hmac=6b48087bb1bc9366ea6931bd2ece45cc2d5eb3d61dcb2e053d525aeef454505e&w=740"
                            className="max-h-[150px] w-full object-contain rounded-xl"

                        />

                        {/* Lock Icon (Overlay) */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 opacity-60"/>


                    </div>

                    <div
                        className="p-4 rounded-xl shadow-xl text-center flex flex-col items-center bg-gray-200 opacity-50 cursor-not-allowed relative">
                        {/* Main Badge Image */}
                        <img
                            src="https://img.freepik.com/free-vector/charity-donation-concept-hands-volunteers-holding-giving-heart_74855-10499.jpg?uid=R117230801&ga=GA1.1.578030478.1725297375&semt=ais_hybrid"
                            className="max-h-[150px] w-full object-contain rounded-xl"

                        />

                        {/* Lock Icon (Overlay) */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 opacity-60"/>


                    </div>

                    <div
                        className="p-4 rounded-xl shadow-xl text-center flex flex-col items-center bg-gray-200 opacity-50 cursor-not-allowed relative">
                        {/* Main Badge Image */}
                        <img
                            src="https://img.freepik.com/free-photo/golden-russian-ruble-coins-currency-money-sign-symbol-background-3d-illustration_56104-1707.jpg?uid=R117230801&ga=GA1.1.578030478.1725297375&semt=ais_hybrid"
                            className="max-h-[150px] w-full object-contain rounded-xl"

                        />

                        {/* Lock Icon (Overlay) */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 opacity-60"/>


                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Stuff</h1>
                <div
                    className="bg-gray-100 p-6 flex gap-6 rounded-xl border-2 overflow-x-auto shadow-md mb-6 cursor-pointer no-scrollbar ">


                    {[
                        {
                            src: "https://images.unsplash.com/photo-1616178193482-4dad15347c26?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            date: "March 20, 2024 - 14:30"
                        },
                        {
                            src: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            date: "June 12, 2023 - 10:15"
                        },
                        {
                            src: "https://images.unsplash.com/photo-1595795279832-13f0df36fbb9?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            date: "January 5, 2022 - 18:00"
                        },
                        {
                            src: "https://plus.unsplash.com/premium_photo-1676322397244-8cdfecdbc07e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            date: "April 8, 2021 - 08:45"
                        },
                        {
                            src: "https://images.unsplash.com/photo-1671554437037-c5622c1a6496?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            date: "April 8, 2021 - 08:45"
                        },
                        {
                            src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            date: "March 20, 2024 - 14:30"
                        },
                        {
                            src: "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            date: "April 8, 2021 - 08:45"
                        },
                        {
                            src: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            date: "April 8, 2021 - 08:45"
                        },
                        {
                            src: "https://images.unsplash.com/photo-1523437345381-db5ee4df9c04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            date: "December 22, 2020 - 16:20"
                        },
                    ].map((item, index) => (
                        <div key={index} className="relative  flex-none">
                            <img src={item.src} className="w-52 h-52 object-cover rounded-lg"/>
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                {item.date}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* User Activity Stats (Sold, Donated, Exchanged) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-100 p-4 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-[#47456a]/70">Sold</h3>
                    <p className="text-2xl font-bold text-gray-700">{sold}15 times</p>
                </div>
                <div className="bg-green-100 p-4 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-[#47456a]/70">Donated</h3>
                    <p className="text-2xl font-bold text-gray-700">{donated} 20 times</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-[#47456a]/70">Swapped</h3>
                    <p className="text-2xl font-bold text-gray-700">{exchanged}5 times</p>
                </div>
            </div>

            {/* Points Section */}
            <div className="bg-purple-100 p-6 rounded-xl shadow-md mb-6">
                <h3 className="text-2xl font-semibold text-[#47456a]/70">Total Points</h3>
                <p className="text-3xl font-bold text-gray-800">{points}250 pts</p>
                <p className="text-gray-600">Earn more points by donating!</p>
            </div>
            <div className="w-full bg-white p-6 rounded-lg shadow-md mb-5 relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-cover bg-center">
                    <img
                        src="https://img.freepik.com/free-photo/medium-shot-people-hugging_23-2149181996.jpg?t=st=1739064891~exp=1739068491~hmac=944a1fa655bc7082fec1df0aec1570d5e179783503b168f84014e4150fca33c1&w=1060"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
                </div>

                {/* Task List Section */}
                <div className="relative z-10 cursor-pointer font-bold">
                    <h2 className="text-white text-2xl font-semibold mb-4 text-center">
                        ✅ Completed Tasks & Ongoing Efforts
                    </h2>

                    <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg shadow-lg">
                        <ul className="space-y-4">
                            {[
                                {icon: "☑", text: "Organized a community clean-up event"},
                                {icon: "☑", text: "Taught coding basics to underprivileged students"},
                                {icon: "☑", text: "Assisted in local fundraising campaigns"},
                                {icon: "☑", text: "Helped in food distribution for low-income families"},
                                {icon: "☑", text: "Volunteered as a mentor in a youth leadership program"},
                                {icon: "🕒", text: "Currently working on an AI awareness workshop"},
                                {icon: "🕒", text: "Planning an environmental sustainability campaign"},
                            ].map((task, index) => (
                                <li
                                    key={index}
                                    className="flex  gap-5 items-center sm:px-8 px-2 text-white text-lg transition-transform duration-300 hover:scale-105"
                                >
                                    <span>{task.text}</span>
                                    <span
                                        className={`text-3xl ${
                                            task.icon === "☑" ? "text-green-400" : "text-yellow-400"
                                        }`}
                                    >
            {task.icon}
          </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
            {/* Account Options */}
            <div className="bg-white p-6  sm:text-2xl text-xl rounded-xl shadow-md mb-6">
                <h3 className="sm:text-2xl text-xl font-semibold text-[#47456a]/70 mb-4">Account Options</h3>
                <ul className="space-y-4 sm:text-3xl text-xl">
                    <li className="flex items-center gap-2   sm:text-xl text-lg text-gray-700 hover:bg-gray-100 py-4 rounded-2xl cursor-pointer">
                        <FontAwesomeIcon icon={faCog}/> Manage your Google Account
                    </li>
                    <li className="flex items-center  gap-2 text-gray-700  sm:text-xl text-lg hover:bg-gray-100 py-4 rounded-2xl cursor-pointer">
                        <FontAwesomeIcon icon={faSyncAlt}/> Switch Account
                    </li>
                    <li className="flex items-center gap-2  text-gray-700 hover:bg-gray-100   sm:text-xl text-lg py-4 rounded-2xl cursor-pointer">
                        <FontAwesomeIcon icon={faSignOutAlt}/> Sign Out
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100  sm:text-xl text-lg  py-4 rounded-2xl cursor-pointer">
                        <FontAwesomeIcon icon={faBalanceScale}/> Terms & Privacy Policy
                    </li>
                    <li className="flex items-center gap-2 text-gray-700  sm:text-xl text-lg  hover:bg-gray-100 py-4 rounded-2xl cursor-pointer">
                        <FontAwesomeIcon icon={faQuestionCircle}/> Help
                    </li>
                    <li className="flex items-center gap-2 text-gray-700    sm:text-xl text-lg hover:bg-gray-100 py-4 rounded-2xl cursor-pointer">
                        <FontAwesomeIcon icon={faCommentDots}/> Send Feedback
                    </li>
                </ul>
            </div>


        </>
    );
}

export default Profile;
