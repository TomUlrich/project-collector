// #! use route as props in Card.jsx
// imported by ../ReactTutorial/ReactTutorial.jsx

const lessonData = [
  {
    title: 'Props',
    description: 'Learn to pass data from the parent component to child components using props.',
    route: '/react-tutorial/props/',
    // #? why not image: '../images/nonfiction-books.jpg',
    image: '/src/projects/ReactTutorial/images/nonfiction-books.jpg',
    tutorialURL: 'https://www.javascripttutorial.net/react-tutorial/react-props/',
  },
  {
    title: 'Key Prop',
    description: 'Rendering a list properly using a key prop.',
    route: '/react-tutorial/key-prop/',
    image: '/src/projects/ReactTutorial/images/fiction-books.jpg',
    tutorialURL: 'https://www.javascripttutorial.net/react-tutorial/react-jsx-key/',
  },
  {
    title: 'Conditional Rendering',
    description: 'Learn how to render JSX elements based on a condition.',
    route: '/react-tutorial/conditional-rendering/',
    image: '/src/projects/ReactTutorial/images/fiction-books.jpg',
    tutorialURL: 'https://www.javascripttutorial.net/react-tutorial/react-conditional-rendering/',
  },
];

export default lessonData;
