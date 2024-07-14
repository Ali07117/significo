import React, { useEffect } from 'react';
import '../App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/all";
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger)


function ReelSection() {
    useGSAP(()=>{
        
        gsap.to(".slide",{
            scrollTrigger:{
            trigger:".cont",
            scrub:3,
            start:"top -100%",
            // end:"top -800% ",
            pin:true
         },
        transform: "translateX(-300%)",
        //  ease:Power4,
         duration:2,
        //   backgroundColor:"blue",
        
        })
        
        gsap.to(".slide",{
            scrollTrigger:{
                trigger:".cont",
                scrub:2,
                start:"top 0%",
                end:"top 20%",
            },
            backgroundColor:"#EF9D71",
            duration:2,
            // ease:Power1,
        })
            
    })
  return (
    <>
        <div className="real section w-full mt-[0px]">
        <div className="cont h-[100vh]  w-full  " >
            <div className="slidess -bg-[blue] overflow-hidden -sticky top-0 left-0 flex -gap-10 w-full h-[100vh] ">
                <div className="slide z-[5] w-full flex items-center justify-center relative h-screen flex-shrink-0 ">
                    <div className="text font-['Pp_Neue_Machina']">
                        <h1 className="text-7xl">Real Talk,</h1>
                        <h1 className="text-7xl">Real Impact</h1>
                    </div>
                    <div className="image absolute top-1/2 overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full right-0 w-[20rem] h-[20rem] bg-red-600">
                        <img className="w-full h-full object-cover " src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                    </div>
                </div>
                <div className="slide w-full h-screen flex-shrink-0 flex justify-center items-center ">
                    <div className="w-[60%] text-center font-['Pp_Neue_Machina'] relative flex flex-col items-center">
                        <h3 className="w-1/3 text-left font-semibold leading-8 tracking-tight text-[1.5rem] -translate-y-2/3 -translate-x-1/2 absolute top-0 left-0">We're on a mission to impact as many lives as possible and build a better company while we do it. Here's our progress.</h3>
                        <h1 className="font-semibold text-[8rem] leading-none  text-white">20.4M</h1>
                        <h3 className="text-4xl w-[700px] leading-none tracking-tight">Real people — real lives — we have built products and solutions for.</h3>
                        <div className="image absolute top-1/2 overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full right-[-120px] w-[20rem] h-[20rem] bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ee2e5e80fe8ace7a1ff3_5.jpg" alt=""/>
                        </div>
                        <div className="image absolute left-[0px] top-[-400px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full  w-[20rem] h-[20rem] bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9edd08cc0ac13ed6995bd_4.jpg" alt=""/>
                        </div>
                        <div className="image absolute left-[0px] bottom-[-650px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full  w-[20rem] h-[20rem] bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ee19cb5203ee12c21ba3_3.jpg" alt=""/>
                        </div>
                        <div className="image absolute left-[-200px] bottom-[-200px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full  w-[10rem] h-[10rem] bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9edafe67e88c12db2d78b_2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="slide w-full h-screen flex-shrink-0 flex justify-center relative items-center  -bg-[red]">
                    <h3 className="w-1/3 text-left font-semibold leading-8 tracking-tight text-[1.5rem] w-[340px]  absolute top-[20px] left-0">Our team is global and diverse, because our individual experiences make us stronger.</h3>
                    <div className="w-[60%] text-center font-['Pp_Neue_Machina'] relative flex flex-col items-center">
                        <h1 className="font-semibold text-[10rem] leading-none  text-white">49%</h1>
                        <h3 className="text-6xl w-[700px] leading-none tracking-tight">Expert Women in Tech.</h3>
                        <div className="image absolute top-1/2 overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full right-[-200px] w-[20rem] h-[20rem] -bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1ba6eb9637155282b42f_Lightning.png" alt=""/>
                        </div>
                        <div className="image absolute left-[0px] top-[-310px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full  w-[20rem] h-[20rem] -bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b924ee31caf14d64b2a_TreeStructure.png" alt=""/>
                        </div>
                        <div className="image absolute left-[0px] bottom-[-550px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full  w-[20rem] h-[20rem] -bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b841fcd9f50115dbe9c_RocketLaunch.png" alt=""/>
                        </div>
                        
                    </div>
                </div>
                <div className="slide w-full h-screen flex-shrink-0 flex justify-center items-center ">
                    <div className="w-[60%] text-center font-['Pp_Neue_Machina'] relative flex flex-col items-center">
                        {/* <!-- <h3 className="w-1/3 text-left font-semibold leading-8 tracking-tight text-[1.5rem] -translate-y-2/3 -translate-x-1/2 absolute top-0 left-0">We're on a mission to impact as many lives as possible and build a better company while we do it. Here's our progress.</h3> --> */}
                        <h1 className="font-semibold text-[8rem] leading-none  text-white">13</h1>
                        <h3 className="text-4xl w-[700px] leading-none tracking-tight">Nationalities Represented on Our Team.</h3>
                        <div className="image absolute top-[-220px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full right-[-220px] w-[26rem] h-[26rem] bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9efa87b272d53118849fa_9.jpg" alt=""/>
                        </div>
                        <div className="image absolute left-[-120px] top-[-350px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full  w-[12rem] h-[12rem] bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ef82bb0daca6843ce305_7.jpg" alt=""/>
                        </div>
                        <div className="image absolute left-[-350px] bottom-[-750px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full  w-[25rem] h-[25rem] bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ef723a7cfee7941b52f3_6.jpg" alt=""/>
                        </div>
                        <div className="image absolute left-[550px] bottom-[-300px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full  w-[7rem] h-[7rem] bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ef9463d57ead8406a444_8.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                
                {/* <!-- <div className="slide w-[100%] h-screen flex-shrink-0  bg-yellow-500">
                    s
                </div> --> */}
            </div>
        </div>
    </div>
    </>
  );
}

export default ReelSection;
