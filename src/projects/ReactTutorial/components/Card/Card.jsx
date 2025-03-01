import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ title, description, route, image, tutorialURL }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={`${title} preview`} />

      <div className={styles.textColumn}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Link to={route} className={styles.cardLink}>View App</Link>
        <Link to={tutorialURL} target="_blank" className={styles.cardLink}>Read Lesson</Link>
      </div>
    </div>

  );
};

export default Card;
