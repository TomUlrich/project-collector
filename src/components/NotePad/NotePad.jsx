import './NotePad.css';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // #? React Router Hook für die aktuelle Route

const NotePad = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const location = useLocation(); // ## Holt die aktuelle Route
  const currentPath = location.pathname; // Eindeutige Route für jede Seite

  useEffect(() => {
    const savedNotes = localStorage.getItem(`notes_${currentPath}`);
    setNotes(savedNotes || ""); // Falls noch nichts gespeichert ist, leer setzen
  }, [currentPath]);

  const handleSave = () => {
    localStorage.setItem(`notes_${currentPath}`, notes);
  };

  return (
    <div className="notepad-container">
      <button className="notepad-button" onClick={() => setIsOpen(!isOpen)}>
        📝 Notes
      </button>

      {isOpen && (
        <div className="notepad">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Hier deine Notizen eingeben..."
          />
          <button onClick={handleSave}>Speichern</button>
        </div>
      )}
    </div>
  );
};

export default NotePad;
