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
        <div className="call sm:mt-20 lg:mt-44 my-8 lg:w-[45%] sm:w-[70%]">
        <p className="sm:leading-8 lg:leading-10 sm:tracking lg:text-2xl lg:mb-12 mb-4 font-antic text-xl tracking-wider text-gray-200">Fullstack developer helping startups and enteprises globally to gain an edge! Your's next...</p>
        <Button />
        </div>
    );
}

export default CallToAction;
