import Button from "../components/Button";
import ImageHolder from "../components/ImageHolder";

const About = () => {
    return (
        <section className="bg-dark-800 rounded-xl m-auto mt-10 sm:mt-20 overflow-hidden">
            <div className="sm:w-[90%] w-[94%] m-auto py-10 sm:py-16">
                <h1 data-reveal className="font-antic font-extrabold text-[2.8rem] sm:text-6xl lg:text-8xl tracking-tight text-right leading-[2.8rem] sm:leading-none">
                    ENGINEER,<br />DEVELOPER/
                </h1>
                <div className="sm:flex justify-between items-center gap-10 mt-10 sm:mt-16">
                    <div data-reveal className="h-80 w-64 sm:h-[340px] sm:w-[276px] xl:h-[400px] xl:w-[300px] m-auto sm:m-0 lg:ml-10 xl:ml-24 mb-8 sm:mb-0 shrink-0">
                        <ImageHolder />
                    </div>
                    <div data-reveal className="sm:w-[53%] lg:w-[42%] lg:mr-16">
                        <p className="text-center sm:text-left font-antic text-gray-400 transition-colors duration-300 hover:text-white text-lg xl:text-xl leading-relaxed sm:mb-10">
                            Driven by a passion for design and development, I bring projects to life from concept to launch. I ensure a smooth journey that delivers lasting value to your business and the digital landscape.
                        </p>
                        <div className="m-auto my-6 sm:my-0 flex sm:block justify-center items-center">
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
