
import React, { useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/all";
import { useRef } from 'react';
import CraftSection from './Pages/CraftSection';
import ReelSection from './Pages/ReelSection';
import Footer from './Pages/Footer';
import LocomotiveScroll from 'locomotive-scroll';


gsap.registerPlugin(ScrollTrigger)

function App() {
    const locomotiveScroll = new LocomotiveScroll();

    const gref = useRef()
    const vref = useRef()

    useEffect(() => {
        var elem = document.querySelectorAll(".element")
elem.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
        
        gsap.to(this.querySelector(".picture"),{opacity: 1,x:gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)})
        
    })

    el.addEventListener("mouseleave",function(dets){
        gsap.to(this.querySelector(".picture"),{opacity: 0,})
    })
})

    });

    useGSAP(()=>{
        gsap.set(".slidesline",{scale:10})
        var tl = gsap.timeline({
            
        scrollTrigger:{
            trigger:".home",
            // scroller:"body",
            scrub:2,
            // markers:true,
            start:"top top",
            end:"bottom top",
            pin:true
         }
        
        })
        
        tl.from(".viideo",{
         '--clip': "100%",         
        }, 's')
        tl.to(".slidesline",{
            scale: 1,
           }, 's')
        tl.to(".leeft",{
            xPercent:-10,
           },'b')
        tl.to(".rgt",{
            xPercent:10,            
           },'b')
        //    ----------craft--------
        gsap.from(".cards1",{
            scrollTrigger:{
            trigger:".craft-section",
            scrub:true,
            start:"top 0%",
            end:"top -150% ",
            pin:true,
            // markers:true
         },
        y:2000,
        //  ease:Power4,
        //  width:"60%",
        })
           gsap.to(".craft-section",{
            backgroundColor:"#AEDEE0",
            color:"black",
            scrollTrigger:{
                trigger:".craft-section",
                // scroller:"body",
                scrub:2,
                // markers:true,
                // ease:Power4,
                start:"top 0%",
                end:"top -50%",
            }
           
        }) 
        //    ----------craft--------
        // ----------slide-----------
        gsap.to(".slide",{
            scrollTrigger:{
            trigger:".cont",
            scrub:3,
            start:"top 0%",
            end:"top -200% ",
            pin:true
         },
        transform: "translateX(-300%)",
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
        gsap.from(".reel-heading",{
            x:-500,
            y:-500,
            duration:2,
            scrollTrigger:{
                trigger:".slide",
                // markers:true
            }
        })
            
        // ----------slide-----------
        // ---------footer-----------
        gsap.from(".ourteam",{
    
            opacity:0,
            y: 100,
            // duration:2,
            scrollTrigger:{
                trigger:".ourteam",
                start:"top 50%",
                scrub:true
        
            },
            
        })
        
        gsap.from(".single",{
            y:120,
            stagger:0.1,
            scrollTrigger:{
                trigger:".single",
                scrub:3,
                // markers:true,
                start:"top 90%",
                end:"top 75%"
            }
        
        
        })
        // ---------footer-----------
        
    })

  return (
    <>
      <div classNameName="main w-full max-w-[1600px] overflow-hidden " >
      <div className="circle-animation" >
      <div className="home section w-full h-screen relative bg-[black] text-[white]" >
            <div className="bottom-text absolute bottom-[5%] z-[4] left-[4%] w-52 ">
                <h1>We build big ideas. Software. Apps. Tools. For real people. Real lives.</h1>
            </div>
        <div style={{ "--clip": "100%" }} className=" clip -hidden viideo w-full h-screen absolute top-0 left-0 z-[3] bg-black overflow-hidden" >
        <video 
      className="absolute w-full h-[100vh] object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
      src="https://cdn.significo.com/videos/significo-main-hero.mp4" 
      autoPlay 
      loop 
      muted
    >
      Your browser does not support the video tag.
    </video>
        </div>
        <div className="marqueecontainer w-full  h-[100vh] relative overflow-x-hidden">
            <div className="heading absolute top-[7%] left-1/2 -translate-x-1/2">
                <h1 className="text-2xl font-regular w-[370px] text-center">We craft healthcare technology that is more human:</h1>
            </div>
            <div className=" leading-[60px] mb-[20px] slidesline absolute mt-[40px] top-1/2 scale-[1] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] -h-40 -bg-red-500">
                <div className=" section row leeft -translate-x-1/2 w-full  py-1 -bg-red-500 flex items-center gap-3 whitespace-nowrap">
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                    </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                    </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>             
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>             
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                        </div>
                    </div>    
                </div>
                <div className=" section row rgt -translate-x-3/4 w-full -ml-[371px]  py-1 -bg-red-500 flex items-center gap-3 whitespace-nowrap">
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                    </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                    </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>             
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>             
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                        </div>
                    </div>    
                </div>
                <div className=" section row leeft -translate-x-2/3 w-full  py-1 -bg-red-500 flex items-center gap-3 whitespace-nowrap">
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                    </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                    </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>             
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>             
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                        </div>
                    </div>    
                </div>
                <div className=" section row rgt -translate-x-3/4 w-full  py-1 -bg-red-500 flex items-center gap-3 whitespace-nowrap">
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                    </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                    </div>
                </div>
                <div className="elem flex items-center gap-5">
                    <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                    <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                        <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                    </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>             
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">empathetic</h1>             
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">useful</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt=""/>
                        </div>
                    </div>
                    <div className="elem flex items-center gap-5">
                        <h1 className=" font-semibold font-['Pp_Neue_Machina'] text-[60px]">intuitive</h1>
                        <div className="imgdiv w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full bg-yellow-500">
                            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt=""/>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
    </div>
    {/* -----------------Craft Section------------------- */}
    <div className='' >
    {/* -------------craft--------------- */}
    <div class="craft-section  -bg-[red] bg-[black] text-[white] section w-full px-10 flex -flex-col-reverse justify-between min-h-[100vh] items-start gap-10 py-10 relative">
        <div class="ltext text-xl w-[100%] -bg-[red] -sticky top-0 left-0">
            <p class="mt-[50px]">Significo is a custom health software developer founded on the belief that technology can transform healthcare to put people first. We put humanity back at the center of healthcare with technology that simplifies complexity, accelerates capacity, and improves outcomes.</p>
            <h1 class="text-6xl mt-[30px] leading-[70px] font-['Pp_Neue_Machina']">Human-Centric Health Software</h1>
            <div class=" w-fit px-10 py-5 mt-[30px] border-[1px] border-[--dcyan]">
                <div class="masker overflow-hidden">
                    <span class="inline-block ">Our Solutions</span>
                </div>
            </div>
        </div>
        <div class="cards w-[100%] -bg-red-700 flex flex-col items-center gap-[40px]">
            <div class="cards1 --translate-y-[2000px] border border-[2px] border-[black] p-[15px] min-h-[150px] w-[100%] text-[#fff] bg-[black]">
                <h2 class="text-2xl  font-semibold">Driven by Purpose</h2>
                <p class="">We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.</p>
            </div>
            <div class="cards1 --translate-y-[2000px] border border-[2px] border-[black] p-[15px] min-h-[150px] w-[100%] text-[#fff] bg-[black]">
                <h2 class="text-2xl font-semibold">Driven by Purpose</h2>
                <p>We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.</p>
            </div>
            <div class="cards1 --translate-y-[2000px] border border-[2px] border-[black] p-[15px] min-h-[150px] w-[100%] text-[#fff] bg-[black]">
                <h2 class="text-2xl font-semibold">Driven by Purpose</h2>
                <p>We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.</p>
            </div>
            <div class="cards1 --translate-y-[2000px] border border-[2px] border-[black] p-[15px] min-h-[150px] w-[100%] text-[#fff] bg-[black]">
                <h2 class="text-2xl font-semibold">Driven by Purpose</h2>
                <p>We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.</p>
            </div>       
        </div>
    </div>
    {/* -------------craft--------------- */}
    {/* -----------reel--------------- */}
    <div className="real section w-full mt-[0px] bg-[black] text-[white]">
        <div className="cont h-[100vh]  w-full  " >
            <div className="slidess -bg-[blue] overflow-hidden -sticky top-0 left-0 flex gap-[0px] w-full h-[100vh] ">
                <div className="z-[101] slide z-[9999] w-full flex items-center justify-center relative h-screen flex-shrink-0 ">
                    <div className="text font-['Pp_Neue_Machina']">
                        <h1 className="text-7xl reel-1-heading reel-heading">Real Talk,</h1>
                        <h1 className="text-7xl reel-1-heading reel-heading">Real Impact</h1>
                    </div>
                    <div className=" image reel-1-img absolute top-1/2 overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full right-0 w-[20rem] h-[20rem] bg-red-600">
                        <img className="w-full reel-page-1-img h-full object-cover " src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                    </div>
                </div>
                <div className="z-[100] slide w-full h-screen flex-shrink-0 flex justify-center items-center ">
                    <div className="-z-[999999] w-[60%] text-center font-['Pp_Neue_Machina'] relative flex flex-col items-center">
                        <h3 className="w-1/3 text-left font-semibold leading-8 tracking-tight text-[1.5rem] -translate-y-2/3 -translate-x-1/2 reel-page-2-left-text absolute top-0 left-0">We're on a mission to impact as many lives as possible and build a better company while we do it. Here's our progress.</h3>
                        <h1 className="font-semibold text-[8rem] reel-2-heading leading-none z-[10]  text-white">20.4M</h1>
                        <h3 className="text-4xl -w-[700px] leading-none reel-2-heading-para tracking-tight z-[10]">Real people — real lives — we have built products and solutions for.</h3>
                        <div className="-z-[999999] image absolute top-1/2 overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full right-[-120px] top-[0px] w-[20rem] h-[20rem] bg-red-600">
                            <img className="-z-[999999] w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ee2e5e80fe8ace7a1ff3_5.jpg" alt=""/>
                        </div>
                        <div className="image absolute left-[0px] top-[-400px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full  w-[20rem] h-[20rem] bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9edd08cc0ac13ed6995bd_4.jpg" alt=""/>
                        </div>
                        <div className="image absolute left-[0px] bottom-[-650px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full  w-[20rem] h-[20rem] bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ee19cb5203ee12c21ba3_3.jpg" alt=""/>
                        </div>
                        <div className="image absolute  left-[250px] bottom-[-200px] overflow-hidden -translate-y-1/2 translate-x-1/2 rounded-full  w-[10rem] h-[10rem] bg-red-600">
                            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9edafe67e88c12db2d78b_2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="z-[99] slide w-full h-screen flex-shrink-0 flex justify-center relative items-center  -bg-[red]">
                    <h3 className=" reel-page-3-left-text w-1/3 text-left font-semibold leading-8 tracking-tight text-[1.5rem] w-[340px]  absolute top-[20px] left-0">Our team is global and diverse, because our individual experiences make us stronger.</h3>
                    <div className="w-[60%] text-center font-['Pp_Neue_Machina'] relative flex flex-col items-center">
                        <h1 className="font-semibold text-[10rem] z-[20] leading-none reel-3-heading  text-white">49%</h1>
                        <h3 className="text-6xl -w-[700px] leading-none z-[20] reel-3-heading-para tracking-tight">Expert Women in Tech.</h3>
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
                <div className="z-[98] slide w-full h-screen flex-shrink-0 flex justify-center items-center ">
                    <div className="w-[60%] text-center font-['Pp_Neue_Machina'] relative flex flex-col items-center">
                        {/* <!-- <h3 className="w-1/3 text-left font-semibold leading-8 tracking-tight text-[1.5rem] -translate-y-2/3 -translate-x-1/2 absolute top-0 left-0">We're on a mission to impact as many lives as possible and build a better company while we do it. Here's our progress.</h3> --> */}
                        <h1 className="font-semibold text-[8rem] leading-none reel-4-heading text-white">13</h1>
                        <h3 className="text-4xl -w-[700px] leading-none reel-4-heading-para tracking-tight">Nationalities Represented on Our Team.</h3>
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
    {/* -----------reel--------------- */}
    {/* -----------hove----------- */}
    <div className="hover-section overflow-x-hidden min-h-[100vh] w-[100%] bg-[#000] text-[white] px-[40px]">
        <div className="text-center pt-[40px] mb-[80px] flex justify-center">
        <h1 className=" w-[500px] font-['Pp_Neue_Machina'] text-8xl ourteam ">Our Team</h1>
        </div>
        <div className="element hover:bg-[#2544EE] hover:text-[#fff] duration-500 flex h-[150px] border-b border-b-[2px] border-b-[black] relative">
            <div className="picture opacity-[0] w-[17rem] h-[17rem] overflow-hidden -translate-x-1/2  absolute top-[-50%] left-[50%] rounded-full -bg-yellow-500">
                <img className="h-full w-full object-cover" src="/assets/rick.png" alt=""/>
            </div>
            <div className="e-left w-[50%] h-[100%] flex items-center gap-[10px] px-[30px]">
                <h1 className="e-left-text font-['Pp_Neue_Machina'] text-6xl">01</h1>
                <h1 className="e-left-text font-['Pp_Neue_Machina'] text-nowrap text-6xl">Dr. Rick McCartney</h1>
            </div>
            <div className="e-right w-[50%] h-[100%] flex items-center justify-end px-[30px]">
                <p className="text-2xl ceo">CEO</p>
            </div>
        </div>
        <div className="element hover:bg-[blue] hover:text-[#fff] duration-500 flex h-[150px] border-b border-b-[2px] border-b-[black] relative">
            <div className="picture opacity-[0] w-[17rem] h-[17rem] overflow-hidden -translate-x-1/2  absolute top-[-50%] left-[50%] rounded-full -bg-yellow-500">
                <img className="h-full w-full object-cover" src="/assets/chris.png" alt=""/>
            </div>
            <div className="e-left w-[50%] h-[100%] flex items-center gap-[10px] px-[30px]">
                <h1 className="e-left-text font-['Pp_Neue_Machina'] text-6xl">02</h1>
                <h1 className="e-left-text font-['Pp_Neue_Machina'] text-nowrap text-6xl">Chris Koha</h1>
            </div>
            <div className="e-right w-[50%] h-[100%] flex items-center justify-end px-[30px]">
                <p className="text-2xl ceo">COO</p>
            </div>
        </div>
        <div className="element hover:bg-[blue] hover:text-[#fff] duration-500 flex h-[150px] border-b border-b-[2px] border-b-[black] relative">
            <div className="picture opacity-[0] w-[17rem] h-[17rem] overflow-hidden -translate-x-1/2  absolute top-[-50%] left-[50%] rounded-full -bg-yellow-500">
                <img className="h-full w-full object-cover" src="/assets/nieto.png" alt=""/>
            </div>
            <div className="e-left w-[50%] h-[100%] flex items-center gap-[10px] px-[30px]">
                <h1 className="e-left-text font-['Pp_Neue_Machina'] text-6xl">03</h1>
                <h1 className="e-left-text font-['Pp_Neue_Machina'] text-nowrap text-6xl">Caroline Nieto</h1>
            </div>
            <div className="e-right w-[50%] h-[100%] flex items-center justify-end px-[30px]">
                <p className="text-2xl ceo">CPO</p>
            </div>
        </div>
        <div className="element hover:bg-[blue] hover:text-[#fff] duration-500 flex h-[150px] border-b border-b-[2px] border-b-[black] relative">
            <div className="picture opacity-[0] z-[10] w-[17rem] h-[17rem] overflow-hidden -translate-x-1/2  absolute top-[-50%] left-[50%] rounded-full -bg-yellow-500">
                <img className="h-full w-full object-cover" src="/assets/victor.png" alt=""/>
            </div>
            <div className="e-left w-[50%] h-[100%] flex items-center gap-[10px] px-[30px]">
                <h1 className="e-left-text font-['Pp_Neue_Machina'] text-6xl">04</h1>
                <h1 className="e-left-text font-['Pp_Neue_Machina'] text-nowrap text-6xl">Victor Albertos</h1>
            </div>
            <div className="e-right w-[50%] h-[100%] flex items-center justify-end px-[30px]">
                <p className="text-2xl ceo">CTO</p>
            </div>
        </div>
    </div>
    {/* -----------hove----------- */}
    {/* ---------------footer-------------- */}
    <div className="footer min-h-[100vh] px-[40px] bg-[black] relative overflow-hidden flex justify-between items-center">
    <span className=' footer-direction flex -flex-col justify-between w-[100%] gap-[50px] '>
        <div className="text-white font-['Pp_Neue_Machina'] overflow-hidden">
            <h4 className="footer-center text-[30px]">Home</h4>
            <h4 className="footer-center text-[30px]">Solution</h4>
            <h4 className="footer-center text-[30px]">About</h4>
            <h4 className="footer-center text-[30px]">Team</h4>
        </div>
        <div className='overflow-hidden form-box'>
            <p className=" footer-center text-white font-['Pp_Neue_Machina'] text-[30px] w-[345px]">Join our mailing list for
                the latest updates.</p>
        <div className=" footer-form flex justify-center gap-[20px] --translate-y-1/2">
            <input className="footer-form-input  h-[60px] w-[350px] px-[15px]" type="email" name="" id="" placeholder="Enter your emial address..."/>
            <button className="footer-form-button h-[60px] px-[40px] text-[18px] bg-[#F5F19C] font-semibold">Subscribe</button>
        </div>
    </div>
        <div className="text-white font-['Pp_Neue_Machina'] overflow-hidden">
            <h4 className="footer-center text-[30px]">Newsroom</h4>
            <h4 className="footer-center text-[30px]">Insights</h4>
            <h4 className="footer-center text-[30px]">Resources</h4>
            <h4 className="footer-center text-[30px]">Contact</h4>
            <h4 className="footer-center text-[30px]">Careers</h4>
        </div>
        </span>
</div>
 <div className="w-[100%] h-[200px] overflow-hidden text-center -absolute flex justify-center -bottom-[-30%] bg-[black]">
        <h1 className="text-[white] font-['Pp_Neue_Machina'] text-[19rem] flex">
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">S</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">i</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">g</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">n</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">i</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">f</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">i</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">c</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">o</p>
        </h1>
    </div>
<div className="footer-bottom h-[120px] w-[100%] flex items-center justify-between px-[40px] bg-[black] border-t border-t-[2px] border-t-[white]">
    <p className="text-[white] footer-bottom-links">Privacy Policy</p>
    <p className="text-[white] footer-bottom-links">© 2024 Significo. All rights reserved.</p>
    <p className="text-[white] footer-bottom-links">Privacy Policy</p>
    </div>
    {/* ---------------footer-------------- */}
   {/* <CraftSection/> */}
   {/* <ReelSection/> */}
   {/* <Footer/> */}
    </div>
    {/* -----------------Craft Section------------------- */}
      </div>
    </>
  );
}

export default App;

