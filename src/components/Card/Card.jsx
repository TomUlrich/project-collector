import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import marked from "/src/utils/markdownConfig";
import hljs from "highlight.js"; // Import Highlight.js for code highlighting
import MarkdownOverlay from "../MarkdownOverlay/MarkdownOverlay"; // Import the overlay component
import styles from "./Card.module.css";

const Card = ({ title, description, route, image, markdown }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [markdownContent, setMarkdownContent] = useState("");

  // Fetch and sanitize markdown content when the overlay is shown
  useEffect(() => {
    if (showOverlay && markdown) {
      fetch(markdown)
        .then((res) => res.text())
        .then((text) => {
          const htmlContent = marked(text);
          const sanitizedContent = DOMPurify.sanitize(htmlContent);
          setMarkdownContent(sanitizedContent);
        })
        .catch((error) => {
          console.error(`Error fetching markdown content: ${error}`);
        });
    }
  }, [showOverlay, markdown]);

  // Highlight code blocks in the markdown content
  useEffect(() => {
    if (markdownContent) {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block);
      });
    }
  }, [markdownContent]);

  // Function to handle closing the overlay
  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setMarkdownContent(""); // Reset markdown content
  };

  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={`${title} preview`} />

      <div className={styles.textColumn}>
        <div className={styles.cardTextContainer}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.cardLinkContainer}>
          <Link to={route} className={styles.cardLink}>View App</Link>
          <button onClick={() => setShowOverlay(true)} className={styles.cardLink}>README.md</button>
        </div>
      </div>

      {/* Use the overlay component */}
      {showOverlay && <MarkdownOverlay markdownContent={markdownContent} onClose={handleCloseOverlay} />}
    </div>
  );
};

export default Card;