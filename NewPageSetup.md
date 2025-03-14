# New Page Setup

## 1. Define Route for each new page

```jsx
// src/App.jsx

import KeyProp from './projects/ReactTutorial/lessons/GettingStarted/KeyProp';

<Routes>
  <Route path="/react-tutorial/key-prop/" element={<KeyProp />} />
</Routes>;
```

### 1.1 Optionally add Navbar Link

```jsx
// src/components/Navbar/Navbar.jsx

<li>
  <Link to="/react-tutorial/">React Tutorial</Link>
</li>
```

## 2 New project or lesson 

### 2.1 New PROJECT

```jsx
// src/projects/data/projectData.js

const projectData = [
  {
    title: 'Project Title',
    description: 'Project Description',
    route: '/project-route/',
    image: 'src/assets/images/project-snapshot.PNG',
  },
];
```

### 2.2 New LESSON (only for ReactTutorial project)

```jsx
// src/projects/ReactTutorial/data/lessonData.js

const lessonData = [
  {
    title: 'Lesson Title',
    description: 'Lesson Description',
    route: '/react-tutorial/lesson-route/',
    image: '/src/projects/ReactTutorial/images/lesson-screenshot.jpg',
    tutorialURL: 'https://www.javascripttutorial.net/react-tutorial/lesson-url/',
  },
];
```