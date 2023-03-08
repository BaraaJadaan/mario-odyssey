import React from 'react'
import redhead from "../assets/avatar-placeholder-98@2x.png";
import oldman from "../assets/avatar-placeholder-99@2x.png";
import blackhead from "../assets/avatar-placeholder-100@2x.png";
import asianw from "../assets/avatar-placeholder-101@2x.png";
import weirdo from "../assets/avatar-placeholder-102@2x.png";
import fox from "../assets/avatar-placeholder-1@2x.png";
import avatar from "../assets/avatar-placeholder-103@2x.png";
import terminator from "../assets/avatar-placeholder-104@2x.png";
import robot from "../assets/avatar-placeholder-105@2x.png";
import storm from "../assets/avatar-placeholder-106@2x.png";
import blackw from "../assets/avatar-placeholder-107@2x.png";
import asianm from "../assets/avatar-placeholder-108@2x.png";


function TopCreators() {
    const imgs = [
        {
        name : "Keepitreal",
        img : redhead,
        num : 1
        },
        {
        name : "Keepitreal",
        img : oldman,
        num : 2
        },
        {
        name : "Keepitreal",
        img : blackhead,
        num : 3
        },
        {
        name : "Keepitreal",
        img : asianw,
        num : 4
        },
        {
        name : "Keepitreal",
        img : weirdo,
        num : 5
        },
        {
        name : "Keepitreal",
        img : fox,
        num : 6
        },
        {
        name : "Keepitreal",
        img : avatar,
        num : 7
        },
        {
        name : "Keepitreal",
        img : terminator,
        num : 8
        },
        {
        name : "Keepitreal",
        img : robot,
        num : 9
        },
        {
        name : "Keepitreal",
        img : storm,
        num : 10
        },
        {
        name : "Keepitreal",
        img : blackw,
        num : 11
        },
        {
        name : "Keepitreal",
        img : asianm,
        num : 12
        },
];
  return (
    <div class="mx-20 mt-32">
        <div class="flex justify-between items-center">
            <div>
                <h1 class="txt text-3xl font-mono">Top Creators</h1>
                <h3 class="txt text-xl mt-2">Checkout Top Rated Creators On The Nft Marketplace.</h3>
            </div>
            <div>
                <a href='#' class="animate-scale flex justify-center text-[.8rem] font-bold px-9 text-[#A259FF] border border-[#A259FF] py-3 rounded-2xl mb-5 "> 
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#A259FF" class="h-5 w-5 mr-2" viewBox="0 0 16 16">
                    <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z"/>
                    <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z"/>
                    <path d="M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"/>
                    </svg>
                </span> 
                View Ranking
                </a>
            </div>
        </div>
        <div class="grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-10 mt-12 ">
            {imgs.map((avatar) => (
                <div className='animate-scale bg-[#3B3B3B] py-6 px-14 rounded-2xl relative '>
                    <div className=' text-gray-500 bg-[#2B2B2B] rounded-full absolute w-6 text-center left-5'>{avatar.num}</div>
                    <img class="w-28" src={avatar.img} alt={avatar.img} />
                    <h1 class="txt text-center mt-4 text-xl">{avatar.name}</h1>
                    <p className='text-white text-sm absolute left-9'><span className='text-[#858584]'>Total Sales:</span> 34.53 ETH</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopCreators