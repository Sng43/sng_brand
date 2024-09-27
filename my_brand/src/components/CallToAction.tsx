import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
 
gsap.registerPlugin(useGSAP)

const CallToAction = () => {

    useGSAP(()=>{
        gsap.from(".call p", {
            opacity: 0,
            y: 30,
            duration: 3
        })
        gsap.from(".call button", {
            opacity: 0,
            y: -30,
            duration: 3
        })
    }, {})

    return (
        <div className="call sm:mt-20 lg:mt-44 my-5 sm:w-[45%]">
        <p className="sm:leading-8 lg:leading-10 sm:tracking lg:text-2xl lg:mb-12 mb-4 font-antic text-xl tracking-wider text-gray-200">Web designer & developer empowering startups globally to gain an edge.</p>
        <Button />
        </div>
    );
}

export default CallToAction;
