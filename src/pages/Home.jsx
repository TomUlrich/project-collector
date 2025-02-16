// ## Mapping Cards with project data from projectData.js 

// #todo: explain the connection between the projectData.js and the Card component

import projectData from "../data/projectData";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <div className="home">
      {projectData.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.description}
          route={project.route}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Home;
