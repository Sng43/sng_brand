import Header from '../components/Header';
import About from '../Sections/About';
import Contact from '../Sections/Contact';
import Footer from '../Sections/Footer';
import Hero from '../Sections/Hero';
import Services from '../Sections/Services';
import TechStack from '../Sections/TechStack'
import Work from '../Sections/Work';
import ReactLenis from 'lenis/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomePage = () => {

    // Any element tagged data-reveal fades and rises in as it enters the viewport
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
                gsap.from(el, {
                    y: 48,
                    opacity: 0,
                    duration: 1.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                    },
                });
            });
        });
    }, {});

    return (
    <ReactLenis root>
        <main>
        <Header/>
        <div id='home'>
        <Hero />
        <TechStack/>
        </div>
        <div id='services' className="relative" style={{ zIndex: 1 }}>
        <Services/>
        </div>
        <div id='works' className="relative" style={{ zIndex: 2 }}>
        <Work />
        </div>
        <About />
        <div id='contact'>
        <Contact />
        </div>
        <Footer />
        </main>
    </ReactLenis>
    );
}

export default HomePage;
