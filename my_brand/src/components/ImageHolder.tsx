import profileImg from '../assets/profile.png';

const ImageHolder = () => {
    return (
        <div className="group h-full w-full overflow-hidden rounded-2xl bg-dark-700 ring-1 ring-white/10 transition-shadow duration-500 hover:ring-white/25 hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]">
            <img
                src={profileImg}
                alt="Senga Emmy"
                className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
        </div>
    );
}

export default ImageHolder;
