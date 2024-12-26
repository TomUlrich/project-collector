// import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Meine Übungsprojekte</h1>
      <div className="card-container">
        <Card title="Projekt 1" description="Beschreibung des Projekts 1" />
        <Card title="Projekt 2" description="Beschreibung des Projekts 2" />
        <Card title="Projekt 3" description="Beschreibung des Projekts 3" />
      </div>
    </div>
  );
}

export default App;
