import './Skills.scss';

const Skills = () => {
  return (
    <section className='skills-section' id='about'>
      <div className='container'>

        <div className='section__title center'>
          <h1>My Skills</h1>
        </div>
        <div className='skills-items'>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>HTML</p>
              <p>80%</p>
            </div>
            <div className='progress-line' data-percent='80%'>
              <span style={{ width: '80%' }}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>CSS & SASS</p>
              <p>60%</p>
            </div>
            <div className='progress-line' data-percent='60%'>
              <span style={{ width: '60%' }}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>JavaScript</p>
              <p>60%</p>
            </div>
            <div className='progress-line' data-percent='60%'>
              <span style={{ width: '60%' }}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>ReactJS</p>
              <p>45%</p>
            </div>
            <div className='progress-line' data-percent='45%'>
              <span style={{ width: '45%' }}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>TypeScript</p>
              <p>15%</p>
            </div>
            <div className='progress-line' data-percent='15%'>
              <span style={{ width: '15%' }}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>Canva</p>
              <p>40%</p>
            </div>
            <div className='progress-line' data-percent='40%'>
              <span style={{ width: '40%' }}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;