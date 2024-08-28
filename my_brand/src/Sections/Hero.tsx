import CallToAction from "../components/CallToAction";
import ImageHolder from "../components/ImageHolder";
import Socials from "../components/Socials";

const Hero = () => {
    return (
        <section className="sm:w-[90%] w-[94%] m-auto my-4'">
    <div>
        <h1 className='sm:absolute sm:top-28 sm:text-[7rem] sm:ml-20 sm:mt-20 my-4 text-[80px] font-carnage text-dark-800 text-shadow text-shadow-x-1 text-shadow-blur-4 text-shadow-white font-bold tracking-[0.5rem] leading-[60px] hover:text-shadow-blur-10 hover:text-gray-950'><span className="font-gematype">S</span>ENGA <span className="font-gematype">E</span>MMY</h1>
    </div>
    <div className="sm:flex sm:mt-40">
    <CallToAction/>
    <div className="flex">
        <ImageHolder/>  
        <Socials />
    </div>
    </div>
        </section>
    );
}

export default Hero;
