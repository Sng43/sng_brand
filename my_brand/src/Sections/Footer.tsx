import Logo from "../components/Logo";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black lg:h-64 border-black">
            <div className="sm:w-[90%] w-[94%] m-auto">
                <div className="lg:flex justify-between">
                <div className="my-2 border border-gray-100 lg:w-[31%]">
                    <h4 className="font-oxanium font-bold text-[10px] tracking-wider text-gray-500 my-2 lg:mb-8">SERVICES</h4>
                    <div className="font-antic font-[1000] leading-5 lg:leading-8 lg:tracking-widest lg:text-xl">
                        <h2>WEB DESIGN</h2>
                        <h2>FRONT-END DEVELOPMENT</h2>
                        <h2>BACK-END DEVELOPMENT</h2>
                    </div>
                </div>
                <div className="my-2 border border-gray-100 lg:w-[31%] lg:h-[0.1px] xl:mr-20">
                    <h4 className="font-oxanium font-bold text-[10px] tracking-wider text-gray-500 mt-2 mb-1 lg:mb-8">SIGN UP FOR THE NEWSLETTER</h4>
                    <form className="font-oxanium font-extrabold text-[13px] tracking-wider " action="">
                        <label htmlFor="email">
                            <input className="bg-gray-100 border border-gray-100 border-dashed border-b-black p-2 w-[100%] text-black focus:outline-none" type="email" placeholder="Enter your email address"/>
                        </label>
                    </form>
                    <p className="font-oxanium text-[6px] mt-6 lg:mt-[130px] text-black tracking-[0.15rem]">WEBSITE  BY  SENGA EMMANUEL KABARE</p>
                </div>
                <div className="border border-gray-100 lg:w-[31%]">
                    <h4 className="font-oxanium font-bold text-[10px] tracking-wider text-gray-500 my-2 lg:mt-4 lg:mb-8">SITEMAP</h4>
                    <p className="font-oxanium font-extrabold text-black text-[10px] border border-gray-100 border-dashed border-b-black my-1">Home</p>
                    <p className="font-oxanium font-extrabold text-black text-[10px] border border-gray-100 border-dashed border-b-black my-1">Services</p>
                    <p className="font-oxanium font-extrabold text-black text-[10px] border border-gray-100 border-dashed border-b-black my-1">Works</p>
                    <p className="font-oxanium font-extrabold text-black text-[10px] border border-gray-100 border-dashed border-b-black my-1">About</p>
                    <p className="font-oxanium font-extrabold text-black text-[10px] border border-gray-100 border-dashed border-b-black my-1">Contacts</p>
                </div>
            </div>
            <div className="m-auto w-[80%] lg:w-48 lg:h-2 lg:ml-0 text-center lg:relative bottom-4">
                <h1 className="font-oxanium text-xl relative top-5 lg:top-2" >2024</h1>
                <div className=" h-40 w-40 m-auto lg:h-12 lg:w-16">
                    <Logo />
                </div>
                <p className="font-oxanium text-[6px] text-black my-4 lg:mt-0 tracking-[0.15rem]">SNG EMMY ALL RIGHTS RESERVED</p>
            </div>
                </div>
        </footer>
    );
}

export default Footer;
