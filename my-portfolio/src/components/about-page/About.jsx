import Skills from './skills-page/Skills';
import './About.scss';

const About = () => {
  return (
    <div className='about-page' id='about'>
      <div className='text-zone'>
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa, possimus ut id magni cumque. Sunt qui vitae id harum architecto voluptatum. Blanditiis accusamus minus alias repellendus officia ad repellat!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa, possimus ut id magni cumque. Sunt qui vitae id harum architecto voluptatum. Blanditiis accusamus minus alias repellendus officia ad repellat!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa, possimus ut id magni cumque. Sunt qui vitae id harum architecto voluptatum. Blanditiis accusamus minus alias repellendus officia ad repellat!
        </p>
      </div>
      <Skills />
    </div>
  )
}

export default About;
