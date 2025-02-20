import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTv,
    faCouch,
    faTshirt,
    faThumbsUp,
    faShare,
    faBookOpen,
    faPuzzlePiece,
    faBasketballBall,
    faCar,
    faPhone,

faHomeUser,
    faShoppingBasket,
    faStethoscope,
    faToolbox,
    faLeaf,
    faMusic,
    faGamepad,
    faRing,
    faPaw,
    faPenFancy,
    faPlane,
    faHome,
    faBlender,
    faCommentDots
} from "@fortawesome/free-solid-svg-icons";
import img3 from "../assets/chat2.jpg";
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';

import { faSmile, faMicrophone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment, faVideo, faUserPlus, faTimes,faUserFriends } from "@fortawesome/free-solid-svg-icons"; // New icons for chat, video, and friends
import "../index.css";
import {useEffect} from "react";
import  img2 from "../assets/chat3.png"
function Home2() {

    const [posts, setPosts] = useState([]);

    const [isvedio, setvedio] = useState(false);
    const [chat, setchat] = useState(false);

useEffect(() => {
    fetch("/products.json") // Fetch JSON from the public folder
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error("Error fetching data:", error));
}, []);

    const [freind , setfreind] = useState(false);
    const [image , setimage ] = useState(true);
    const [form , setform ] = useState(false);
    const [liked  , setliked ] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);


    const [freind2 , setfreind2] = useState([]);
    const [default0  , setdefault] = useState(true);
    const [menu  , setmenu] = useState(true );
    useEffect(() => {
        fetch("/fre.json")
            .then(response => response.json())
            .then(data2 => {
                console.log('Friends:', data2);  // Log friends data
                setfreind2(data2);
            })
            .catch(error => console.error("Error fetching friends:", error));
    }, []);

    const [postarray, setpost] = useState([]);

    function pushpost(post) {
        setpost(prevPosts => [...prevPosts, post]);
    }

