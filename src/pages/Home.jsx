import projectData from "../data/projectData";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <div className="home">
      {projectData.map((project) => (
        <Card
          key={crypto.randomUUID()}
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
