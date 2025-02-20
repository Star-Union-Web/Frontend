import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import google from "../Google.svg";
import { useNavigate } from "react-router-dom";
function Signup({ setUserName, setLetter, setemail, setpass }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const submit = (data) => {
        console.log("Form submitted", data);
        setUserName(`${data.firstname} ${data.lastname}`);
        setLetter(data.firstname.charAt(0).toUpperCase() + data.lastname.charAt(0).toUpperCase());
        setemail(data.email);
        setpass(data.password);
        navigate("/dashboard");
    };

    return (
        <div className="flex justify-center items-center w-full h-screen my-auto">
            <Link to="/components/Home">
                <div className="w-10 h-10 sm:flex hidden bg-[#cc4b48] items-center justify-center absolute top-10 left-1/4 rounded-full text-white hover:scale-110 cursor-pointer">
                    <FontAwesomeIcon icon={faAngleLeft} size="lg" />
                </div>
            </Link>

            <div className="sm:w-[30%] w-full flex flex-col h-[85vh] items-center justify-center mx-5 relative shadow-lg shadow-gray-500 rounded-3xl p-8 py-10">
                <h1 className="text-center text-[#cc4b48] text-3xl font-bold absolute top-1">Sign Up</h1>

                <form className="w-[80%] absolute h-[77%] top-12 mx-5 mt-1 flex flex-col" onSubmit={handleSubmit(submit)}>
                    <div className="flex flex-row w-full items-start gap-6 mb-2">
                        <div className="flex flex-col w-1/2">
                            <label className="text-[#47456a] text-md text-left">Your Name</label>
                            <input
                                {...register("firstname", { required: "First name is required" })}
                                type="text"
                                className="w-full p-2 rounded-2xl border-none outline-none bg-[#47456a]/20 text-gray-800"
                                placeholder="Enter your name"
                            />
                            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
                        </div>

                        <div className="flex flex-col w-1/2">
                            <label className="text-[#47456a] text-md text-left">Your Last Name</label>
                            <input
                                {...register("lastname", { required: "Last name is required" })}
                                type="text"
                                className="w-full p-2 rounded-2xl border-none outline-none bg-[#47456a]/20 text-gray-800"
                                placeholder="Enter your last name"
                            />
                            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
                        </div>
                    </div>

                    <div className="flex flex-col w-full mb-2">
                        <label className="text-[#47456a] text-md text-left">Your Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" },
                            })}
                            type="email"
                            className="w-full p-2 rounded-2xl border-none outline-none text-gray-800 bg-[#47456a]/20"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col w-full mb-2">
                        <label className="text-[#47456a] text-md text-left">Password</label>
                        <input
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
                            type="password"
                            className="w-full p-2 rounded-2xl border-none outline-none text-gray-800 bg-[#47456a]/20"
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <div className="flex flex-col w-full mb-2">
                        <label className="text-[#47456a] text-md text-left">Phone Number</label>
                        <input

                            type="number"
                            className="w-full p-2 rounded-2xl mb-2 border-none outline-none text-gray-800 bg-[#47456a]/20"
                            placeholder="Write your phone number..."
                        />

                    </div>

                    <div className="w-full flex flex-row gap-11 items-center justify-center mb-2">
                        <div className="flex flex-col w-1/2">
                            <label className="text-[#47456a] text-md text-left">Date of Birth</label>
                            <input

                                type="date"
                                className="w-full p-2 rounded-2xl border-none outline-none text-gray-800 bg-[#47456a]/20"
                            />

                        </div>
                        <div className="w-full flex flex-col mb-2">
                            <label className="text-[#47456a] text-md text-left">Gender</label>
                            <select  className="w-full p-2 rounded-2xl border-none outline-none text-gray-800 bg-[#47456a]/20">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>

                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-[100%] bg-[#cc4b48] mt-3 -ml-5 text-md rounded-2xl text-center absolute bottom-0 left-5 flex justify-center items-center text-xl text-white font-bold p-2 hover:opacity-85 transition">
                        Submit
                    </button>
                </form>

                <div className="flex items-center justify-center w-[80%] absolute bottom-16">
                    <div className="w-full h-[1px] bg-gray-300"></div>
                    <span className="px-3 text-gray-500">or</span>
                    <div className="w-full h-[1px] bg-gray-300"></div>
                </div>

                <button className="w-[80%] mt-1 flex items-center text-md absolute mb-1  bottom-4 justify-center bg-white border border-gray-400 text-gray-600 font-medium p-2 rounded-2xl hover:bg-gray-100 transition">
                    <img src={google} alt="Google Logo" className="w-6 h-6 mr-2" />
                    Sign Up with Google
                </button>
            </div>
        </div>
    );
}

export default Signup;
