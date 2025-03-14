# Project Collector

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