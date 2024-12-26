// import React from 'react';
import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <h1>Meine Übungsprojekte</h1>
      <Card title="Projekt 1" description="Beschreibung des Projekts 1" />
      <Card title="Projekt 2" description="Beschreibung des Projekts 2" />
    </div>
  );
}

export default App;
