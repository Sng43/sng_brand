import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCard {
    number: string;
    title: string;
    description: string;
    items: string[];
    accent: string;
}

const SERVICES: ServiceCard[] = [
    {
        number: "01",
        title: "Machine Learning & AI",
        description: "I build intelligent systems that actually learn — not just glorified if-else chains. From training custom models to deploying real-time prediction pipelines, I turn raw data into products that think.",
        items: ["Custom Model Training", "Deep Learning & Neural Nets", "NLP & Computer Vision", "AI Agent Development"],
        accent: "from-violet-500/40 to-indigo-500/40"
    },
    {
        number: "02",
        title: "Data Science & Analytics",
        description: "Numbers tell stories if you know how to listen. I dig through messy datasets, uncover the patterns everyone else missed, and turn insights into decisions that actually move the needle.",
        items: ["Exploratory Data Analysis", "Predictive Modeling", "Statistical Analysis", "Data Visualization & Dashboards"],
        accent: "from-cyan-500/40 to-blue-500/40"
    },
    {
        number: "03",
        title: "MLOps & Infrastructure",
        description: "A model sitting in a notebook is just a science experiment. I ship models to production — containerized, monitored, and ready to handle whatever your users throw at it.",
        items: ["Model Deployment & Serving", "CI/CD for ML Pipelines", "Docker & Orchestration", "Workflow Automation (n8n)"],
        accent: "from-emerald-500/40 to-teal-500/40"
    },
    {
        number: "04",
        title: "Web Development",
        description: "Pixel-perfect frontends, bulletproof backends, and everything in between. I build web experiences that look incredible, load fast, and rank high — because what's the point of a beautiful site nobody can find?",
        items: ["Full-Stack Development", "Responsive Design & Motion", "SEO & Performance Optimization", "CMS Integration & API Design"],
        accent: "from-amber-500/40 to-orange-500/40"
    }
];

const Services = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Subtle scale-down on covered cards
    useEffect(() => {
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
        if (cards.length === 0) return;

        const triggers: ScrollTrigger[] = [];

        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                const inner = card.querySelector('.card-inner') as HTMLElement;
                if (!inner) return;

                const tween = gsap.to(inner, {
                    scale: 0.96,
                    scrollTrigger: {
                        trigger: cards[i + 1],
                        start: "top 90%",
                        end: "top 20%",
                        scrub: true,
                        markers: false,
                    },
                });
                if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
            }
        });

        return () => {
            triggers.forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-gray-100 rounded-xl m-auto mt-20 text-black pb-8">
            <div className="sm:w-[90%] w-[94%] m-auto py-2">
                {/* Header */}
                <div className="sm:flex justify-between relative">
                    <h1 data-reveal className="font-antic font-extrabold text-[2.8rem] sm:text-6xl lg:text-8xl tracking-tight mt-2">WHAT I DO/</h1>
                    <div data-reveal className="sm:w-[43%] sm:flex justify-between items-top sm:mt-28 lg:mt-44">
                        <p className="font-antic text-gray-400 mt-2 text-lg lg:text-xl">(services)</p>
                        <p className="mt-6 sm:mt-4 lg:mt-5 sm:ml-10 lg:ml-16 font-antic leading-[23px] text-black tracking-normal text-lg lg:text-xl lg:leading-7 lg:tracking-wider">From training neural nets to shipping production apps — I build the full stack of intelligence.</p>
                    </div>
                </div>
            </div>

            {/* Stacking Cards */}
            <div className="relative mt-8 px-4 sm:px-8 lg:px-12">
                {SERVICES.map((service, index) => {
                    const isLast = index === SERVICES.length - 1;
                    return (
                        <div
                            key={service.number}
                            ref={el => { cardRefs.current[index] = el; }}
                            className="sticky"
                            style={{
                                top: `${20 + index * 15}px`,
                                zIndex: index + 1,
                                marginBottom: isLast ? '0' : '30vh',
                            }}
                        >
                            <div className="card-inner bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg origin-top">
                                {/* Gradient accent bar */}
                                <div className={`h-1.5 w-full bg-gradient-to-r ${service.accent}`} />

                                <div className="p-6 sm:p-8 lg:p-10">
                                    <div className="sm:flex justify-between items-start gap-8">
                                        {/* Left: number + title + description */}
                                        <div className="sm:w-[50%]">
                                            <div className="flex items-baseline gap-3 mb-3">
                                                <span className="font-oxanium-thin font-light text-2xl lg:text-3xl text-gray-300">{service.number}</span>
                                                <h2 className="font-antic font-extrabold text-2xl sm:text-3xl lg:text-5xl tracking-tight">{service.title}</h2>
                                            </div>
                                            <p className="font-antic leading-[23px] text-gray-600 tracking-normal text-base lg:text-lg lg:leading-7 mt-4">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Right: items list */}
                                        <ul className="sm:w-[45%] mt-6 sm:mt-0">
                                            {service.items.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className={`
                                                        group py-3 sm:py-4 flex items-center gap-3 transition-all duration-300 hover:pl-2
                                                        ${i < service.items.length - 1 ? 'border-b border-gray-200' : ''}
                                                    `}
                                                >
                                                    <span className="font-oxanium-thin text-sm text-gray-400 min-w-[24px] transition-colors duration-300 group-hover:text-black">0{i + 1}</span>
                                                    <h3 className="font-antic font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight">{item}</h3>
                                                    <span className="ml-auto -translate-x-2 text-xl opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true">→</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Services;
