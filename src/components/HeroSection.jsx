import React from 'react'
import fg from "../assets/img/fg.png"
import heroimage from "../assets/img/heroimage.jpg"
import { FaSquareArrowUpRight } from "react-icons/fa6";
import womenimage from "../assets/img/womenimage.jpg"



export default function HeroSection() {
  return (
    <>
      <div className='max-w-[1280px] px-[32px] mx-auto md:mb-[64px] pb-[16px]'>
        <div className='flex' style={{ padding: "var(--spacing-9xl, 96px) 0px", flexDirection: "column", alignItems: "center", gap: "var(--spacing-7xl, 64px)", alignSelf: "stretch" }}>
          <div className='py-[96px]' style={{ gap: "var(--spacing-6xl, 30px)", display: "flex", padding: "var(--spacing-none, 0px)", flexDirection: "column", alignItems: " flex-start", alignSelf: "stretch" }}>
            <p className='text-[16px] font-semibold text-["#6941C6"]' style={{ lineHeight: "24px", color: 'var(--colors-text-text-brand-secondary-700, #6941C6)' }} >Our blog</p>
            <h1 className='text-[48px] font-semibold' style={{ lineHeight: "60px", color: "var(--colors-text-text-primary-900, #101828)", letterSpacing: "-0.96px" }}>Resources and insights</h1>
            <h3 className='text-[18px] md:text-[20px]' style={{ lineHeight: "30px", fontWeight: "400", color: "var(--colors-text-text-tertiary-600, #475467)" }}>The latest industry news, interviews, technologies, and resources.</h3>
          </div>
        </div>

        <div className=' w-full flex justify-center items-center'>
          <div className='md:relative h-full w-full' >
            <div className='md:h-[700-px] overflow-hidden'>
              <img className=' w-full h-full bg-cover bg-center bg-no-repeat rounded-[16px]' src={heroimage} alt="" />
            </div>
            <div class="md:absolute w-full text-lg text-white bottom-4 gap-10 pt-2 md:p-[32px]">
              <div className='flex justify-between md:items-center w-full mb-3'>
                <p className='md:text-2xl pe-3 text-xl  font-semibold text-[#101828] md:text-[#FFF]'>Improve your design skills: Develop an "eye" for design</p>
                <FaSquareArrowUpRight className='h-6 w-6 text-[#101828] md:text-[#FFF]' />
              </div>
              <p className='text-base font-normal text-[#475467] md:text-[#FFF] line-clamp-2'>Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.</p>
              <div className='flex justify-between items-center md:mt-5'>
                <div className='flex flex-row justify-center items-center gap-8 font-semibold'>
                  <div className=' text-sm '>
                  <p className='pb-2 hidden md:inline'>Written by</p>                    <div className='flex justify-center items-center'>
                      <img className='h-[40px] w-[40px] rounded-full ms-5 md:m-auto' src={womenimage} alt="" />
                      <div className=' justify-center items-center'>
                      <p className='ms-3  text-[#101828] md:text-[#FFF] whitespace-nowrap'>Amélie Laurent</p>
                      <p className='ms-3 text-[#475467] md:hidden text-base'>10 April 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <p className=' text-sm mb-2'>Published on</p>
                    <p className=' text-base'>10 April 2024</p>
                  </div>

                </div>
                <div className=' text-sm'>
                  <p className=' font-semibold pb-2'>File under</p>
                  <ul className='flex justify-center items-center text-center gap-3 font-normal'>
                    <li className='px-[10px] border border-[#FFF] rounded-2xl'>Design</li>
                    <li className='px-[10px] border border-[#FFF] rounded-2xl'>Research</li>
                    <li className='px-[10px] border border-[#FFF] rounded-2xl'>Presentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}
