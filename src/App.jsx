import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import NotePad from "./components/NotePad/NotePad";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/404';

// Single Projects
import TodoList from './projects/ToDoList/Components/App';

// VanillaVsReact Projects
import HackerNewsSearch from './projects/VanillaVsReact/HackerNewsSearch/HackerNewsSearch';

// ReactTutorial Lessons
import ReactTutorial from './projects/ReactTutorial/ReactTutorial';
import Props from './projects/ReactTutorial/lessons/GettingStarted/Props';
import KeyProp from './projects/ReactTutorial/lessons/GettingStarted/KeyProp';
import ConditionalRendering from './projects/ReactTutorial/lessons/GettingStarted/ConditionalRendering/ConditionalRendering';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Navbar />
        <NotePad />
        {/* Connect defined routes with desired components */}
        {/* Routes are defined in projectData.js */}
        <Routes>
          {/* Renders the Home component when the URL is exactly /. */}
          <Route path='/' element={<Home />} />
          {/* Renders the About component when the URL is /about or /about/. */}
          <Route path='/about/' element={<About />} />
          <Route path='/contact/' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/todo-list/' element={<TodoList />} />
          <Route path='/react-tutorial/' element={<ReactTutorial />} />
          {/* pathes from projectData.js: */}
          <Route path='/react-tutorial/props/' element={<Props />} />
          <Route path='/react-tutorial/key-prop/' element={<KeyProp />} />
          <Route path='/react-tutorial/conditional-rendering/' element={<ConditionalRendering />} />
          <Route path='/vanilla-vs-react/' element={<HackerNewsSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
