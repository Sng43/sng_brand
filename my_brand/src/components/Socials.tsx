import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Socials = () => {
    return (
        <div className=' mt-7 xl:ml-48  sm:mt-52 ml-6 xl:text-2xl'>
            <h4 className='xl:mb-4 mb-2 font-antic font-bold'>SOCIALS</h4>
            <ul className='ml-4 xl:ml-8 xl:leading-[2.2rem] font-oxanium-thin sm:w-24 lg:w-40'>
                <li><FontAwesomeIcon icon={faGithub} className='xl:mr-1'/> <span className='text-gray-400 hover:text-white'>Github</span></li>
                <li><FontAwesomeIcon icon={faLinkedin} className='xl:mr-1'/> <span className='text-gray-400 hover:text-white'>LinkedIn</span></li>
                <li><FontAwesomeIcon icon={faInstagram} className='xl:mr-1'/> <span className='text-gray-400 hover:text-white'>Instagram</span></li>
                <li><FontAwesomeIcon icon={faDiscord} className='mr-1 xl:mr-2 h-4 w-4 xl:h-6 xl:w-6' /><span className='text-gray-400 hover:text-white'>Discord</span></li>
            </ul>
        </div>
    );
}

export default Socials;
