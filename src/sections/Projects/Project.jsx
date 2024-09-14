import styles from './ProjectsStyles.module.css';
import amazon from '../../assets/amazon-4k-logo-qhd.jpg';
import newsapp from '../../assets/newsapp.jpeg';
import Chaiapp from '../../assets/chai.jpeg';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={amazon}
          //link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Amazon Clone"
          p="Using HTML,CSS,JAVASCRIPT"
        />
        <ProjectCard
          src={newsapp}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="News App"
          p="Latest Trending News Using React"
        />
        <ProjectCard
          src={Chaiapp}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Buy me a Chai"
          p="A Next.js App"
        />
        
      </div>
    </section>
  );
}

export default Projects;