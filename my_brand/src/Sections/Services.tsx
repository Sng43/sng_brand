import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useEffect, useRef} from 'react'


gsap.registerPlugin(ScrollTrigger)


const Services = () => {

    const services = useRef<HTMLElement>(null)
    
    useEffect(()=>{
        gsap.to(services.current, {
            y: -300,
            scrollTrigger: {
                trigger: services.current,
                start: "top 700",
                markers: false,
                scrub: true
            }
        })
    }, [])

    // useEffect(()=>{
    //     gsap.to("#what",{
    //         scrollTrigger: {
    //             trigger: "#what",
    //             start: "top top",
    //             end: "150 bottom",
    //             markers: true,
    //             scrub: true
    //         }
    //     })
    // }, [])

    return (
        <section ref={services} className="bg-gray-100 rounded-xl m-auto mt-20 text-black">
        <div id="what"  className="sm:w-[90%] w-[94%] m-auto py-2">
            <div className="sm:flex justify-between relative">
                <h1 className="font-antic font-extrabold text-[2.8rem] sm:text-6xl lg:text-8xl tracking-tight mt-2">WHAT I DO/</h1>
                <div className="sm:w-[43%] sm:flex justify-between items-top sm:mt-28 lg:mt-44">
                     <p className="font-antic text-gray-400 mt-2 text-lg lg:text-xl">(services)</p>   
                    <p className="mt-6 sm:mt-4 lg:mt-5 sm:ml-10 lg:ml-16 font-antic leading-[23px] text-black tracking-normal text-lg lg:text-xl lg:leading-7 lg:tracking-wider">My obsession is to craft memorable digital experiences that represent your brand, serve a meaningful purpose, and drive tangible business results.</p> 
                </div>
            </div>
                <hr className="bg-black h-[1.5px] mt-6" />
                <h1 className="font-antic font-extrabold text-[2.2rem] lg:text-6xl lg:my-2 tracking-tightest">Web Development</h1> 
                <div className="sm:flex justify-between my-4">
                    <p className="sm:w-[45%] mt-6 lg:mt-5 font-antic leading-[23px] text-black tracking-normal text-lg lg:text-xl lg:leading-7 lg:tracking-wider">My custom made websites are made to captivate and convert. With seamless user experiences and dynamic animations, I will keep your audience engaged and coming back for more.</p>
                    <ul className="sm:w-[55%] sm:ml-28">
                        <li className="sm:ml-10 border-b-2 border-black">
                        <h1 className="sm:ml-4 lg:text-4xl font-antic font-extrabold text-2xl tracking-tightest mb-2 mt-4"><span className="font-oxanium-thin font-light text-xl text-gray-600 mx-2" >01</span>Resposive writing</h1> 
                        </li>
                        <li className="sm:ml-10 border-b-2 border-black">
                        <h1 className="sm:ml-4 lg:text-4xl font-antic font-extrabold text-2xl tracking-tightest my-2"><span className="font-oxanium-thin font-light text-xl text-gray-600 mx-2" >02</span>CMS Integration</h1>  
                        </li>
                        <li className="sm:ml-10">
                        <h1 className="sm:ml-4 lg:text-4xl font-antic font-extrabold text-2xl tracking-tightest my-2"><span className="font-oxanium-thin font-light text-xl text-gray-600 mx-2" >03</span>Motion & Animations</h1>
                        </li>
                    </ul> 
                </div>  
                <hr className="bg-black h-[1.5px]" />
                <h1 className="font-antic font-extrabold text-[2.2rem] lg:text-6xl lg:my-2 tracking-tightest">Web Design</h1>
                <div className="sm:flex justify-between my-4">
                    <p className="sm:w-[45%] mt-6 lg:mt-5 font-antic leading-[23px] text-black tracking-normal text-lg lg:text-xl lg:leading-7 lg:tracking-wider">Take your online presence to the next level with a website that resonates with your audience's emotions and goals. I create visually stunning, high-converting sites tailored to your business, helping you stand out and grow.</p>
                    <ul className="sm:w-[55%] sm:ml-28">
                        <li className="sm:ml-10 border-b-2 border-black">
                        <h1 className="sm:ml-4 lg:text-4xl font-antic font-extrabold text-2xl tracking-tightest mb-2 mt-4"><span className="font-oxanium-thin font-light text-xl text-gray-600 mx-2" >01</span>Responsive Design</h1> 
                        </li>
                        <li className="sm:ml-10 border-b-2 border-black">
                        <h1 className="sm:ml-4 lg:text-4xl font-antic font-extrabold text-2xl tracking-tightest my-2"><span className="font-oxanium-thin font-light text-xl text-gray-600 mx-2" >02</span>Wireframing</h1>  
                        </li>
                        <li className="sm:ml-10">
                        <h1 className="sm:ml-4 lg:text-4xl font-antic font-extrabold text-2xl tracking-tightest my-2"><span className="font-oxanium-thin font-light text-xl text-gray-600 mx-2" >03</span>UX Writing</h1>
                        </li>
                    </ul> 
                </div>   
                <hr className="bg-black h-[1.5px] " />
                <h1 className="font-antic font-extrabold text-[2.2rem] lg:text-6xl lg:my-2 tracking-tightest">SEO</h1>
                <div className="sm:flex justify-between my-4">
                    <p className="sm:w-[45%] mt-6 lg:mt-5 font-antic leading-[23px] text-black tracking-normal text-lg lg:text-xl lg:leading-7 lg:tracking-wider">I optimize your website to boost visibility in search results, attracting the right audience and helping your business shine online.</p>
                    <ul className="sm:w-[55%] sm:ml-28">
                        <li className="sm:ml-10 border-b-2 border-black">
                        <h1 className="sm:ml-4 lg:text-4xl font-antic font-extrabold text-2xl tracking-tightest mb-2 mt-4"><span className="font-oxanium-thin font-light text-xl text-gray-600 mx-2" >01</span>Techinical SEO</h1> 
                        </li>
                        <li className="sm:ml-10 border-b-2 border-black">
                        <h1 className="sm:ml-4 lg:text-4xl font-antic font-extrabold text-2xl tracking-tightest my-2"><span className="font-oxanium-thin font-light text-xl text-gray-600 mx-2" >02</span>SEO Analysis</h1>  
                        </li>
                        <li className="sm:ml-10">
                        <h1 className="sm:ml-4 lg:text-4xl font-antic font-extrabold text-2xl tracking-tightest my-2"><span className="font-oxanium-thin font-light text-xl text-gray-600 mx-2" >03</span>SEO Audits</h1>
                        </li>
                    </ul> 
                </div> 
        </div>
        </section>
    );
}

export default Services;
