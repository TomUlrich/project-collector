# Project Collector

src/App.jsx
import Home from './pages/Home';  
import ReactTutorial from './pages/ReactTutorial-JSTnet/App';  
import FavouriteBooks from './pages/ReactTutorial-JSTnet/pages/FavouriteBooks/FavouriteBooks';
import FavouriteBooksMapped from './pages/ReactTutorial-JSTnet/pages/FavouriteBooks/FavouriteBooksMapped';

<Route path='/' element={<Home />} />
<Route path='/react-tutorial' element={<ReactTutorial />} />
<Route path='/react-tutorial/favouritebooks' element={<FavouriteBooks />} />
<Route path='/react-tutorial/favouritebooksmapped' element={<FavouriteBooksMapped />} />

src/pages/Home.jsx
{projectData.map((project) => (
<Card
             key={crypto.randomUUID()}
             title={project.title}
             description={project.description}
             route={project.route}
             image={project.image}
           />
))}



## chatGTP

https://chatgpt.com/c/676a865b-b920-800d-b681-821120f36e0b

## Project Description

This React App is considered to show all my (React) projects I did along my way to learn React (and other technologies).
easy to navigate, easy to read

## Folder Structure

```
src/
├── App.css
├── App.jsx
├── assets/
│   ├── fonts/
│   │   └── roboto/
│   ├── JSTnet-Logo.PNG
│   ├── react.svg
│   └── todo-list-snapshot.PNG
├── components/
│   ├── Card/ 
│   │   ├── Card-copy.css
│   │   ├── Card-copy2.css
│   │   ├── Card.css
│   │   └── Card.jsx
│   └── Navbar/
│       ├── Navbar.css
│       └── Navbar.jsx
├── data/
│   └── projectData.js
├── index.css
├── main.jsx
├── pages/
│   ├── 404.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Project02.jsx
│   ├── ReactTutorial-JSTnet/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── Card/
│   │   │   │   ├── Card-original.css
│   │   │   │   ├── Card.css
│   │   │   │   └── Card.jsx
│   │   │   └── Card2/
│   │   │       └── Card.jsx
│   │   ├── data/
│   │   │   └── projectData.js
│   │   ├── images/
│   │   │   ├── image1.png
│   │   │   ├── image2.png
│   │   │   └── image3.png
│   │   ├── pages/
│   │   │   ├── FavouriteBooks/
│   │   │   │   ├── Components/
│   │   │   │   │   └── Book/
│   │   │   │   │       ├── Book.css
│   │   │   │   │       └── Book.jsx
│   │   │   │   ├── FavouriteBooks.css
│   │   │   │   └── FavouriteBooks.jsx
│   │   │   ├── FavouriteBooksMapped.jsx
│   │   │   └── TodoList/
│   │   │       ├── App.jsx
│   │   │       └── TodoList.jsx
│   └── ToDoList/
│       ├── Components/
│       │   ├── App.jsx
│       │   ├── CSS/
│       │   │   ├── App.css
│       │   │   └── TodoItems.css
│       │   └── TodoItems.jsx
└── variables.css
```

Organisiere deine Projekte innerhalb einer einzigen React-App:

- `src/components`: Enthält wiederverwendbare Komponenten.
- `src/projects`: Enthält die spezifischen React-Übungsprojekte.
- `src/pages`: Enthält die Startseite und andere allgemeine Seiten (z.B. ein 404-Error-Page).

## Responsive Navbar Komponente mit Hamburger Menü

```js
// Navbar.jsx

import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Meine Projekte</div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Über</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
```

**Navbar.css**

```css
/* Grundlayout der Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 16px 32px;
  color: #fff;
  position: relative;
}

/* Logo-Stil */
.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Links (Desktopansicht) */
.navbar-links {
  list-style: none;
  display: flex; /* Standard: horizontal ausgerichtet */
  gap: 16px;
  margin: 0;
}

.navbar-links li a {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  transition: color 0.3s;
}

.navbar-links li a:hover {
  color: #ddd; /* Hover-Effekt */
}

/* Hamburger-Menü (nur für mobile Ansicht sichtbar) */
.navbar-hamburger {
  display: none; /* Nur mobil sichtbar */
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
}

.hamburger-bar {
  height: 3px;
  width: 100%;
  background-color: #fff;
}

/* Anpassungen für mobile Geräte */
@media (max-width: 768px) {
  /* Links (Mobilansicht standardmäßig ausgeblendet) */
  .navbar-links {
    display: none; /* Mobilstandard: ausgeblendet */
    flex-direction: column; /* Vertikale Ausrichtung */
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #444;
    padding: 16px;
    border-radius: 8px;
  }

  /* Sichtbare Links, wenn das Menü geöffnet ist */
  .navbar-links.open {
    display: flex;
  }

  /* Hamburger-Menü aktivieren */
  .navbar-hamburger {
    display: flex; /* Nur mobil aktiv */
  }
}
```

## **Integration von React Router**

### **1. React Router installieren**

    npm install react-router-dom

### **2. Router in die App integrieren**

Der **React Router** wird verwendet, um die Navigation zwischen verschiedenen Seiten oder Komponenten deiner App zu ermöglichen, basierend auf der URL. Wir beginnen, indem wir den `BrowserRouter` in deine `App.jsx` einfügen und damit die Navigation für verschiedene Seiten einrichten.

#### **Was ist der BrowserRouter?**

Der `BrowserRouter` ist ein Wrapper, der es ermöglicht, die URL der App zu verfolgen und die entsprechenden Inhalte basierend auf der Route anzuzeigen. Er wird in der Regel um die gesamte App gelegt.

---

### **So wird der Router hinzugefügt**

#### **1. Importieren der notwendigen Module**

