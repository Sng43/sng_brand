import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const Header = () => {

    const [isOpen,setIsOpen] = useState(false)


    const Links = [
        {name:'services', link:'/'},
        {name:'works', link:'/'},
        {name:'blogs', link:'/'},
        {name:'about', link:'/'},
        {name:'contact', link:'/'},
    ]
    return (
        <header className='bg-dark-800 sticky top-0 z-[20] mx-auto flex w-full p-0 text-gray-400'>
            <div className="sm:w-[90%] flex m-auto w-[94%] items-center justify-between">
        <div className="h-16 w-16">
        <Logo/>
        </div>
        <div className="sm:flex w-[60%]">
            <ul className={`sm:flex sm:justify-between sm:items-center w-full font-oxanium-thin
                ${isOpen ? 'flex': 'hidden'}`}>
                {Links.map((Link) => (
            <li key={Link.name} className="hover:text-white">
                <a href={Link.link}>{Link.name}</a>
            </li>
                ))}

            </ul></div>
        <div className="sm:hidden mr-2">
            <FontAwesomeIcon icon={isOpen? faX: faBars} className='h-7 w-8'
            onClick={() => setIsOpen(!isOpen)}/>
        </div>
                </div> 
        </header>
    );
}

export default Header;
