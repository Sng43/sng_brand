import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useEffect} from 'react'


gsap.registerPlugin(ScrollTrigger)


const Work = () => {

    useEffect(()=>{
        gsap.to("#work", {
            y: -550,
            scrollTrigger: {
                trigger: "#work",
                start: "top 700",
                markers: false,
                scrub: true
            }
        })
    }, [])

    useEffect(()=>{
        gsap.to("#title_work", {
            y: -160,
            scrollTrigger: {
                trigger: "#title_work",
                start: "top 500",
                end:"top 300",
                markers: false,
                scrub: true
            }
        })
    }, [])

    return (
        <section className="w-[94%] sm:w-[90%] m-auto">
            <h1  id='title_work' className="font-antic font-extrabold text-[2.8rem] sm:text-6xl lg:text-8xl tracking-tight mb-40 lg:mb-40">MY WORKS/</h1>
            <div id='work' className="my-16 sm:flex justify-between items-center sm:mt-32">
                <div className="sm:w-96 lg:w-[480px] xl:w-[700px] bg-gray-400 mb-8">
                    <img src="/crafters.png" alt="crafters" />
                </div>
                <div className="sm:w-[40%]">
                <h3 className="mb-4 font-antic text-2xl xl:text-4xl tracking-widest">ATLP e-commerce</h3>
                <p className="font-antic text-gray-400 hover:text-white text-md lg:text-lg xl:text-xl mb-4 lg:mb-6">This web app was crafted with Reactjs for the fronend, Express and Nodejs for the backend, I worked on both ends mainly on the chart items.</p>
                <a href="https://demo-fn-19-07--crafter-shop.netlify.app/" className="lg:text-lg xl:text-xl lg:px-6 mt-4 border py-1 px-4 rounded-full hover:text-black hover:bg-white text-black bg-white sm:text-white sm:bg-black">
                Visit site
                </a>
                </div>
            </div>
            <div id='work' className="my-16 sm:flex justify-between items-center flex-row-reverse sm:mt-32">
                <div className="sm:w-96 lg:w-[480px] xl:w-[700px] bg-gray-400 mb-8">
                    <img src="/rently247.png" alt="crafters" />
                </div>
                <div className="sm:w-[40%]">
                <h3 className="mb-4 font-antic text-2xl xl:text-4xl tracking-widest">Rently 247</h3>
                <p className="font-antic text-gray-400 hover:text-white text-md lg:text-lg xl:text-xl mb-4 lg:mb-6">I was recuited in a team working on this project, I helped the client with authentication and authoriation as well as handling bulk files using cloudinary</p>
                <a href="https://www.rently247.com/" className="lg:text-lg xl:text-xl lg:px-6 mt-4 border py-1 px-4 rounded-full hover:text-black hover:bg-white text-black bg-white sm:text-white sm:bg-black">
                Visit site
                </a>
                </div>
            </div>
            <div id='work' className="my-16 sm:flex justify-between items-center sm:mt-32">
                <div className="sm:w-96 lg:w-[480px] xl:w-[700px] bg-gray-400 mb-8">
                    <img src="/gmc.png" alt="gmc" />
                </div>
                <div className="sm:w-[40%]">
                <h3 className="mb-4 font-antic text-2xl xl:text-4xl tracking-widest">GMC Kimihurura</h3>
                <p className="font-antic text-gray-400 hover:text-white text-md lg:text-lg xl:text-xl mb-4 lg:mb-6">Everything is done in Nextjs(apis and ui), tech stacks used are Shadcn, gsap, lenis for the frontend and for the backend; Mysql, NextEdge, jwt. Check it out...</p>
                <a href="https://gmc-kimihurura-z5ku.vercel.app/" className="lg:text-lg xl:text-xl lg:px-6 mt-4 border py-1 px-4 rounded-full hover:text-black hover:bg-white text-black bg-white sm:text-white sm:bg-black">
                Visit site
                </a>
                </div>
            </div>
        </section>
    );
}

export default Work;
<h3></h3>