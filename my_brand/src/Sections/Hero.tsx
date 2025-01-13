import {useEffect, useRef} from 'react'
import CallToAction from "../components/CallToAction";
import ImageHolder from "../components/ImageHolder";
import Socials from "../components/Socials";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    const hero = useRef<HTMLElement>(null)

    useGSAP(()=>{
        gsap.from(".nom", {
            opacity: 0,
            duration: 1,
            x: -50
        })
        gsap.from(".p-picture",{
            opacity:0,
            duration: 2,
            scale: 0.1
        })
    }, {})

    useEffect(() => {
        gsap.to("#hero_name", {
            y: -200,
            ease: 'none',
            scrollTrigger: {
                trigger: "#hero_name",
                markers: false,
                start: "80 150",
                end: "150 70",
                scrub: 1
            }
        })
    }, []);


    useEffect(() =>{
        gsap.to("#about", {
            scale: 0.7,
            opacity: -0.1,
            ease: "none",
            y: -100, 
            scrollTrigger:{
                trigger: "#about",
                start: "20 150",
                end: "150 1",
                markers: false,
                scrub: true
            }
        })
    },[])

    useEffect(() =>{
        
    },[])

    return (
        <section ref={hero} className="sm:w-[90%] w-[94%] m-auto mt-4">
    <div>
        <h1 id="hero_name"  className='nom sm:absolute sm:top-28 sm:text-[7rem] sm:ml-6 xl:ml-20 sm:mt-8 mt-6 my-4 text-[80px] font-carnage text-shadow text-shadow-x-1 text-shadow-white font-bold tracking-[0.5rem] leading-[60px] text-shadow-blur-10 text-gray-950'><span className="font-gematype">S</span>ENGA <span className="font-gematype">E</span>MMY</h1>
    </div>
    <div id="about" className="sm:flex sm:mt-40 mt-6 opacity-1">
    <CallToAction/>
    <div className="flex">
        <div className="p-picture z-0 sm:h-[420px] hover:z-10 sm:w-80 sm:ml-2 lg:ml-24 h-40 w-40">
        <ImageHolder />  
        </div>
        <Socials />
    </div>
    </div>
        </section>
    );
}

export default Hero;