function setfre(){
    setfreind(true);
    setdefault(false);
    setvedio(false);
    setmenu(false);
    setchat(false)
    setliked(false);
}
    function sethome(){
        setfreind(false);
        setvedio(false);
        setdefault(true);
setmenu(true );
setchat(false);
        setliked(false);
    }
    function setliked2(){
        setfreind(false);
        setvedio(false);
        setdefault(false);
        setmenu(true  );
        setchat(false);
        setliked(true);

    }

    function chatvisible(){
    setchat(true);
    setmenu(false);
        setvedio(false);
        setmenu(false);
        setfreind(false );
        setdefault(false)
        setliked(false);


    }
    function form2(friend) {
        setform(true);
        setimage(false);
        setSelectedFriend(friend); // Store selected friend's details
    }





    const categories = [
        { name: "Electronics", icon: faTv, color: "text-red-500" },
        { name: "Furniture", icon: faCouch, color: "text-blue-500" },
        { name: "Clothing", icon: faTshirt, color: "text-green-500" },
        { name: "Books", icon: faBookOpen, color: "text-yellow-500" },
        { name: "Toys", icon: faPuzzlePiece, color: "text-purple-500" },
        { name: "Sports", icon: faBasketballBall, color: "text-orange-500" },
        { name: "Automotive", icon: faCar, color: "text-teal-500" },
        { name: "Beauty", icon: faHeart, color: "text-pink-500" },
        { name: "Groceries", icon: faShoppingBasket, color: "text-indigo-500" },
        { name: "Health", icon: faStethoscope, color: "text-red-400" },
        { name: "House Tools", icon: faToolbox, color: "text-blue-400" },
        { name: "Gardening", icon: faLeaf, color: "text-green-400" },
        { name: "Music", icon: faMusic, color: "text-yellow-400" },
        { name: "Gaming", icon: faGamepad, color: "text-purple-400" },
        { name: "Jewelry", icon: faRing, color: "text-orange-400" },
        { name: "Pet Supplies", icon: faPaw, color: "text-teal-400" },
        { name: "Stationery", icon: faPenFancy, color: "text-pink-400" },
        { name: "Home Decor", icon: faHome, color: "text-red-300" },
        { name: "Kitchen", icon: faBlender, color: "text-blue-300" },
    ];







    const [likedPosts, setLikedPosts] = useState([]); // Track liked state for each post

    const toggleHeart = (postId) => {
        setLikedPosts((prevLikedPosts) => ({
            ...prevLikedPosts,
            [postId]: !prevLikedPosts[postId], // Toggle like for this post
        }));
    };

    return (
        <div className="flex min-h-screen justify-between items-start">

            <aside
                className={`bg-white shadow-md  rounded-xl h-[87%] fixed hidden flex-col justify-start items-start overflow-y-auto no-scrollbar transition-all duration-300
  sm:${menu ? "flex " : "hidden"}   h-screen`}>
                <nav className="flex flex-col gap-4 w-full h-full overflow-y-auto no-scrollbar p-2">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex items-center text-xl font-semibold px-3 py-3 rounded-full gap-3 text-gray-700 hover:bg-gray-200 cursor-pointer text-left">
                            <FontAwesomeIcon icon={category.icon} className={category.color}/>
                        </div>
                    ))}
                </nav>
            </aside>


            {/* Main Content */}

            {/* Main Content */}

                {default0 &&( <main className="flex-1 gap-y-8  w-[50%] sm:mx-[25%] mr-10 ">
                        {posts.map((post) => (
                        <div
                            key={post.id}
                            className={`relative w-full flex flex-col bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300`}
                        >
                            {/* User Info */}
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src={post.user.avatar}
                                    alt={post.user.username}
                                    className="w-10 h-10 rounded-full border-2 border-gray-300"
                                />
                                <div>
                                    <h4 className="font-semibold text-lg">{post.user.username}</h4>
                                    <p className="text-gray-500 text-sm">{post.user.location}</p>
                                </div>

                                <button
                                    className="absolute right-2 text-xl text-[#47456a] px-4 w-16 h-16 py-2 rounded-full font-semibold transition">
                                    <FontAwesomeIcon icon={faUserPlus} className="mr-2"/>
                                </button>
                            </div>

                            {/* Post Details */}
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">{post.name}</h3>
                                <p className="text-gray-600 mb-2">
                                <strong>Category:</strong> {post.category.toUpperCase()}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    <strong>Condition:</strong> {post.condition}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    <strong>Description:</strong> {post.description}
                                </p>
                                {post.price && (
                                    <p className="text-gray-600 mb-2">
                                        <strong>Price:</strong> ${post.price}
                                    </p>
                                )}
                            </div>

                            {/* Post Image or Video */}
                            {isvedio ? (
                                <video className="w-full h-64 object-cover rounded-lg mb-4" controls>
                                    <source src={post.video_url} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img
                                    src={post.image_url}
                                    alt={post.name}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            )}

                            {/* Action Buttons */}
                            <div className="border-t pt-3 flex  sm:text-lg text-md justify-between text-gray-600 ">
                                <button
                                    className="hover:text-red-700 flex items-center transition"
                                    onClick={() => {
                                        pushpost(post);
                                        toggleHeart(post.id);
                                    }}
                                >
                                    <FontAwesomeIcon icon={likedPosts[post.id] ? filledHeart : emptyHeart}
                                                     className="mr-2"/>
                                    Like
                                </button>
                                <button className="hover:text-red-700 flex items-center transition">
                                    <FontAwesomeIcon icon={faComment} className="mr-2"/>
                                    Comment
                                </button>
                                <button className="hover:text-red-700 flex items-center transition">
                                    <FontAwesomeIcon icon={faShare} className="mr-2"/>
                                    Share
                                </button>
                                <button className="hover:text-red-700 flex items-center transition">
                                    <FontAwesomeIcon icon={faCommentDots} className="mr-2"/>
                                    Chat
                                </button>
                            </div>
                        </div>

                        ))}
                </main>)}





            {liked && (  <main className="flex-1 gap-y-8  w-[50%] sm:mx-[25%] mr-10 ">

                {postarray.map((post) => (
                    <div
                        key={post.id}
                        className={`relative w-full flex flex-col bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300`}
                    >
                        {/* User Info */}
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src={post.user.avatar}
                                alt={post.user.username}
                                className="w-10 h-10 rounded-full border-2 border-gray-300"
                            />
                            <div>
                                <h4 className="font-semibold text-lg">{post.user.username}</h4>
                                <p className="text-gray-500 text-sm">{post.user.location}</p>
                            </div>

                            <button
                                className="absolute right-2 text-xl text-[#47456a] px-4 w-16 h-16 py-2 rounded-full font-semibold transition">
                                <FontAwesomeIcon icon={faUserPlus} className="mr-2"/>
                            </button>
                        </div>

                        {/* Post Details */}
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">{post.name}</h3>
                            <p className="text-gray-600 mb-2">
                                <strong>Category:</strong> {post.category.toUpperCase()}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Condition:</strong> {post.condition}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Description:</strong> {post.description}
                            </p>
                            {post.price && (
                                <p className="text-gray-600 mb-2">
                                    <strong>Price:</strong> ${post.price}
                                </p>
                            )}
                        </div>

                        {/* Post Image or Video */}
                        {isvedio ? (
                            <video className="w-full h-64 object-cover rounded-lg mb-4" controls>
                                <source src={post.video_url} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img
                                src={post.image_url}
                                alt={post.name}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        )}

                        {/* Action Buttons */}
                        <div className="border-t pt-3  sm:text-lg text-md flex justify-between text-gray-600 ">
                            <button
                                className="hover:text-red-700 flex items-center transition"
                                onClick={() => {
                                    pushpost(post);
                                    toggleHeart(post.id);
                                }}
                            >
                                <FontAwesomeIcon icon={likedPosts[post.id] ? filledHeart : emptyHeart}
                                                 className="mr-2"/>
                                Like
                            </button>
                            <button className="hover:text-red-700 flex items-center transition">
                                <FontAwesomeIcon icon={faComment} className="mr-2"/>
                                Comment
                            </button>
                            <button className="hover:text-red-700 flex items-center transition">
                                <FontAwesomeIcon icon={faShare} className="mr-2"/>
                                Share
                            </button>
                            <button className="hover:text-red-700 flex items-center transition">
                                <FontAwesomeIcon icon={faCommentDots} className="mr-2"/>
                                Chat
                            </button>
                        </div>
                    </div>

                ))}
            </main>)}


            {freind && (
                <main
                    className={`flex-1 gap-y-8 transition-all duration-300   relative ${menu ? "ml-[17%] mr-[17%] w-[70%]" : "ml-0 mr-0 w-full"}`}>


                    {/* Friends List */}
                    <div className="flex flex-col gap-6 w-[83%]">
                        {freind2.map((friend) => (
                            <div
                                key={friend.id}
                                className="flex items-center gap-4 rounded-2xl px-5 relative hover:bg-[#47456a]/10 cursor-pointer"
                                // Set selected friend for chat
                            >
                                <img
                                    src={friend.image_url}
                                    alt={friend.name}
                                    className="w-16 h-16 rounded-full border-2 border-gray-300"
                                />
                                <span className="text-lg font-semibold">{friend.name}</span>
                                <button className="ml-4 p-2 absolute right-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 12h12M6 6h12M6 18h12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>

                </main>

            )}


            {chat && (
                <main
                    className={`flex-1 gap-y-8 transition-all sm:ml-4 -ml-3 duration-300 ${menu ? "ml-[17%] mr-[17%] w-[70%]" : " w-full ml-0 mr-0 "} flex`}>

                    <div className="flex sm:flex-col flex-row sm:relative fixed   w-[70%] overflow-x-auto gap-6 sm:w-[25%] max-h-[80vh] sm:overflow-y-auto no-scrollbar">
                        {freind2.map((friend) => (
                            <div
                                key={friend.id}
                                className="flex items-center gap-4 rounded-2xl px-5 relative sm:hover:bg-[#47456a]/10 cursor-pointer"
                                onClick={() => form2(friend)}>
                                <img
                                    src={friend.image_url}
                                    alt={friend.name}
                                    className="sm:w-16 sm:h-16 w-12 h-12  rounded-full border-2 border-gray-300"
                                />
                                <span className="sm:text-lg  text-sm font-semibold">{friend.name}</span>
                                <span className="text-gray-500 text-sm">
            </span>
                            </div>
                        ))}
                    </div>

                    {image && (
                        <div>
                            <img src={img2}
                                 className="sm:w-[35%] w-[60%] mr-20 flex flex-col bottom-20 justify-center absolute sm:right-80 sm:ml-[12%] sm:mt-[5%] rounded-full"/>
                            <p className="text-gray-500 font-bold absolute sm:right-[25%] sm:mb-10  sm:top-20 sm:left-1/2 top-40 left-40 sm:text-3xl  text-xl  text-center mt-5">
                                Start a conversation now
                            </p>
                        </div>
                    )}

                    {/* Chat Form */}

                    {form && (<div
                            className="sm:w-[55%] items-center flex w-[65%] rounded-2xl flex-col p-6  sm:h-[80vh] h-[60vh] sm:mt-20  sm:relative absolute bottom-20  border-l mr-20 border-gray-300  shadow-md"
                            style={{
                                backgroundImage: `url(${img3})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}>

                            <div
                                className="flex items-center bg-white  w-[100%]  border-b    justify-between border-gray-300 sm:p-4  p-2 shadow-md rounded-2xl transition-all duration-300 mb-10 flex-row sm:gap-4  gap-10">
                                <div className="flex  flxe fle-row w-full items-center sm:gap-4 gap-1">
                                    <img
                                        src={selectedFriend.image_url}
                                        alt={selectedFriend.name}
                                        className="w-12 h-12 rounded-full border-2 border-gray-300"
                                    />
                                    <h3 className="text-lg font-semibold">{selectedFriend.name}</h3>
                                </div>

                                <div className={"flex flex-row sm:gap-2 gap-1 "}>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="mr-2 text-gray-700 bg-transparent hover:bg-gray-200 cursor-pointer p-2 text-lg rounded-full flex items-center justify-center transition"/>

                                    <FontAwesomeIcon
                                        icon={faVideo}
                                        className="mr-2 text-gray-700 bg-transparent hover:bg-gray-200 cursor-pointer  p-2  text-lg rounded-full flex items-center justify-center transition"/>

                                </div>

                            </div>

                            <div
                                className="absolute bottom-0 w-[100%]  flex  flex-row border-t    justify-between border-gray-300 p-4 shadow-md  transition-all duration-300   gap-1   bg-white">
                                {/* Emoji Icon */}
                                <button className="text-gray-500  hover:text-[#47456a] p-2">
                                    <FontAwesomeIcon icon={faSmile} className="text-xl"/>
                                </button>

                                {/* Message Input */}
                                <input
                                    type="text"
                                    className="flex-1 h-12 p-3 w-[50%] rounded-full focus:outline-none  bg-[gray]/10 mx-2"
                                    placeholder={`Write a message to ${freind.name}...`}
                                />

                                {/* Microphone Icon */}
                                <button className="text-gray-500 hover:text-[#47456a] p-2">
                                    <FontAwesomeIcon icon={faMicrophone} className="text-xl"/>
                                </button>

                                {/* Send Button */}
                                <button className="text-gray-500 hover:text-[#47456a] p-2">
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-xl"/>
                                </button>
                            </div>


                        </div>
                    )}

                </main>)}


            {/* Right Sidebar */}
            <aside
                className={`sm:w-[10%]  w-[10%] bg-white p-4 shadow-md  items-center  mr-1 ${chat ? "ml-[10%]" : " "} flex flex-col gap-6  h-screen fixed sm:right-3  right-0 overflow-y-auto no-scrollbar`}>
                <nav className="flex flex-col gap-4">

                    <div
                        className="flex items-center text-lg font-semibold px-3 py-3 rounded-full gap-3  hover:text-yellow-600    text-gray-700 cursor-pointer text-left"
                        onClick={sethome}>
                        <FontAwesomeIcon icon={faHomeUser} className={"text-yellow-600"}/>
                        <span className={"sm:flex hidden "}>Home</span>
                    </div>
                    <div
                        className="flex items-center  text-lg  font-semibold px-3 py-3 rounded-full gap-3  hover:text-blue-600  text-gray-700 cursor-pointer text-left"
                        onClick={chatvisible}>
                        <FontAwesomeIcon icon={faComment} className={"text-blue-600"}/>
                        <span  className={"sm:flex hidden "}>Chats</span>
                    </div>
                    <div

                        className="flex items-center  text-lg  font-semibold px-3 py-3 rounded-full gap-3   hover:text-red-600 text-gray-700  cursor-pointer text-left"
                        onClick={() => setvedio(true)}>
                        <FontAwesomeIcon icon={faVideo} className={"text-red-600"}/>
                        <span  className={"sm:flex hidden "}>Videos</span>
                    </div>
                    <div

                        className="flex items-center  text-lg  font-semibold px-3 py-3 rounded-full gap-3 hover:text-pink-600  text-gray-700  cursor-pointer text-left"
                        onClick={setliked2}>
                        <FontAwesomeIcon icon={faHeart} className="text-pink-600"/>

                        <span className={"sm:flex hidden "}>Liked</span>
                    </div>
                    <div
                        className="flex items-center text-lg  font-semibold px-3 py-3 hover:text-green-600  rounded-full gap-3 text-gray-700  cursor-pointer text-left"
                        onClick={setfre}>
                        <FontAwesomeIcon icon={faUserFriends} className={"text-green-600"}/>
                        <span className={"sm:flex hidden "}>Friends</span>
                    </div>


                </nav>
            </aside>
        </div>
    );
}

export default Home2;


// {/*{posts.map((post) => (*/}
// {/*    <div key={post.id} style={{*/}
// {/*        border: "1px solid #ddd", borderRadius: "10px", padding: "15px",*/}
// {/*        marginBottom: "15px", background: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)"*/}
// {/*    }}>*/}
// {/*        <img src={post.image_url} alt={post.name} style={{ width: "100%", borderRadius: "5px" }} />*/}
// {/*        <h3>{post.name}</h3>*/}
// {/*        <p><strong>Category:</strong> {post.category.toUpperCase()}</p>*/}
// {/*        <p><strong>Condition:</strong> {post.condition}</p>*/}
// {/*        {post.price && <p><strong>Price:</strong> ${post.price}</p>}*/}
// {/*        <p><strong>Location:</strong> {post.location}</p>*/}
// {/*        <p><strong>Posted by:</strong> {post.user.username}</p>*/}
// {/*    </div>*/}
// {/*))}*/}



