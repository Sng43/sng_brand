import { FaReact, FaHtml5, FaCss3, FaPython, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiJavascript } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { useMemo, useRef } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ICONS = [
  { icon: FaReact, name: "React" },
  { icon: RiNextjsFill, name: "NextJS" },
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

const ELEMENTS = [...ICONS,...ICONS];
const TechStack = () => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const secondList = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const setupInfiniteMarquee = () => {
      // Animate the first list (forward direction)
      gsap.set(movingContainer.current, { xPercent: 0 });
      gsap
        .timeline({
          defaults: { ease: "none", repeat: -1.1 },
        })
        .to(movingContainer.current, {
          xPercent: -50,
          duration: 40,
        })
        .set(movingContainer.current, { x: 0 });

      // Animate the second list (reverse direction)
      gsap.set(secondList.current, { xPercent: -50 });
      gsap
        .timeline({
          defaults: { ease: "none", repeat: -1.1 },
        })
        .to(secondList.current, {
          xPercent: 0,
          duration: 40,
        })
        .set(secondList.current, { xPercent: -50 });
    };

    setupInfiniteMarquee();
  }, []);

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-6 lg:gap-6">
        {ELEMENTS.map((img, i) => {
          const isLast = i === ELEMENTS.length - 1;
          return (
            <div
              key={i}
              className={twJoin(
                "relative flex shrink-0 justify-center",
                isLast && "mr-12"
              )}
            >
              <p className="flex text-gray-400 text-lg  lg:text-xl items-center">
                <img.icon className="mr-1 lg:mr-[2px] text-3xl lg:text-5xl text-gray-200" /> {img.name}
              </p>
            </div>
          );
        })}
      </div>
    ),
    []
  );

  return (
    <section className="translate-y-[-120px] sm:translate-y-[-130px] lg:translate-y-[-130px] xl:translate-y-[-110px]">
        <div className=" relative top-32 flex justify-between z-50">
        <div className="h-36  w-24 sm:w-[580px] bg-[linear-gradient(to_right,black,transparent)]"></div>
        <div className="h-36 w-24 sm:w-[580px] bg-[linear-gradient(to_left,black,transparent)]"></div>
        </div>
    <div className={twMerge("max-w-full select-none overflow-hidden")}>
      <div
  ref={movingContainer}
  className="flex w-fit mb-2"
>
  {list}
</div>
<div
  ref={secondList}
  className="flex w-fit"
>
  {list}
</div>

    </div>
    </section>
  );
};

export default TechStack;
