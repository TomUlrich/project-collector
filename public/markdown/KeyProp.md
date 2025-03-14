# Learned Concepts

## KeyProp

**Test Codeblock**

```jsx
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const KeyProp = ({ title, description, route, image, tutorialURL }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={`${title} preview`} />
    </div>
  );
};

export default KeyProp;
```
