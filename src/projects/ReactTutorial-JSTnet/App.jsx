import './App.css';
import Card from "./components/Card/Card";
import projectData from './data/projectData.js'; 
import JSTlogo from "./images/JSTnet-Logo.PNG";

const App = () => {
  return (
    <div className="app">
      <h1>
        Learning React with <img className='tutor-logo' src={JSTlogo} alt="JST Logo" />
      </h1>
      <div className="card-container">
        {projectData.map((project) => (
          <Card key={crypto.randomUUID()} {...project} />
        ))}
      </div>
    </div>
  );
}

export default App;