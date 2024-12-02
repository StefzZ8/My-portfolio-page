import Skills from './Skills/Skills';
import './About.scss';

const About = () => {
  return (
    <div className='about-page' id='about'>
      <div className='text-zone'>
        <h1>About me</h1>
        <p>
          Hey, I'm Stefan, a front-end developer with a passion for growth! I'm all about learning, teamwork, and CrossFit. Eager to grow, I thrive in collaborative environments, bringing positivity and dedication to every project. Beyond work, you'll find me embracing the intensity of CrossFit, reflecting my commitment to discipline and community. Let's connect and achieve great things together!
        </p>
      </div>
      <Skills />
    </div>
  )
}

export default About;
