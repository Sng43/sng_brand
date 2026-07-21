const Button = () => {
    return (
        <a
            href="mailto:daemmyoff1cial@gmail.com"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gray-200 px-7 py-3.5 font-averia text-sm tracking-[0.15em] text-black transition-all duration-500 hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
            <span>GET IN TOUCH</span>
            <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span>
        </a>
    );
}

export default Button;
