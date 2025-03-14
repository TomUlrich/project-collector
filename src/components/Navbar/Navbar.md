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