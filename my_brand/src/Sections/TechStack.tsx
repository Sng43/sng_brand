import { FaReact, FaHtml5, FaCss3, FaPython, FaNodeJs, FaDocker } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiJavascript, SiTensorflow, SiPytorch, SiFastapi, SiLangchain, SiN8N } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { IconType } from "react-icons";

// Custom SVG icons for tools not in react-icons
const CrewAIIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const LangGraphIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="5" cy="5" r="2.5"/>
    <circle cx="19" cy="5" r="2.5"/>
    <circle cx="12" cy="19" r="2.5"/>
    <line x1="7" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <line x1="5" y1="7.5" x2="12" y2="16.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <line x1="19" y1="7.5" x2="12" y2="16.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

const ICONS = [
  { icon: FaReact, name: "React" },
  { icon: RiNextjsFill, name: "NextJS" },
  { icon: SiTensorflow, name: "TensorFlow" },
  { icon: SiPytorch, name: "PyTorch" },
  { icon: FaDocker, name: "Docker" },
  { icon: SiN8N, name: "n8n" },
  { icon: SiFastapi, name: "FastAPI" },
  { icon: CrewAIIcon, name: "CrewAI" },
  { icon: SiLangchain, name: "LangChain" },
  { icon: LangGraphIcon, name: "LangGraph" },
  { icon: IoLogoFigma, name: "Figma" },
  { icon: BiLogoMongodb, name: "MongoDB" },
  { icon: BiLogoPostgresql, name: "Postgresql" },
  { icon: SiTypescript, name: "Typescript" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3, name: "CSS3" },
  { icon: FaNodeJs, name: "NodeJS" },
  { icon: FaPython, name: "Python" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS" },
  { icon: SiExpress, name: "ExpressJS" },
  { icon: GrMysql, name: "MySQL" },
  { icon: SiJavascript, name: "Javascript" },
];

const ELEMENTS = [...ICONS, ...ICONS];

const TechStack = () => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const secondList = useRef<HTMLDivElement>(null);
  const timelines = useRef<gsap.core.Timeline[]>([]);

  useGSAP(() => {
    // First row drifts left, second row drifts right — both loop seamlessly
    gsap.set(movingContainer.current, { xPercent: 0 });
    const tl1 = gsap
      .timeline({ defaults: { ease: "none" }, repeat: -1 })
      .to(movingContainer.current, { xPercent: -50, duration: 40 })
      .set(movingContainer.current, { xPercent: 0 });

    gsap.set(secondList.current, { xPercent: -50 });
    const tl2 = gsap
      .timeline({ defaults: { ease: "none" }, repeat: -1 })
      .to(secondList.current, { xPercent: 0, duration: 40 })
      .set(secondList.current, { xPercent: -50 });

    timelines.current = [tl1, tl2];
  }, []);

  // Ease the belts to a stop under the cursor, ease back up on leave
  const setSpeed = (scale: number) => {
    timelines.current.forEach((tl) =>
      gsap.to(tl, { timeScale: scale, duration: 0.6, overwrite: true })
    );
  };

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-6 lg:gap-6">
        {ELEMENTS.map((img, i) => (
          <div key={i} className={`relative flex shrink-0 justify-center ${i === ELEMENTS.length - 1 ? "mr-12" : ""}`}>
            <p className="flex items-center text-lg text-gray-500 transition-colors duration-300 hover:text-white lg:text-xl">
              <img.icon className="mr-1.5 text-3xl text-gray-300 lg:mr-2 lg:text-5xl" /> {img.name}
            </p>
          </div>
        ))}
      </div>
    ),
    []
  );

  return (
    <section className="mt-12 sm:mt-10">
      <div
        className="marquee-mask max-w-full select-none overflow-hidden py-2"
        onMouseEnter={() => setSpeed(0.15)}
        onMouseLeave={() => setSpeed(1)}
      >
        <div ref={movingContainer} className="mb-4 flex w-fit">
          {list}
        </div>
        <div ref={secondList} className="flex w-fit">
          {list}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
