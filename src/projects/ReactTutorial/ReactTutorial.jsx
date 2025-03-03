// import './App.css';
import styles from "./ReactTutorial.module.css";
import Card from "./components/Card/Card.jsx";
import lessonData from './data/lessonData.js';
import JSTlogo from "./images/JSTnet-Logo.PNG";

const App = () => {
  return (
    <div className={styles.app}>
      <h1>
        React Tutorial by <img className={styles.tutorLogo} src={JSTlogo} alt="JST Logo" />
      </h1>

      <section className={styles.greyBg}>
        <h2>Section 1. Getting started with React</h2>

        <div className={styles.cardContainer}>
          {lessonData.map((lesson) => (
            <Card key={crypto.randomUUID()} {...lesson} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;