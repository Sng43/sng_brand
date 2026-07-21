import { useRef } from 'react'
import CallToAction from "../components/CallToAction";
import ImageHolder from "../components/ImageHolder";
import Socials from "../components/Socials";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Hero = () => {

    const hero = useRef<HTMLElement>(null)

    // Entrance: the name rises word-by-word, then portrait and CTA settle in
    useGSAP(() => {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
            .from(".hero-word", { yPercent: 45, opacity: 0, duration: 1, stagger: 0.15 })
            .from(".p-picture", { opacity: 0, scale: 0.9, duration: 1.2 }, "-=0.7")
            .from(".call", { opacity: 0, y: 28, duration: 0.9 }, "-=1")
    }, { scope: hero })

    // Scroll: the name drifts up a touch faster than the page. Well-formed trigger
    // (starts at 0 when #home meets the top) so it never fires early or hides content.
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 640px) and (prefers-reduced-motion: no-preference)", () => {
            gsap.to("#hero_name", {
                yPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: "#home",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });
    }, {})

    return (
        <section ref={hero} className="relative sm:w-[90%] w-[94%] m-auto pt-6 sm:pt-12">
            <h1
                id="hero_name"
                className="nom font-carnage font-bold text-gray-950 text-shadow text-shadow-x-1 text-shadow-white text-shadow-blur-10 tracking-[0.25rem] sm:tracking-[0.5rem] text-[64px] leading-none sm:text-[5.5rem] lg:text-[7rem] xl:text-[8rem]"
            >
                <span className="hero-word inline-block"><span className="font-gematype">S</span>ENGA</span>{' '}
                <span className="hero-word inline-block"><span className="font-gematype">E</span>MMY</span>
            </h1>

            <div id="about" className="relative z-10 sm:flex sm:items-center justify-between mt-10 sm:mt-12">
                <CallToAction />
                <div className="flex shrink-0">
                    <div className="p-picture sm:h-[420px] sm:w-80 sm:ml-2 lg:ml-16 h-40 w-40">
                        <ImageHolder />
                    </div>
                    <Socials />
                </div>
            </div>
        </section>
    );
}

export default Hero;
