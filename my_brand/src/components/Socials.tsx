import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Socials = () => {
    return (
        <div className='ml-4'>
            <h4>SOCIALS</h4>
            <ul className='ml-8 leading-7'>
                <li><FontAwesomeIcon icon={faGithub}/> Github</li>
                <li><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</li>
                <li><FontAwesomeIcon icon={faInstagram}/> Instagram</li>
                <li><FontAwesomeIcon icon={faDiscord}/> Discord</li>
            </ul>
        </div>
    );
}

export default Socials;
