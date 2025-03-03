import styles from "../App.module.css";
import projectData from "../projects/data/projectData";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>All my React Projects</h1>
      <div className={styles.cardContainer}>
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
    </div>
  );
};

export default Home;
