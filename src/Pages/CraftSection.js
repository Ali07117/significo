import React, { useEffect } from 'react';
import '../App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/all";
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger)

function CraftSection() {
    useGSAP(()=>{
           
        gsap.from(".cards1",{
            scrollTrigger:{
            trigger:".craft-section",
            scrub:true,
            start:"top 0%",
            end:"bottom 50% ",
            pin:true,
            markers:true
         },
        y:1000,
         width:"60%",
        })
           gsap.to(".craft-section",{
            backgroundColor:"#AEDEE0",
            color:"black",
            scrollTrigger:{
                trigger:".craft-section",
                // scroller:"body",
                scrub:2,
                // markers:true,
                start:"top 0%",
                end:"top 100%",
            }
           
        })   
    })
  return (
    <>
         <div class="craft-section -bg-[red] section w-full px-10 flex justify-between h-[100vh] items-start gap-10 py-10 relative">
        <div class="ltext text-xl w-[40%] -bg-[red] -sticky top-0 left-0">
            <p class="mt-[50px]">Significo is a custom health software developer founded on the belief that technology can transform healthcare to put people first. We put humanity back at the center of healthcare with technology that simplifies complexity, accelerates capacity, and improves outcomes.</p>
            <h1 class="text-6xl mt-[30px] leading-[70px] font-['Pp_Neue_Machina']">Human-Centric Health Software</h1>
            <div class=" w-fit px-10 py-5 mt-[30px] border-[1px] border-[--dcyan]">
                <div class="masker overflow-hidden">
                    <span class="inline-block translate-y-2">Our Solutions</span>
                </div>
            </div>
        </div>
        <div class="cards w-1/2 -h-32 -bg-red-700 flex flex-col items-center gap-[40px]">
            <div class="cards1 -translate-y-[600px] border border-[2px] border-[black] p-[15px] min-h-[150px] w-[80%] -bg-[black]">
                <h2 class="text-2xl  font-semibold">Driven by Purpose</h2>
                <p class="">We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.</p>
            </div>
            <div class="cards1 -translate-y-[600px] border border-[2px] border-[black] p-[15px] min-h-[150px] w-[80%] -bg-[black]">
                <h2 class="text-2xl font-semibold">Driven by Purpose</h2>
                <p>We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.</p>
            </div>
            <div class="cards1 -translate-y-[600px] border border-[2px] border-[black] p-[15px] min-h-[150px] w-[80%] -bg-[black]">
                <h2 class="text-2xl font-semibold">Driven by Purpose</h2>
                <p>We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.</p>
            </div>
            <div class="cards1 -translate-y-[600px] border border-[2px] border-[black] p-[15px] min-h-[150px] w-[80%] -bg-[black]">
                <h2 class="text-2xl font-semibold">Driven by Purpose</h2>
                <p>We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.</p>
            </div>       
        </div>
    </div>
    </>
  );
}

export default CraftSection;
