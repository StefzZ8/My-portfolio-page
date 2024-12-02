import './Skills.scss';
import htmlIcon from '../../../assets/html.png';
import cssIcon from '../../../assets/css.png';
import jsIcon from '../../../assets/js.png';
import reactIcon from '../../../assets/react.png';
import sassIcon from '../../../assets/scss.svg';
import gitIcon from '../../../assets/git.png';
import githubIcon from '../../../assets/github.png';
import canvaIcon from '../../../assets/canva.png';

const Skills = () => {
  return (
    <section className='skills-section' id='about'>
      <div className='container'>

        <div className='section__title center'>
          <h1>My Skills</h1>
        </div>
        <div className='skill-items'>

          <img
            src={htmlIcon}
            alt="Html"
            width="100px" />
          <img
            src={cssIcon}
            alt="Css"
            width="100px" />
          <img
            src={jsIcon}
            alt="JavaScript"
            width="100px" />
          <img
            src={reactIcon}
            alt="React"
            width="100px" />
          <img
            src={sassIcon}
            alt="Sass"
            width="100px" />
          <img
            src={githubIcon}
            alt="Git"
            width="100px" />
          <img
            src={gitIcon}
            alt="Github"
            width="100px" />
          <img
            src={canvaIcon}
            alt="Canva"
            width="100px" />

        </div>
      </div>
    </section>
  )
}

export default Skills;