import React from 'react'
import Dog from "../assets/primary-photo-placeholder-1@2x.png";
import Shroom from "../assets/primary-photo-placeholder@2x.png";
import Robot from "../assets/primary-photo-placeholder-5@2x.png";
import Dogsm from "../assets/secondary-photo-placeholder@2x.png";
import bear from "../assets/secondary-photo-placeholder-1@2x.png";
import Shroomsm1 from "../assets/secondary-photo-placeholder-2@2x.png";
import Shroomsm2 from "../assets/secondary-photo-placeholder-3@2x.png";
import Robotsm1 from "../assets/secondary-photo-placeholder-10@2x.png";
import Robotsm2 from "../assets/secondary-photo-placeholder-11@2x.png";
import foxxs from "../assets/avatar-placeholder@2x.png";
import avatarxs from "../assets/avatar-placeholder-2@2x.png";
import Robotxs from "../assets/avatar-placeholder-54@2x.png";



function Trending() {
  return (
    <div class="lg:mx-20 mt-32">
        <h1 class="txt text-3xl font-mono">Trending Collection</h1>
        <h3 class="txt text-xl mt-2">Checkout Our Weekly Updated Trending Collection.</h3>
        <div class="flex justify-between gap-6 mt-12 "> {/* Cards */}
            <div>
                <a href="">
                    <img class="w-80 animate-scale flex flex-wrap" src={Dog} alt="Dog" />
                </a>
                <div class="flex justify-between gap-3 mt-4 ">
                    <a href="">
                        <img class=" w-24 animate-scale" src={Dogsm} alt="Dog" />
                    </a>

                    <a href="">
                        <img class="w-24 animate-scale" src={bear} alt="Dog" />
                    </a>

                    <a href="">
                        <button class="w-20 h-20 animate-scale bg-[#A259FF] rounded-2xl font-mono txt text-xl">1025+</button>
                    </a>
                </div>
                <p class="txt font-mono text-lg mt-2">Dsgn Animals</p>
                <div class="flex items-center gap-3 mt-2">
                    <a href="">
                        <img class="w-5 animate-scale" src={foxxs} alt="" />
                    </a>
                    <p class="txt text-xs">MrFox</p>
                </div>
            </div>
            <div>
                <a href="">
                    <img class="w-80 animate-scale" src={Shroom} alt="Shroom" />
                </a>

                <div class="flex justify-between gap-3 mt-4 ">
                    <a href="">
                        <img class=" w-24 animate-scale" src={Shroomsm1} alt="Dog" />
                    </a>

                    <a href="">
                        <img class="w-24 animate-scale" src={Shroomsm2} alt="Dog" />
                    </a>

                    <a href="">
                    <button class="w-20 h-20 animate-scale bg-[#A259FF] rounded-2xl font-mono txt text-xl">1025+</button>

                    </a>
                </div>
                <p class="txt font-mono text-lg mt-2">Magic Mushrooms</p>
                <div class="flex items-center gap-3 mt-2">
                    <a href="">
                        <img class="w-5 animate-scale" src={avatarxs} alt="" />
                    </a>
                    <p class="txt text-xs">Shroomie</p>
                </div>
            </div>
            <div>
                <a href="">
                    <img class="w-80 animate-scale" src={Robot} alt="Robot" />
                </a>

                <div class="flex justify-between gap-3 mt-4 ">
                    <a href="">
                        <img class=" w-24 animate-scale" src={Robotsm1} alt="Dog" />
                    </a>

                    <a href="">
                        <img class="w-24 animate-scale" src={Robotsm2} alt="Dog" />
                    </a>

                    <a href="">
                    <button class="w-20 h-20 animate-scale bg-[#A259FF] rounded-2xl font-mono txt text-xl">1025+</button>

                    </a>
                </div>
                <p class="txt font-mono text-lg mt-2">Disco Machines</p>
                <div class="flex items-center gap-3 mt-2">
                    <a href="">
                        <img class="w-5 animate-scale" src={Robotxs} alt="" />
                    </a>
                    <p class="txt text-xs">BeKind2Robots</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trending