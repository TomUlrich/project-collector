import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ title, description, route, image }) => {
  return (
    <div className="card">
      <img src={image} alt={`${title} preview`} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={route} className="card-link">
          Mehr erfahren
        </Link>
      </div>
    </div>
  );
};

export default Card;