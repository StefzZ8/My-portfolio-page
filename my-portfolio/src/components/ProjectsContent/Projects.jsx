import './Projects.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import projects from '../../assets/data/projects';
import ProjectCard from '../UI/ProjectCard';
import 'swiper/scss';
import 'swiper/scss/navigation';

const Projects = () => {
  return (
    <section id="projects">
      <div className='projects__container'>
        <div className='projects__allItems'>
          <h1 className='project_title'>My Projects</h1>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3
              }
            }}
          >
            {projects.map((project, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={project.id} >
                  <ProjectCard
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    repository={project.repo}
                    website={project.website}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section >
  );
};

export default Projects;