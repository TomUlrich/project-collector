import Card from "../components/Card/Card";
import projectData from "../data/projectData";

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
