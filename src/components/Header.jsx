import React, { useState } from 'react'
import logo from "../assets/img/logo.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export default function Header() {
    const [togle , settogle] = useState(false)
    return (
        <>
            <div className=''>

                <div className='max-w-[1280px] px-[32px] h-[80px] mx-auto flex items-center justify-between'>
                    <div className='flex items-center gap-6'>
                        <div className=''>
                            <img className='h-10' src={logo} alt="" />
                        </div> 
                        <div className='lg:ms-5'>
                            <ul className='hidden md:flex gap-10 text-[16px] font-semibold text-[#475467] leading-6'>
                                <li>Home</li>
                                <li>Products</li>
                                <li>Resource</li>
                                <li>Pricing</li>
                            </ul>
                            <ul className={`md:hidden fixed text-center duration-500 items-center w-full h-screen ${togle ? 'left-0' :'left-[-100%]'  } top-20 bg-slate-400 text-[16px] font-semibold text-[#475467] leading-10`}>
                                <li className='p-5'>Home</li>
                                <li className='p-5'>Products</li>
                                <li className='p-5'>Resource</li>
                                <li className='p-5'>Pricing</li>
                                <ul className='flex gap-3 px-5'>
                                <li className='p-5 bg-[#7F56D9] px-[30px] py-[10px] text-white' style={{borderRadius:"8px"}}>Log in</li>
                                <li className='p-5 bg-[#7F56D9] px-[30px] py-[10px] text-white' style={{borderRadius:"8px"}}>Sign Up</li>
                                </ul>
                            </ul>
                        </div>
                    </div>{togle ? <AiOutlineClose onClick={()=>settogle(!togle)} className='items-center text-2xl md:hidden block'/> : <AiOutlineMenu onClick={()=>settogle(!togle)} className='items-center text-3xl md:hidden block'/> }


                    <div className='items-center text-xl hidden md:flex '>
                        <ul className='md:flex  gap-[12px] items-center font-semibold text-[#475467] leading-6 text-[16px] whitespace-nowrap'>
                            <li className=''>Log in</li>
                            <li className='bg-[#7F56D9] px-[16px] py-[16px] text-white' style={{borderRadius:"8px"}}>Sign Up</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}
