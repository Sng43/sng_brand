import Logo from "./Logo";

const Header = () => {
    return (
        <header className='bg-dark-800 sticky top-0 z-[20] mx-auto flex w-full p-0 text-gray-400'>
            <div className="sm:w-[90%] flex m-auto w-[94%] items-center justify-between">
        <Logo/>
        <div className="hidden sm:flex w-[60%]">
            <ul className="flex justify-between items-center w-full font-oxanium-thin ">
            <li className="hover:text-white">services</li>
            <li className="hover:text-white">works</li>
            <li className="hover:text-white">blogs</li>
            <li className="hover:text-white">about</li>
            <li className="hover:text-white">contact</li>
            </ul></div>
        <div className="sm:hidden ">
            <p className="hover:text-white">burger</p>
        </div>
                </div> 
        </header>
    );
}

export default Header;
