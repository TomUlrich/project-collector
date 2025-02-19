import { Link } from "react-router-dom";
import "./Card-copy.css";

const Card = ({ title, description, route, image }) => {
  return (
    <div className="card">
      <Link to={route} className="card-link">
        <img className="card-image" src={image} alt={`${title} preview`} />
        <div className="hashtags">
          <div className="hashtag">#React</div>
          <div className="hashtag">#JavaScript</div>
          <div className="hashtag">#Tutorial</div>
        </div>

        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>

    // <div className="card">
    //   <Link to={route} className="card-link">
    //     <div className="card-header">
    //       <img className="card-image" src={image} alt={`${title} preview`} />
    //       <div className="hashtags">
    //         <div>#React</div>
    //         <div>#JavaScript</div>
    //         <div>#Tutorial</div>
    //       </div>
    //     </div>
    //     <div className="card-text">
    //       <h3>{title}</h3>
    //       <p>{description}</p>
    //     </div>
    //   </Link>
    // </div>
  );
};

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

export default Card;