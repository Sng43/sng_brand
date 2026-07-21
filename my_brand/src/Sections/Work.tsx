import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface Project {
    index: string;
    title: string;
    tag: string;
    image: string;
    description: string;
    link?: string;
}

const PROJECTS: Project[] = [
    {
        index: "01",
        title: "Project Sentinel",
        tag: "Clinical ML · FastAPI · React",
        image: "/sentinel.png",
        description: "An early-warning system that flags Sepsis-Associated Kidney Injury in ICU patients hours before the labs catch it. I built the full pipeline — MIMIC-IV data to KDIGO labels, a calibrated LightGBM model (AUROC 0.885), SHAP-explained alerts and a conformal 'I don't know' band — served through a FastAPI backend and a React ward dashboard, deployed as a single Docker container.",
        link: "https://sng43-sentinel-poc.hf.space/",
    },
    {
        index: "02",
        title: "PlantGuard AI",
        tag: "Flutter · Mobile · AI",
        image: "/plantguard.png",
        description: "A mobile app that diagnoses plant diseases from a single photo (has a web version as well). Snap or upload a leaf and an AI model names the plant, identifies the disease with a confidence score and returns a treatment plan — with a built-in marketplace for pesticides. Built with Flutter for a native Android experience.",
        link: "https://plantguard-ai4.web.app/home",
    },
    {
        index: "03",
        title: "ATLP e-commerce",
        tag: "React · Express · Node",
        image: "/crafters.png",
        description: "This web app was crafted with Reactjs for the frontend, Express and Nodejs for the backend. I worked on both ends, mainly on the cart items.",
        link: "https://demo-fn-19-07--crafter-shop.netlify.app/",
    },
    {
        index: "04",
        title: "Rently 247",
        tag: "Auth · Cloudinary",
        image: "/rently247.png",
        description: "I was recruited into a team working on this project. I helped the client with authentication and authorization, as well as handling bulk files using Cloudinary.",
        link: "https://www.rently247.com/",
    },
    {
        index: "05",
        title: "GMC Kimihurura",
        tag: "Next.js · MySQL · GSAP",
        image: "/gmc.png",
        description: "Everything is done in Nextjs (APIs and UI). Tech stacks used are Shadcn, GSAP and Lenis for the frontend; MySQL, NextEdge and JWT for the backend. Check it out...",
        link: "https://gmc-kimihurura-z5ku.vercel.app/",
    },
]

const Work = () => {

    useEffect(() => {
        gsap.to("#title_work", {
            y: -60,
            scrollTrigger: {
                trigger: "#title_work",
                start: "top 600",
                end: "top 200",
                scrub: true
            }
        })
    }, [])

    return (
        <section className="w-[94%] sm:w-[90%] m-auto relative mt-20" style={{ zIndex: 10 }}>
            <h1 id='title_work' className="font-antic font-extrabold text-[2.8rem] sm:text-6xl lg:text-8xl tracking-tight mb-20 lg:mb-20">MY WORKS/</h1>

            {PROJECTS.map((project, i) => (
                <div
                    key={project.index}
                    data-reveal
                    className={`my-16 sm:my-24 sm:flex justify-between items-center gap-8 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                    {(() => {
                        const media = (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            />
                        );
                        const frame = "group block sm:w-96 lg:w-[480px] xl:w-[700px] mb-8 sm:mb-0 overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 hover:ring-white/30";
                        return project.link ? (
                            <a href={project.link} target="_blank" rel="noreferrer" className={frame} aria-label={`Visit ${project.title}`}>
                                {media}
                            </a>
                        ) : (
                            <div className={frame}>{media}</div>
                        );
                    })()}
                    <div className="sm:w-[40%]">
                        <div className="flex items-baseline gap-3 mb-3">
                            <span className="font-oxanium text-xs tracking-[0.3em] text-gray-600">{project.index} /</span>
                            <span className="font-oxanium text-[11px] tracking-[0.2em] uppercase text-gray-500">{project.tag}</span>
                        </div>
                        <h3 className="mb-4 font-antic text-2xl xl:text-4xl tracking-widest">{project.title}</h3>
                        <p className="font-antic text-gray-400 text-md lg:text-lg xl:text-xl mb-6 lg:mb-8 leading-relaxed transition-colors duration-300 hover:text-gray-200">
                            {project.description}
                        </p>
                        {project.link ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-2.5 font-oxanium text-sm tracking-[0.15em] uppercase text-white transition-all duration-400 hover:bg-white hover:text-black lg:text-base"
                            >
                                Visit site
                                <span className="inline-block transition-transform duration-400 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 font-oxanium text-sm tracking-[0.15em] uppercase text-gray-500 lg:text-base">
                                Mobile app
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Work;
