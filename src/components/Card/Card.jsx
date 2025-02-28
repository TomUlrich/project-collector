// ## Original 
// import { Link } from "react-router-dom";
// import "./Card.css";

// const Card = ({ title, description, route, image }) => {
//   return (
//     <div className="card">
//       <img className="card-image" src={image} alt={`${title} preview`} />
//       <div className="card-content">

//         <h3>{title}</h3>
//         <p>{description}</p>
//         <Link to={route} className="card-link">
//           Mehr erfahren
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;
// ## Original END


import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ title, description, route, image }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={`${title} preview`} />
      <div className={styles.cardContent}>

        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={route} className={styles.cardLink}>
          Mehr erfahren
        </Link>
      </div>
    </div>
  );
};

export default Card;
