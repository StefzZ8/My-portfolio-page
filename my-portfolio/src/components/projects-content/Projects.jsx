import './Projects.scss';
import imageMe from './../../assets/me.jpg';
import newsLetter from './../../assets/Projects/Newsletter-signup.png';
import digitalClock from './../../assets/Projects/Digital-clock.png';
import adviceGenerator from './../../assets/Projects/Advice-generator.png';
import dashboard from './../../assets/Projects/Time-tracking-dashboard.png';
import websiteIcon from './../../assets/website-icon.svg';
import gitHubIcon from './../../assets/github-icon.svg';

const Projects = () => {
  return (
    <section id='projects'>
      <div className='petko-k'>

        <h1>My Projects</h1>
        <div className='projects-container'>

          <div className='project-section'>
            <img src={newsLetter} alt="" className='petko' />
            <div className='project__section-info'>
              <h3>Newsletter Sign up Page</h3>
              <p>eereferferfeereferferfeereferferfereferferfereferferf</p>
              <div className='btns'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href="https://github.com/StefzZ8/Digital-clock">
                  <button><img src={gitHubIcon} alt="" />GitHub</button>
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href="">
                  <button><img src={websiteIcon} alt="" />Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className='project-section'>
            <img src={digitalClock} alt="" className='petko' />
            <div className='project__section-info'>
              <h3>Digital Clock</h3>
              <p>eereferferfferferfereferferfferferfereferferfferferfereferferf</p>
              <div className='btns'>
                <button><img src={gitHubIcon} alt="" />GitHub</button>
                <button><img src={websiteIcon} alt="" />Website</button>
              </div>
            </div>
          </div>

          <div className='project-section'>
            <img src={adviceGenerator} alt="" className='petko' />
            <div className='project__section-info'>
              <h3>Advice Generator App</h3>
              <p>eereferferf</p>
              <div className='btns'>
                <button><img src={gitHubIcon} alt="" />GitHub</button>
                <button><img src={websiteIcon} alt="" />Website</button>
              </div>
            </div>
          </div>

          <div className='project-section'>
            <img src={dashboard} alt="" className='petko' />
            <div className='project__section-info'>
              <h3>Time Tracking Dashboard App</h3>
              <p>eereferferf</p>
              <div className='btns'>
                <button><img src={gitHubIcon} alt="" />GitHub</button>
                <button><img src={websiteIcon} alt="" />Website</button>
              </div>
            </div>
          </div>

          <div className='project-section'>
            <img src={imageMe} alt="" className='petko' />
            <div className='project__section-info'>
              <h3>dfdfd</h3>
              <p>eereferferf</p>
              <div className='btns'>
                <button><img src={gitHubIcon} alt="" />GitHub</button>
                <button><img src={websiteIcon} alt="" />Website</button>
              </div>
            </div>
          </div>

          <div className='project-section'>
            <img src={imageMe} alt="" className='petko' />
            <div className='project__section-info'>
              <h3>dfdfd</h3>
              <p>eereferferf</p>
              <div className='btns'>
                <button><img src={gitHubIcon} alt="" />GitHub</button>
                <button><img src={websiteIcon} alt="" />Website</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects;