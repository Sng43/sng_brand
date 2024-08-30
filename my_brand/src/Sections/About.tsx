import Button from "../components/Button";
import ImageHolder from "../components/ImageHolder";

const About = () => {
    return (
        <section className="bg-dark-800 rounded-xl m-auto sm:mt-20 sm:h-[440px] lg:h-[530px] xl:h-[600px]">
            <div className="sm:w-[90%] w-[94%] m-auto sm:pt-8 sm:pb-0 py-4 pb-1">
                <div className="sm:w-72 sm:ml-[376px] lg:ml-[424px]">
            <h1 className="lg:w-[30rem] xl:ml-96 font-antic font-extrabold text-[2.8rem] sm:text-6xl lg:text-8xl tracking-tight text-right leading-[2.8rem]">DESIGNER, DEVELOPER/</h1>
                </div>
                <div className="sm:flex justify-between sm:relative bottom-20 my-4 sm:my-0">
                    <div className="h-80 w-64 sm:h-[340px] sm:w-[276px] m-auto sm:ml-2 xl:h-[400px] xl:w-[300px] lg:ml-10 xl:ml-36 mb-6 sm:mb-0">
                    <ImageHolder />
                    </div>
                     <div className="sm:w-[53%] sm:mt-36 sm:h-[45%] lg:w-[38%] lg:mr-28 xl:mt-52">
                        <p className="text-center sm:text-left font-antic text-gray-400 hover:text-white text-lg xl:text-xl">
                        When I'm not immersed in web development and design, you can find me sharing insights about my freelance journey on YouTube, bouldering, playing 
                        </p>
                        <div className="m-auto my-5 sm:mb-0 flex sm:block justify-center items-center">
                        <Button/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
