# Project Collector File Structure

## 1. Homepage

### _1.1 src/**App.jsx**_

Define the routes and Components for all pages:

```js
    import Home from './pages/Home';
    // Todo List:
    import TodoListApp from './pages/ToDoList/Components/App';
    // JST - React Tutorial
    import ReactTutorial from './pages/ReactTutorial-JSTnet/App';
    import FavouriteBooks from './pages/ReactTutorial-JSTnet/pages/FavouriteBooks/FavouriteBooks';
    import FavouriteBooksMapped from './pages/ReactTutorial-JSTnet/pages/FavouriteBooks/FavouriteBooksMapped';

    <Route path='/' element={<Home />} />
    <Route path='/react-tutorial' element={<ReactTutorial />} />
    <Route path='/react-tutorial/favouritebooks' element={<FavouriteBooks />} />
    <Route path='/react-tutorial/favouritebooksmapped' element={<FavouriteBooksMapped />} />
```

### _1.2 src/pages/**Home.jsx**_

The homepage.  
Map over `projectData` and render `<Card />` components to display all project links as cards:

```js
import projectData from '../data/projectData';
import Card from '../components/Card/Card';

{
  projectData.map((project) => (
    <Card key={crypto.randomUUID()} title={project.title} description={project.description} route={project.route} image={project.image} />
  ));
}
```

#### _1.2.1 src/data/**projectData.js**_

`Home.jsx` imports the `projectData` and uses it as **props** for `<Card />` components:

```js
const projectData = [
  {
    title: 'To-Do-List',
    description: 'Eine To-Do-Liste mit React.',
    route: '/todo-list',
    image: 'src/assets/todo-list-snapshot.PNG',
  },
  {
    title: 'React Tutorial by JavaScriptTutorial.net',
    description: 'React Tutorial by JavaScriptTutorial.net including projects.',
    route: '/react-tutorial',
    image: 'src/assets/JSTnet-Logo.png',
  },
];
```

#### _1.2.2 src/components/Card/**Card.jsx**_

imported by `Home.jsx`

```jsx
// props from projectData via App.jsx

const Card = ({ title, description, route, image }) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={`${title} preview`} />
      <div className="card-content">

        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={route} className="card-link">
          Mehr erfahren
        </Link>
      </div>
    </div>
  );
};
```

---



│ ├── ReactTutorial-JSTnet/
│ │ ├── App.css
│ │ ├── App.jsx
│ │ ├── components/
│ │ │ ├── Card/
│ │ │ │ ├── Card-original.css
│ │ │ │ ├── Card.css
│ │ │ │ └── Card.jsx
│ │ │ └── Card2/
│ │ │ └── Card.jsx
│ │ ├── data/
│ │ │ └── projectData.js
│ │ ├── images/
│ │ │ ├── image1.png
│ │ │ ├── image2.png
│ │ │ └── image3.png
│ │ ├── pages/
│ │ │ ├── FavouriteBooks/
│ │ │ │ ├── Components/
│ │ │ │ │ └── Book/
│ │ │ │ │ ├── Book.css
│ │ │ │ │ └── Book.jsx
│ │ │ │ ├── FavouriteBooks.css
│ │ │ │ └── FavouriteBooks.jsx
│ │ │ ├── FavouriteBooksMapped.jsx
│ │ │ └── TodoList/
│ │ │ ├── App.jsx
│ │ │ └── TodoList.jsx
│ └── ToDoList/
│ ├── Components/
│ │ ├── App.jsx
│ │ ├── CSS/
│ │ │ ├── App.css
│ │ │ └── TodoItems.css
│ │ └── TodoItems.jsx
└── variables.css
