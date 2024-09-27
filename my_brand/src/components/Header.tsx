import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP)

const Header = () => {

    const [isOpen,setIsOpen] = useState(false)

    const tl  = gsap.timeline()

    useGSAP(()=>{
        tl.from(".logo", {
            opacity: 0,
            duration: 1,
            y:-30
        })

        tl.from("li", {
            opacity: 0,
            duration: 1,
            y:-30,
            stagger: 0.2 
        })
    }, {})

    const Links = [
        {name:'services', link:'/'},
        {name:'works', link:'/'},
        {name:'blogs', link:'/'},
        {name:'about', link:'/'},
        {name:'contact', link:'/'},
    ]
    return (
        <header className='bg-dark-800 sticky top-0 z-[20] mx-auto flex w-full p-0 text-gray-400'>
            <div className="sm:w-[90%] sm:flex m-auto w-[94%] justify-between items-center">
        <div className="flex justify-between items-center sm:h-16 sm:w-16">
        <div className="logo h-16 w-16">
        <Logo/>
        </div>
            <div className="sm:hidden mr-2">
                <FontAwesomeIcon icon={isOpen? faX : faBars} className='h-7 w-8'
                onClick={() => setIsOpen(!isOpen)}/>
            </div>
        </div>
        <div className="sm:flex w-[60%] m-auto sm:m-0">
            <ul className={`sm:flex sm:justify-between sm:items-center w-full font-oxanium-thin text-center leading-[3rem] mt-10 sm:mt-0
                ${isOpen ? 'block h-svh': 'hidden'}`}>
                {Links.map((Link) => (
            <li key={Link.name} className="hover:text-white">
                <a href={Link.link}>{Link.name}</a>
            </li>
                ))}

            </ul></div>
                </div> 
        </header>
    );
}

export default Header;
