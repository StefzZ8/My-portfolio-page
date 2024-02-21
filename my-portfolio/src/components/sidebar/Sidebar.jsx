import { Link } from 'react-router-dom';
// import LogoS from '../../assets/logo-s.png'
import './Sidebar.scss';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            {/* <img src={LogoS} /> */}
        </Link>
    </div>
)



export default Sidebar;