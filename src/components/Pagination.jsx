import React from 'react'

export default function Pagination() {
    return (
        <>
            <div className="max-w-[1280px] px-[32px] mx-auto mb-5 h-screen mt-[32px]">
                <hr className='text-[#EAECF0]' />

                <div class="flex justify-between items-center py-5 overflow-x-auto hide-scrollbar">
                    <a href="#" class="flex items-center justify-center px-3 h-8 me-3 text-sm font-semibold text-[#475467] bg-white hover:text-black ">
                        <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                        </svg>
                        Previous
                    </a>


                    <ul class="hidden md:flex items-center gap-8">
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 text-sm text-[#475467] font-medium bg-white hover:text-[#182230] hover:bg-[#d3deea] hover:rounded-full">1</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 text-sm  text-[#475467] font-medium bg-white hover:text-[#182230] hover:bg-[#d3deea] hover:rounded-full">2</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 text-sm  text-[#475467] font-medium bg-white hover:text-[#182230] hover:bg-[#d3deea] hover:rounded-full">3</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 text-sm  text-[#475467] font-medium bg-white hover:text-[#182230] hover:bg-[#d3deea] hover:rounded-full">...</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 text-sm  text-[#475467] font-medium bg-white hover:text-[#182230] hover:bg-[#d3deea] hover:rounded-full">8</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 text-sm  text-[#475467] font-medium bg-white hover:text-[#182230] hover:bg-[#d3deea] hover:rounded-full">9</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 text-sm  text-[#475467] font-medium bg-white hover:text-[#182230] hover:bg-[#d3deea] hover:rounded-full">10</a>
                        </li>


                    </ul>


                    <a href="#" class="flex items-center justify-center px-3 h-8 me-3 text-sm font-semibold text-[#475467] bg-white hover:text-black dark:hover:bg-gray-700">
                        Next
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            <div className='mt-5 pt-5'>
            <hr className='text-[#EAECF0]' />
            </div>
            </div>
        </>
    )
}
