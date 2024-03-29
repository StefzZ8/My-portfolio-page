import './Homepage.scss';
import { Link } from 'react-scroll';

const Homepage = () => {
  return (
    <section id='home'>
      <div className='home__page-section'>
        <span className='hello'>Hello,</span>
        <span>I'm <span className='name'>Stefan.</span><br />Web Developer</span>
        <h2>Junior Frontend Developer</h2>
        <Link className='contact__me-btn' onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
        }} >
          CONTACT ME
        </Link>
      </div>
      <img src="" alt="" />
    </section>
  )
}

export default Homepage;