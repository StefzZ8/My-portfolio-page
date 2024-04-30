import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import LogoS from '../../assets/logo-s.svg'
import './Sidebar.scss';


const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo'
      to='home'
      spy={true}
      smooth={true}
      duration={300}>
      <img src={LogoS} />
    </Link>
    <nav>
      <Link
        activeclass="active"
        to='home'
        spy={true}
        smooth={true}
        duration={800}
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </Link>
      <Link
        activeclass="active"
        className='about-link'
        to='about'
        spy={true}
        smooth={true}
        duration={800}
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </Link>
      <Link
        activeclass="active"
        className='projects-link'
        to='projects'
        spy={true}
        smooth={true}
        duration={800}
      >
        <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
      </Link>
      <Link
        activeclass="active"
        className='contact-link'
        to='contact'
        spy={true}
        smooth={true}
        duration={800}
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </Link>
    </nav>
    <ul>
      <li>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/stefan-simjanovski-a22b12236/'>
          <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
        </a>
      </li>
      <li>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/StefzZ8'>
          <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
        </a>
      </li>
      <li>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/'>
          <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
        </a>
      </li>
      <li>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.facebook.com/'>
          <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
        </a>
      </li>
    </ul>
  </div>
)



export default Sidebar;