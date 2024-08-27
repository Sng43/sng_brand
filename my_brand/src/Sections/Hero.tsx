import CallToAction from "../components/CallToAction";
import ImageHolder from "../components/ImageHolder";
import Socials from "../components/Socials";

const Hero = () => {
    return (
        <section className="w-[94%] m-auto my-4'">
    <div>
        <h1 className='my-4 text-[80px] font-carnage text-dark-800 text-shadow text-shadow-x-1 text-shadow-blur-4 text-shadow-white font-bold tracking-[0.5rem] leading-[60px]'><span className="font-gematype">S</span>ENGA <span className="font-gematype">E</span>MMY</h1>
    </div>
    <CallToAction/>
    <div className="flex">
        <ImageHolder/>  
        <Socials />
    </div>
        </section>
    );
}

export default Hero;
