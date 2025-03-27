import styles from "./MarkdownOverlay.module.css";

const MarkdownOverlay = ({ markdownContent, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent}>
        {/* Close button to hide the overlay */}
        <button onClick={onClose} className={styles.closeButton}>X</button>
        
        {/* Render the sanitized markdown content */}
        <div
          className={styles.markdownContent}
          dangerouslySetInnerHTML={{ __html: markdownContent }}
        />
      </div>
    </div>
  );
};

export default MarkdownOverlay;