Du musst folgende Module von `react-router-dom` importieren:

- `BrowserRouter` (benennen wir hier als `Router`): Das Haupt-Wrapper-Element.
- `Routes`: Ein Container für die einzelnen Routen.
- `Route`: Definiert, welche Komponente für eine bestimmte URL angezeigt wird.

**Code**

```js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
```

---

#### **2. BrowserRouter als Wrapper einfügen**

Der gesamte Inhalt der App wird von `Router` umgeben. Das bedeutet, dass die Navigation in allen Komponenten verfügbar ist.

```jsx
<Router>{/* Alle Routen und die Navbar werden hier eingefügt */}</Router>
```

---

#### **3. Routes und Route definieren**

- **`<Routes>`**: Ein Container, der alle `Route`-Komponenten enthält.
- **`<Route>`**: Eine Route definiert, welche Komponente bei einer bestimmten URL geladen wird. Jede Route hat zwei wichtige Eigenschaften:

  - **`path`**: Die URL, die die Route erkennt (z. B. `/project1`).
  - **`element`**: Die Komponente, die bei dieser Route angezeigt wird (z. B. `<Project1 />`).

  In der `App.jsx` der Haupt-App fügst du eine Route hinzu, die `Project01.jsx` rendert:

```jsx
<Route path="/project01" element={<Project01 />} />
```

```jsx
<Routes>
  {/* Definiere die Route für die Startseite */}
  <Route path="/" element={<Home />} />

  {/* Definiere die Route für Projekt 1 */}
  <Route path="/project1" element={<Project1 />} />

  {/* Definiere die Route für Projekt 2 */}
  <Route path="/project2" element={<Project2 />} />
</Routes>
```

---

#### **4. Zusammengesetzter Code für App.jsx**

Hier ist der vollständige Code für die Integration des Routers:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navigationsleiste
import Home from './pages/Home'; // Startseite
import Project1 from './pages/Project1'; // Projekt 1
import Project2 from './pages/Project2'; // Projekt 2

function App() {
  return (
    <Router>
      {/* Navbar ist immer sichtbar */}
      <Navbar />

      {/* Definiere die verschiedenen Routen */}
      <Routes>
        {/* Route für die Startseite */}
        <Route path="/" element={<Home />} />

        {/* Routen für Projekte */}
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

### **Warum ist dieser Schritt wichtig?**

1. **URL-basierte Navigation**: Mit dem Router kannst du verschiedene Seiten deiner App anzeigen, ohne die gesamte Seite neu zu laden.
2. **Komponentenstruktur**: Jede Route rendert nur die zugehörige Komponente. Das sorgt für Ordnung im Code.
3. **Modularität**: Jede Seite hat ihre eigene Komponente, was die Wartung erleichtert.

---

## `<Routes>` and `<Route>`

> In the provided code snippet, the `<Routes>` component is used to define the different routes for your React application. Each `<Route>` component within the `<Routes>` component specifies a path and the corresponding component that should be rendered when the user navigates to that path.

For example, the `<Route path="/" element={<Home />} />` line indicates that when the user navigates to the **root URL** ("/"), the Home component will be rendered.

Similarly, `<Route path="/about" element={<About />}` /> specifies that the About component will be displayed when the user navigates to the "/about" URL.

The `<Route path="/contact" element={<Contact />} />` line maps the "/contact" URL to the Contact component, and so on...

Finally, the `<Route path="*" element={<NotFound />} />` line acts as a **catch-all route**. It matches any URL that does not correspond to any of the specified paths and renders the NotFound component. This is useful for displaying a 404 error page or a custom message when the user navigates to an undefined route.

---

## **Klickbare Projektkarten auf der Startseite**

### **1. Projektliste erstellen**

```js
// projectData.js
const projects = [
  {
    id: 1,
    title: 'Projekt 01',
    description: 'Eine To-Do-Liste mit React.',
    route: '/project01',
  },
  {
    id: 2,
    title: 'Projekt 02',
    description: 'Ein Wetter-Widget mit React.',
    route: '/project02',
  },
  // Weitere Projekte hinzufügen ...
];

export default projects;
```

### **2. Card-Komponente erstellen**

```js
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, description, route }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Link zu der jeweiligen Projektseite */}
      <Link to={route} className="card-link">
        Mehr erfahren
      </Link>
    </div>
  );
};

export default Card;
```

### **3. Auf der Startseite (Home.jsx) werden die Projektkarten gerendert**

```js
import projects from './projectData'; // Import der Projektliste
import Card from '../../components/Card/Card'; // Import der Card-Komponente

const Home = () => {
  return (
    <div className="home">
      <h1>Meine Projekte</h1>
      <div className="home-grid">
        {projects.map((project) => (
          <Card key={project.id} title={project.title} description={project.description} route={project.route} />
        ))}
      </div>
    </div>
  );
};

export default Home;
```

## TO Do:

- Create repository

- Alternativen zu "Project Collector" (chatGTP)

- Mit **useNavigate** kannst du Benutzer durch Code zu einer anderen Seite leiten

- 6. Card auf der Home-Seite hinzufügen

```
src/
├── components/
│   ├───Card/
│   └───Navbar/
├── projects/
│   ├── Project1/  // true
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── Project2/  // true
│   │   ├── index.jsx
│   │   └── styles.css
│   └── ...
├── pages/
│   └───Project01/
|        │   Project01.jsx
|        │   main.jsx
|        └───Components/
|            │   Todo.jsx
|            │   TodoItems.jsx
|            ├───Assets/
|            │       cross.png
|            │       not_tick.png
|            │       tick.png
|            └───CSS/
|                    Todo.css
|                    TodoItems.css
├── App.jsx
└── index.jsx
```
