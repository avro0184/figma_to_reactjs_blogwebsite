import React, { useState, useEffect } from "react";
import fg from "../assets/img/fg.png"
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import imageprofile1 from "../assets/img/imageprofile1.jpg"
import axios from "axios"


export default function BlogList() {
    const [isopen, setisOpen] = useState(false)
    const [blog, setblog] = useState([])
    function getblog() {
        axios.get("https://clevpro.com/api/blogs")
            .then((response) => setblog(response.data))
            .catch((err) => console.log(err))


    }
    useEffect(() => {
        getblog()
        console.log(blog)
    }, [])
    return (
        <>
            <div className="max-w-[1280px] px-[32px] mx-auto mb-5 pb-5">

                <div className="md:flex items-center justify-between mb-[64px]">
                    <div className="w-full md:w-auto mb-[32px] md:mb-0 me-[40px] whitespace-nowrap overflow-x-auto overflow-y-hidden hide-scrollbar" style={{ borderBottom: "1px solid #EAECF0", display: "flex", height: "36px", flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
                        <ul className="flex gap-[30px] font-semibold text-base leading-6" style={{ justifyContent: "center", alignItems: "center", gap: "8px" }}>
                            <li className="px-[10px] pb-[10px] text-[#6941C6] border-b-2 border-[#7F56D9] border-solid">View all</li>
                            <li className="px-[10px] pb-[10px] hover:text-[#6941C6] hover:border-b-2 border-[#7F56D9] border-solid">Design</li>
                            <li className="px-[10px] pb-[10px] hover:text-[#6941C6] hover:border-b-2 border-[#7F56D9] border-solid">Product</li>
                            <li className="px-[10px] pb-[10px] hover:text-[#6941C6] hover:border-b-2 border-[#7F56D9] border-solid">Software Engineering</li>
                            <li className="px-[10px] pb-[10px] hover:text-[#6941C6] hover:border-b-2 border-[#7F56D9] border-solid">Customer Success</li>
                        </ul>
                    </div>
                    <div class=" md:inline-block bg-[#FFF]">
                        <div onClick={() => setisOpen(!isopen)} className={`text-basetext-[#101828] font-medium rounded-[8px] bg-[#FFFFFF] ${isopen ? "border-4 border-purple-300" : "border-2 border-[#D0D5DD]"}`}>
                            <button className="w-full flex md:w-[320px] px-[14px] py-[10px] justify-between items-center">Most recent
                                <IoIosArrowDown />
                            </button>
                            {isopen &&
                                <div className="absolute z-0 w-full md:w-[320px] rounded-[8px] mt-2">
                                    <ul className=" font-medium justify-center items-center text-center text-base leading-6 bg-slate-200 h-[200px] overflow-auto hide-scrollbar rounded-lg">
                                        <li className="px-2 py-4 text-[20px]">list 1</li>
                                        <li className="px-2 py-4 text-[20px]">list 2</li>
                                    </ul>
                                </div>}
                        </div>
                    </div>
                </div>

                {/* blog section*/}


                <div className=" ">
                    <div className="flex flex-row flex-wrap" style={{ gap: "var(--spacing-6xl, 48px) var(--spacing-4xl, 32px)" }}>

                        <div class="lg:max-w-sm">
                            <a href="#">
                                <img class="rounded-[16px]" src={fg} alt="" />
                            </a>
                            <p className="text-sm text-[#6941C6] font-semibold leading-5 mt-[20px]">Design</p>
                            <div className="flex justify-between items-center pe-3 mt-2">
                                <div>
                                    <p className=" text-[#101828] text-xl font-semibold">UX review presentations</p>
                                </div>
                                <div className=" justify-center items-start">
                                    <FaLocationArrow className="text-[20px]" />
                                </div>
                            </div>
                            <p className=" text-base  font-normal text-[#475467] text-ellipsis overflow-hidden mt-2 line-clamp-2">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                            <div className="flex mt-6">
                                <div className="h-[40px] w-[40px] justify-center items-center">
                                    <img className="rounded-full" src={imageprofile1} alt="" />
                                </div>
                                <div className=" items-center gap-3 justify-center px-3 m">
                                    <p className=" text-sm font-semibold text-[#101828]">Alec Whitten</p>
                                    <p className=" text-sm font-normal text-[#475467] md:text-[#101828]">17 Jan 2024</p>
                                </div>
                            </div>
                        </div>
                        <div class=" lg:max-w-sm">
                            <a href="#">
                                <img class="rounded-[16px]" src={fg} alt="" />
                            </a>
                            <p className="text-sm text-[#6941C6] font-semibold leading-5 mt-[20px]">Design</p>
                            <div className="flex justify-between items-center pe-3 mt-2">
                                <div>
                                    <p className=" text-[#101828] text-xl font-semibold">UX review presentations</p>
                                </div>
                                <div className=" justify-center items-start">
                                    <FaLocationArrow className="text-[20px]" />
                                </div>
                            </div>
                            <p className=" text-base  font-normal text-[#475467] text-ellipsis overflow-hidden mt-2 line-clamp-2">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                            <div className="flex mt-6">
                                <div className="h-[40px] w-[40px] justify-center items-center">
                                    <img className="rounded-full" src={imageprofile1} alt="" />
                                </div>
                                <div className=" items-center gap-3 justify-center px-3 m">
                                    <p className=" text-sm font-semibold text-[#101828]">Alec Whitten</p>
                                    <p className=" text-sm font-normal text-[#475467] md:text-[#101828]">17 Jan 2024</p>
                                </div>
                            </div>
                        </div>
                        <div class=" lg:max-w-sm">
                            <a href="#">
                                <img class="rounded-[16px]" src={fg} alt="" />
                            </a>
                            <p className="text-sm text-[#6941C6] font-semibold leading-5 mt-[20px]">Design</p>
                            <div className="flex justify-between items-center pe-3 mt-2">
                                <div>
                                    <p className=" text-[#101828] text-xl font-semibold">UX review presentations</p>
                                </div>
                                <div className=" justify-center items-start">
                                    <FaLocationArrow className="text-[20px]" />
                                </div>
                            </div>
                            <p className=" text-base  font-normal text-[#475467] text-ellipsis overflow-hidden mt-2 line-clamp-2">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                            <div className="flex mt-6">
                                <div className="h-[40px] w-[40px] justify-center items-center">
                                    <img className="rounded-full" src={imageprofile1} alt="" />
                                </div>
                                <div className=" items-center gap-3 justify-center px-3 m">
                                    <p className=" text-sm font-semibold text-[#101828]">Alec Whitten</p>
                                    <p className=" text-sm font-normal text-[#475467] md:text-[#101828]">17 Jan 2024</p>
                                </div>
                            </div>
                        </div>
                       




                    </div>
                </div>



            </div>




        </>
    );
}
