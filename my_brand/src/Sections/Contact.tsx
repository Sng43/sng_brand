
const Contact = () => {

    return (
        <section data-reveal className="bg-dark-800 w-[90%] m-auto my-8 rounded-md border border-dashed border-white/25 text-center py-8 sm:pb-16 sm:pt-8 transition-colors duration-500 hover:border-white/60">
            <a href="mailto:daemmyoff1cial@gmail.com" className="group block">
                <p className="font-antic text-gray-400 w-[80%] m-auto leading-6 text-base sm:text-lg lg:text-xl transition-colors duration-300 group-hover:text-gray-200">
                    Got a project? Need an unfair advantage?
                </p>
                <h1 className="font-antic font-bold text-[3.4rem] leading-[3.6rem] sm:text-7xl sm:leading-none lg:text-8xl xl:text-[8rem] w-[90%] m-auto mt-6 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    GET IN TOUCH
                    <span className="ml-2 inline-block align-top text-[0.4em] leading-none opacity-40 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-100" aria-hidden="true">↗</span>
                </h1>
                <p className="mt-6 font-oxanium text-xs sm:text-sm tracking-[0.3em] text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
                    daemmyoff1cial@gmail.com
                </p>
            </a>
        </section>
    );
}

export default Contact;
