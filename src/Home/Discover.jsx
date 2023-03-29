import React from 'react'
import space from "../assets/image-placeholder-62@2x.png";
import perspective from "../assets/image-placeholder-63@2x.png";
import spacew from "../assets/image-placeholder-64@2x.png";
import AvatarSmall1 from "../assets/AvatarSmall1.png";
import AvatarSmall2 from "../assets/AvatarSmall2.png";
import AvatarSmall3 from "../assets/AvatarSmall3.png";

function Discover() {
    const data = [
        {
            num : 1,
            img : space,
            name : "Distant Galaxy",
            avatar : AvatarSmall1,
            creator : "MoonDancer",
            price : "1.63 ETH",
            bid : "0.33 wETH"
        },
        {
            num : 2,
            img : perspective,
            name : "Life On Edena",
            avatar : AvatarSmall2,
            creator : "NebulaKid",
            price : "1.63 ETH",
            bid : "0.33 wETH"
        },
        {
            num : 3,
            img : spacew,
            name : "Astrofiction",
            avatar : AvatarSmall3,
            creator : "Spaceone",
            price : "1.63 ETH",
            bid : "0.33 wETH"
        },
    ]
  return (
    <div>
        <div class="flex justify-between items-center mt-32 mx-[9vw]">
            <div>
                <h1 class="txt text-3xl font-mono">Discover More Nfts</h1>
                <h3 class="txt text-xl mt-2">Explore New Trending Nfts</h3>
            </div>
            <div>
                <a href='#' class="animate-scale flex justify-center text-[.8rem] font-bold px-9 text-[#A259FF] border border-[#A259FF] py-3 rounded-2xl mb-5 "> 
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5 mr-4" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
                </span> 
                See All
                </a>
            </div>
        </div>
        {data.map((discover) => (
                <div className='animate-scale relative'>
                    <div className='flex overflow-hidden bg-[#3B3B3B] w-48 rounded-t-2xl'>
                        <div className=' overflow-hidden bg-[#3B3B3B] w-48 rounded-b-2xl pb-5 top-48 absolute z-10 '>
                            <h1 class="txt text-center mt-4 text-xl">{discover.name}</h1>
                        </div>
                        <img class=" w-96 brightness-125 pb-5" src={discover.img} alt={discover.img} />
                    </div> 
                </div>
            ))}
    </div>
  )
}

export default Discover