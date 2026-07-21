import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Links = [
    { name: 'services', link: '#services' },
    { name: 'works', link: '#works' },
    { name: 'about', link: '#about' },
    { name: 'contact', link: '#contact' },
]

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const headerRef = useRef<HTMLElement>(null)
    const menuRef = useRef<HTMLDivElement>(null)

    // Entrance
    useGSAP(() => {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
            .from(".logo", { opacity: 0, duration: 0.8, y: -24 })
            .from(".nav-item", { opacity: 0, duration: 0.6, y: -16, stagger: 0.08 }, "-=0.4")
    }, {})

    // Slide the bar away when scrolling down, bring it back on scroll up
    useGSAP(() => {
        const showAnim = gsap.from(headerRef.current, {
            yPercent: -100,
            paused: true,
            duration: 0.35,
            ease: 'power2.out',
        }).progress(1);

        ScrollTrigger.create({
            start: 'top top',
            end: 'max',
            onUpdate: (self) => {
                if (self.scroll() < 120 || self.direction === -1) {
                    showAnim.play();
                } else {
                    showAnim.reverse();
                }
            },
        });
    }, {})

    // Staggered reveal of the full-screen mobile menu
    useGSAP(() => {
        if (!menuRef.current) return;
        if (isOpen) {
            gsap.timeline()
                .fromTo(menuRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' })
                .fromTo(".m-link", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power3.out' }, "-=0.1")
        }
    }, { dependencies: [isOpen] })

    // Freeze the page behind the open menu
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen])

    return (
        <>
        <header ref={headerRef} className='sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-md text-gray-400'>
            <div className="sm:w-[90%] w-[94%] m-auto flex items-center justify-between">
                <a href="#home" className="logo block h-14 w-14 sm:h-16 sm:w-16 transition-transform duration-300 hover:scale-95" aria-label="Home">
                    <Logo />
                </a>

                {/* Desktop nav */}
                <nav className="hidden sm:block" aria-label="Primary">
                    <ul className="flex items-center gap-8 lg:gap-12 font-oxanium text-sm tracking-[0.2em] uppercase">
                        {Links.map((item, i) => (
                            <li key={item.name} className="nav-item">
                                <a href={item.link} className="link-sweep inline-flex items-baseline gap-1.5 transition-colors duration-300 hover:text-white">
                                    <span className="text-[10px] text-gray-600">0{i + 1}</span>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item">
                            <a href="mailto:daemmyoff1cial@gmail.com"
                                className="rounded-full border border-white/20 px-5 py-2 text-white transition-all duration-300 hover:bg-white hover:text-black">
                                let's talk
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile toggle */}
                <button
                    className="sm:hidden relative z-50 p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    <FontAwesomeIcon icon={isOpen ? faX : faBars} className='h-6 w-6' />
                </button>
            </div>
        </header>

        {/* Full-screen mobile menu — sibling of the header so the header's
            transform doesn't hijack this element's fixed positioning */}
        {isOpen && (
            <div ref={menuRef} className="sm:hidden fixed inset-0 z-40 flex flex-col justify-center bg-black px-8">
                <nav aria-label="Mobile">
                    <ul className="space-y-2">
                        {Links.map((item, i) => (
                            <li key={item.name} className="overflow-hidden">
                                <a
                                    href={item.link}
                                    onClick={() => setIsOpen(false)}
                                    className="m-link flex items-baseline gap-4 py-2 font-antic text-5xl uppercase tracking-tight text-white"
                                >
                                    <span className="font-oxanium text-xs text-gray-600">0{i + 1}</span>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="mailto:daemmyoff1cial@gmail.com"
                    onClick={() => setIsOpen(false)}
                    className="m-link mt-12 font-oxanium text-sm tracking-[0.25em] uppercase text-gray-400">
                    daemmyoff1cial@gmail.com
                </a>
            </div>
        )}
        </>
    );
}

export default Header;
