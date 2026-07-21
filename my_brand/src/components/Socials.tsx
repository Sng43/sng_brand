import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SOCIALS = [
    { icon: faGithub, name: 'Github' },
    { icon: faLinkedin, name: 'LinkedIn' },
    { icon: faInstagram, name: 'Instagram' },
    { icon: faDiscord, name: 'Discord' },
]

const Socials = () => {
    return (
        <div className='mt-7 xl:ml-48 sm:mt-52 ml-6 xl:text-xl'>
            <h4 className='xl:mb-5 mb-3 font-oxanium text-[11px] font-bold tracking-[0.3em] text-gray-500'>SOCIALS</h4>
            <ul className='space-y-2 xl:space-y-3 font-oxanium-thin'>
                {SOCIALS.map((s) => (
                    <li key={s.name} className='group flex cursor-pointer items-center gap-2.5 text-gray-400 transition-all duration-300 hover:translate-x-1.5 hover:text-white'>
                        <FontAwesomeIcon icon={s.icon} className='h-4 w-4 xl:h-5 xl:w-5 transition-transform duration-300 group-hover:scale-110' />
                        <span className='link-sweep'>{s.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Socials;
