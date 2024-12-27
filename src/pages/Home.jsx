import Card from "../components/Card/Card";

export default function Home() {
  return (
    <div id="home" className="home">
      <h1>Meine Übungsprojekte</h1>
      <div className="card-container">
        <Card title="Projekt 1" description="Beschreibung des Projekts 1" />
        <Card title="Projekt 2" description="Beschreibung des Projekts 2" />
        <Card title="Projekt 3" description="Beschreibung des Projekts 3" />
      </div>
    </div>
  );
}