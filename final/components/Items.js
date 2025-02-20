import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faFileAlt, faHeart,faImage,faClock, faDollarSign,faShoppingCart, faPhone, faMapMarkerAlt, faGift, faExchangeAlt, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/item.png"

import '../index.css';
function Items() {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        image: "",
        price: "",
        option: "sell"
    });
    const [showForm, setShowForm] = useState(false);
    const [showForm2, setShowForm2] = useState(false);
    const [showForm3, setShowForm3] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Product submitted:", product);
    };

    const handleAddItemClick = () => {
        setShowForm(true);
        setShowForm2(false);
        setShowForm3(false);
    };
    const handleAddItemClick2 = () => {
        setShowForm2(true );
        setShowForm(false);
        setShowForm3(false);
    };
    const handleAddItemClick3 = () => {
        setShowForm3(true );
        setShowForm2(false);
        setShowForm(false);
    };

    return (
        <div className="p-6  shadow-lg rounded-lg">
            <div className="grid grid-cols-3 gap-10 mb-6">
                <div
                    className="bg-blue-200 p-4 rounded-xl shadow-md flex flex-col  relative  py-14  sm:py-6  sm:justify-start sm:items-start justify-center items-center  hover:scale-110 duration-300 cursor-pointer">
                    <div className={"flex sm:flex-row  flex-col gap-2 sm:mb-5  mb-0 "}>
                        <FontAwesomeIcon icon={faShoppingCart} className="text-3xl text-blue-800 text-center"/>
                        <h3 className="text-2xl font-semibold text-blue-800 hidden sm:flex ">Sold</h3>
                        <button
                            onClick={handleAddItemClick}
                            className="absolute bottom-2 left-4 sm:right-5 sm:bottom-1 justify-center  flex items-center sm:left-auto sm:top-3 sm:w-12 sm:h-12
               text-3xl text-blue-800 hover:bg-[#47456a]/30 rounded-full px-3 py-2.5  w-10 h-10">
                            <FontAwesomeIcon icon={faPlus} size={"sm"}/>
                        </button>

                    </div>
                    <div className={"flex justify-center items-center flex-col sm:flex-row  gap-2"}>
                        <p className="text-2xl font-bold text-gray-700">0 </p>
                        <p className="text-2xl font-bold text-gray-700">times</p>
                    </div>


                </div>
                <div
                    className="bg-green-200 p-4 rounded-xl shadow-md flex flex-col  relative   sm:justify-start sm:items-start justify-center items-center  hover:scale-110 duration-300 cursor-pointer">
                    <div className={"flex sm:flex-row  flex-col gap-2 sm:mb-5  mb-0 justify-center items-center "}>
                        <FontAwesomeIcon icon={faGift} className="text-3xl text-green-800 text-center"/>
                        <h3 className="text-2xl font-semibold text-green-800 hidden sm:flex ">Donated</h3>
                        <button
                            onClick={handleAddItemClick2}
                            className="absolute bottom-2 left-4 sm:right-5 sm:bottom-1  flex items-cente justify-center sm:left-auto sm:top-3 sm:w-12 sm:h-12
               text-3xl text-green-800 hover:bg-[#47456a]/30 rounded-full px-3 py-2.5  w-10 h-10">
                            <FontAwesomeIcon icon={faPlus} size={"sm"}/>
                        </button>
                    </div>
                    <div className={"flex justify-center items-center flex-col sm:flex-row  gap-2"}>
                        <p className="text-2xl font-bold text-gray-700">0 </p>
                        <p className="text-2xl font-bold text-gray-700">times</p>
                    </div>

                </div>
                <div
                    className="bg-yellow-200 p-4 rounded-xl shadow-md flex flex-col   relative  sm:justify-start sm:items-start justify-center items-center hover:scale-110 duration-300 cursor-pointer">
                    <div className={"flex sm:flex-row  flex-col gap-2 sm:mb-5  mb-0 "}>
                        <FontAwesomeIcon icon={faExchangeAlt} className="text-3xl text-yellow-800 "/>
                        <h3 className="text-2xl font-semibold text-yellow-800 hidden sm:flex ">Swapped</h3>
                        <button
                            onClick={handleAddItemClick3}
                            className="absolute bottom-2 left-4 sm:right-5 sm:bottom-1  flex justify-center items-center sm:left-auto sm:top-3 sm:w-12 sm:h-12
               text-3xl text-yellow-800 hover:bg-[#47456a]/30 rounded-full px-3 py-2.5    w-10 h-10">
                            <FontAwesomeIcon icon={faPlus} size={"sm"}/>
                        </button>
                    </div>
                    <div className={"flex justify-center items-center flex-col sm:flex-row  gap-2"}>
                        <p className="text-2xl font-bold text-gray-700">0 </p>
                        <p className="text-2xl font-bold text-gray-700">times</p>
                    </div>

                </div>
            </div>


            {showForm && (
                <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">Sell Your Item & Get Paid!</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block font-bold flex items-center gap-2 mb-3 text-blue-800 text-xl">
                                <FontAwesomeIcon icon={faBox}/> Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg outline-none bg-white shadow-sm text-blue-800 focus:ring-2 focus:ring-blue-500"
                                required
                                placeholder="Example: iPhone 14 Pro Max"
                            />
                        </div>

                        <div>
                            <label className="block flex items-center font-bold gap-2 mb-3 text-blue-800 text-xl">
                                <FontAwesomeIcon icon={faFileAlt}/> Description
                            </label>
                            <textarea
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg outline-none bg-white shadow-sm text-blue-800 focus:ring-2 focus:ring-blue-500"
                                required
                                placeholder="Include condition, features, and any details buyers should know..."
                            />
                        </div>

                        <div>
                            <label className="block font-bold flex items-center gap-2 mb-3 text-blue-800 text-xl">
                                <FontAwesomeIcon icon={faImage}/> Upload an Image
                            </label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={(e) => setProduct({...product, image: e.target.files[0]})}
                                className="w-full p-3 border rounded-lg outline-none bg-white shadow-sm text-blue-800 focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-bold flex items-center gap-2 mb-3 text-blue-800 text-xl">
                                <FontAwesomeIcon icon={faExchangeAlt}/> Choose a Category
                            </label>
                            <select
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg outline-none bg-white shadow-sm text-blue-800 focus:ring-2 focus:ring-blue-500">
                                <option value="electronics">Electronics</option>
                                <option value="furniture">Furniture</option>
                                <option value="clothing">Clothing</option>
                                <option value="books">Books</option>
                                <option value="toys">Toys</option>
                                <option value="sports">Sports</option>
                                <option value="automotive">Automotive</option>
                                <option value="beauty">Beauty</option>
                                <option value="groceries">Groceries</option>
                                <option value="health">Health</option>
                                <option value="house_tools">House Tools</option>
                                <option value="gardening">Gardening</option>
                                <option value="music">Music</option>
                                <option value="gaming">Gaming</option>
                                <option value="jewelry">Jewelry</option>
                                <option value="pet_supplies">Pet Supplies</option>
                                <option value="stationery">Stationery</option>
                                <option value="travel">Travel</option>
                                <option value="home_decor">Home Decor</option>
                                <option value="kitchen">Kitchen</option>
                            </select>
                        </div>

                        {product.option === "sell" && (
                            <div>
                                <label className="block font-bold flex items-center gap-2 mb-3 text-blue-800 text-xl">
                                    <FontAwesomeIcon icon={faDollarSign}/> Set Your Price
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    value={product.price}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg outline-none bg-white shadow-sm text-blue-800 focus:ring-2 focus:ring-blue-500"
                                    required
                                    placeholder="Enter price in USD ($)"
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-3 rounded-lg shadow-lg text-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all">
                            <FontAwesomeIcon icon={faCheck}/>
                            Sell Now & Get Paid
                        </button>
                    </form>
                </div>


            )}
            {showForm2 && (
                <div className="bg-green-100 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center text-green-800">Donate with Kindness</h2>
                    <p className="text-center text-green-700 mb-6">
                        Give a second life to your items by donating them to those in need. Your kindness makes a
                        difference!
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block font-bold flex items-center gap-2 mb-3 text-green-800 text-lg">
                                <FontAwesomeIcon icon={faBox}/> Item Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-xl outline-none bg-white text-green-800"
                                required
                                placeholder="E.g., Warm Blanket, Old Books..."
                            />
                        </div>
                        <div>
                            <label className="block font-bold flex items-center gap-2 mb-3 text-green-800 text-lg">
                                <FontAwesomeIcon icon={faFileAlt}/> Description
                            </label>
                            <textarea
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-xl outline-none bg-white text-green-800"
                                required
                                placeholder="Briefly describe the item condition..."
                            />
                        </div>
                        <div>
                            <label className="block font-bold flex items-center gap-2 mb-3 text-green-800 text-lg">
                                <FontAwesomeIcon icon={faImage}/> Upload an Image
                            </label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={(e) => setProduct({...product, image: e.target.files[0]})}
                                className="w-full p-3 border rounded-xl outline-none bg-white text-green-800"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-bold flex items-center gap-2 mb-3 text-green-800 text-lg">
                                <FontAwesomeIcon icon={faExchangeAlt}/> Choose a Category
                            </label>
                            <select
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-xl outline-none bg-white text-green-800">
                                <option value="electronics">Electronics</option>
                                <option value="furniture">Furniture</option>
                                <option value="clothing">Clothing</option>
                                <option value="books">Books</option>
                                <option value="toys">Toys</option>
                                <option value="sports">Sports</option>
                                <option value="automotive">Automotive</option>
                                <option value="beauty">Beauty</option>
                                <option value="groceries">Groceries</option>
                                <option value="health">Health</option>
                                <option value="house_tools">House Tools</option>
                                <option value="gardening">Gardening</option>
                                <option value="music">Music</option>
                                <option value="gaming">Gaming</option>
                                <option value="jewelry">Jewelry</option>
                                <option value="pet_supplies">Pet Supplies</option>
                                <option value="stationery">Stationery</option>
                                <option value="travel">Travel</option>
                                <option value="home_decor">Home Decor</option>
                                <option value="kitchen">Kitchen</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-bold flex items-center gap-2 mb-3 text-green-800 text-lg">
                                <FontAwesomeIcon icon={faMapMarkerAlt}/> Pickup Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={product.address}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-xl outline-none bg-white text-green-800"
                                required
                                placeholder="Enter your address for pickup..."
                            />
                        </div>
                        <div>
                            <label className="block font-bold flex items-center gap-2 mb-3 text-green-800 text-lg">
                                <FontAwesomeIcon icon={faPhone}/> Contact Number
                            </label>
                            <input
                                type="tel"
                                name="contact"
                                value={product.contact}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-xl outline-none bg-white text-green-800"
                                required
                                placeholder="Enter your phone number..."
                            />
                        </div>
                        <div>
                            <label className="block font-bold flex items-center gap-2 mb-3 text-green-800 text-lg">
                                <FontAwesomeIcon icon={faClock}/> Preferred Pickup Time
                            </label>
                            <input
                                type="text"
                                name="pickup_time"
                                value={product.pickup_time}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-xl outline-none bg-white text-green-800"
                                required
                                placeholder="E.g., Weekdays after 5 PM, Saturday mornings..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-500 flex items-center justify-center gap-2 font-bold text-lg"
                        >
                            <FontAwesomeIcon icon={faHeart}/>
                            Donate Now
                        </button>
                    </form>
                </div>

            )}
            {showForm3 && (
                <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg   w-full mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-yellow-800">Swap Your Item &
                        Find a Match!</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <div>
                            <label
                                className="block font-bold flex items-center gap-1 md:gap-2 mb-2 md:mb-3 text-yellow-800 text-lg md:text-xl">
                                <FontAwesomeIcon icon={faBox}/> Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                className="w-full p-2 md:p-3 border rounded-lg outline-none bg-white shadow-sm text-yellow-800"
                                required
                                placeholder="Example: Gaming Console, Bicycle..."
                            />
                        </div>

                        <div>
                            <label
                                className="block flex items-center font-bold gap-1 md:gap-2 mb-2 md:mb-3 text-yellow-800 text-lg md:text-xl">
                                <FontAwesomeIcon icon={faFileAlt}/> Description
                            </label>
                            <textarea
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                className="w-full p-2 md:p-3 border rounded-lg outline-none bg-white shadow-sm text-yellow-800"
                                required
                                placeholder="Include condition, features, and any details for potential swappers..."
                            />
                        </div>

                        <div>
                            <label
                                className="block font-bold flex items-center gap-1 md:gap-2 mb-2 md:mb-3 text-yellow-800 text-lg md:text-xl">
                                <FontAwesomeIcon icon={faImage}/> Upload an Image
                            </label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={(e) => setProduct({...product, image: e.target.files[0]})}
                                className="w-full p-2 md:p-3 border rounded-lg outline-none bg-white shadow-sm text-yellow-800"
                                required
                            />
                        </div>

                        <div>
                            <label
                                className="block font-bold flex items-center gap-1 md:gap-2 mb-2 md:mb-3 text-yellow-800 text-lg md:text-xl">
                                <FontAwesomeIcon icon={faExchangeAlt}/> Choose a Category
                            </label>
                            <select
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                                className="w-full p-2 md:p-3 border rounded-lg outline-none bg-white shadow-sm text-yellow-800">
                                <option value="electronics">Electronics</option>
                                <option value="furniture">Furniture</option>
                                <option value="clothing">Clothing</option>
                                <option value="books">Books</option>
                                <option value="toys">Toys</option>
                                <option value="sports">Sports</option>
                                <option value="automotive">Automotive</option>
                                <option value="beauty">Beauty</option>
                                <option value="groceries">Groceries</option>
                                <option value="health">Health</option>
                                <option value="house_tools">House Tools</option>
                                <option value="gardening">Gardening</option>
                                <option value="music">Music</option>
                                <option value="gaming">Gaming</option>
                                <option value="jewelry">Jewelry</option>
                                <option value="pet_supplies">Pet Supplies</option>
                                <option value="stationery">Stationery</option>
                                <option value="travel">Travel</option>
                                <option value="home_decor">Home Decor</option>
                                <option value="kitchen">Kitchen</option>
                            </select>
                        </div>

                        <div>
                            <label
                                className="block font-bold flex items-center gap-1 md:gap-2 mb-2 md:mb-3 text-yellow-800 text-lg md:text-xl">
                                <FontAwesomeIcon icon={faExchangeAlt}/> Items You're Interested in Swapping For
                            </label>
                            <input
                                type="text"
                                name="swapItems"
                                value={product.swapItems}
                                onChange={handleChange}
                                className="w-full p-2 md:p-3 border rounded-lg bg-white shadow-sm text-yellow-800 outline-none"
                                required
                                placeholder="Example: Smartphone, Laptop, Camera..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white py-3 rounded-lg bg-yellow-800 shadow-lg text-lg md:text-xl font-bold flex items-center justify-center gap-2 md:gap-3 hover:bg-yellow-700 transition-all">
                            <FontAwesomeIcon icon={faCheck}/>
                            Swap Now & Find a Match
                        </button>
                    </form>
                </div>

            )}


            <div
                className={`{w-full flex justify-center items-center flex-col   ${showForm || showForm2 || showForm3 ? "hidden" : ""}`}>
                <h1 className={"text-3xl font-bold text-[#47456a]/70 mt-10 mb-5 "}>Let's Start Together</h1>
                <img
                    src={img}
                    className={`sm:w-[40%] w-[60%] rounded-full flex justify-center items-center h-auto smooth-bounce`}
                />

            </div>


        </div>
    );
}

export default Items;
