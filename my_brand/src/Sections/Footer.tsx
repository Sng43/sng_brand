import Logo from "../components/Logo";

const SITEMAP = [
    { name: 'Home', link: '#home' },
    { name: 'Services', link: '#services' },
    { name: 'Works', link: '#works' },
    { name: 'About', link: '#about' },
    { name: 'Contacts', link: '#contact' },
]

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black">
            <div className="sm:w-[90%] w-[94%] m-auto pt-12 pb-8">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h4 className="font-oxanium font-bold text-[11px] tracking-[0.3em] text-gray-500 mb-6">SERVICES</h4>
                        <div className="font-antic leading-8 lg:tracking-widest text-lg lg:text-xl">
                            <h2>WEB DESIGN</h2>
                            <h2>FRONT-END DEVELOPMENT</h2>
                            <h2>BACK-END DEVELOPMENT</h2>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-oxanium font-bold text-[11px] tracking-[0.3em] text-gray-500 mb-6">SIGN UP FOR THE NEWSLETTER</h4>
                        <form className="font-oxanium text-sm tracking-wider" action="">
                            <label htmlFor="email" className="block border-b border-dashed border-black transition-colors duration-300 focus-within:border-solid">
                                <input
                                    id="email"
                                    className="w-full bg-transparent p-2 pl-0 text-black placeholder:text-gray-500 focus:outline-none"
                                    type="email"
                                    placeholder="Enter your email address"
                                />
                            </label>
                        </form>
                    </div>
                    <div>
                        <h4 className="font-oxanium font-bold text-[11px] tracking-[0.3em] text-gray-500 mb-6">SITEMAP</h4>
                        <ul className="space-y-3">
                            {SITEMAP.map((item) => (
                                <li key={item.name}>
                                    <a href={item.link} className="link-sweep font-oxanium font-semibold text-sm tracking-wider transition-opacity duration-300 hover:opacity-60">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center gap-4 border-t border-black/10 pt-8 sm:flex-row sm:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12">
                            <Logo />
                        </div>
                        <p className="font-oxanium text-xl">{new Date().getFullYear()}</p>
                    </div>
                    <p className="font-oxanium text-[10px] tracking-[0.25em] text-gray-600">WEBSITE BY SENGA EMMANUEL KABARE</p>
                    <p className="font-oxanium text-[10px] tracking-[0.25em]">SNG EMMY ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
