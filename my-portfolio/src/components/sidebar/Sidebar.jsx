import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope,  faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import LogoS from '../../assets/logo-s.svg'
import './Sidebar.scss';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoS} />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className='about-link'
        to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className='projects-link'
        to="/projects">
        <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className='contact-link'
        to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
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