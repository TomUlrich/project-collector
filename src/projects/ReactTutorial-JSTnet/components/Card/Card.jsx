import { Link } from "react-router-dom";
import styles from "./Card.module.css";

// ## Original
// // props from projectData via App.jsx
// const Card = ({ title, description, route, image, tutorialURL }) => {
//   return (
//     <div className={}card">
//       <img className={}card-image" src={image} alt={`${title} preview`} />
//       <div className={}card-content">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <Link to={tutorialURL} className={}card-link">Tutorial Seite</Link>
//         <Link to={route} className={}card-link">Mehr erfahren</Link>
//       </div>
//     </div>
//   );
// };

// export default Card;
// ## Original END


const Card = ({ title, description, route, image, tutorialURL }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={`${title} preview`} />

      <div className={styles.textColumn}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
        <Link to={route} className={styles.cardLink}>View Lesson</Link>
        <Link to={tutorialURL} className={styles.cardLink}>Show Tutorial Site</Link>
      </div>
    </div>

  );
};

export default Card;
