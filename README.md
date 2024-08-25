# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# React Fundamentals

#### Reference: React Course by John Smilga

[URL](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

#### Folder Structure

- node_modules
  Contains all dependencies required by the app. Main dependencies also listed in package.json

- public
  Contains static assets including index.html (page template)
  - index.html
    - title
    - fonts
    - css
    - favicon
    - id="root" - our entire app
- src
  In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.
- .gitignore
  Specifies which files source control (Git) should ignore

- package.json
  Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts

- package-lock.json
  A snapshot of the entire dependency tree

- README
  The markdown file where you can share more info about the project for example build instructions and summary

- zoom 175%

#### Remove Boilerplate

- remove src folder
- create src folder

  - create index.js inside src

- toggle sidebar CMD + B
- shortcuts settings/keyboard shortcuts

#### Typical React Component

- starts with capital letter
- must return JSX (html)
- always close tag <Greeting/>

```js
// imports or logic

const Greeting = () => {
  return <h2>My First Component</h2>;
};
export default Greeting;
```

##### Root Component (only one)

index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return <h2>My First Component</h2>;
}

const theElement = document.getElementById("root");
const root = ReactDOM.createRoot(theElement);

root.render(<Greeting />);
```

#### Possible Bug

If for some reason you still have this error in the terminal

```
Module not found: Error: Can't resolve 'path/index.js'
```

Just restart the server

- CTRL + C (stop the server)
- "npm start" (start the dev server)

#### Extensions and settings.json

- Auto Rename Tag
- Highlight Matching Tag
  - customize in settings.json
- Prettier
  - format on save
  - format on paste
  - Default Formatter (Prettier - Code formatter)

settings.json

```json
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.singleQuote": true,
    "prettier.semi": false,
```

- Emmet

settings.json

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
```

- ES7 Snippets
  - rafce (arrow func with export)
  - rfce (regular func with export )
  - same as the file name
  - react auto import
    - uncheck
    - React Snippets › Settings: Import React On Top

#### First Component in Detail

- capital letter
- must return something
- JSX syntax (return html)
  - to make our lives easier
  - calling function under the hood

index.js

```js
const Greeting = () => {
  return React.createElement("h2", {}, "hello world");
};
```

```js
function Greeting() {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}

const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "hello world")
  );
};
```

#### JSX Rules

- return single element (one parent element)

  - semantics section/article
  - Fragment - let's us group elements without adding extra nodes

```js
return <React.Fragment>...rest of the return</React.Fragment>;

// shorthand

return <>...rest of the return</>;
```

- camelCase property naming convention

```js
return (
  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
```

- className instead of class

```js
return <div className="someValue">hello</div>;
```

- close every element

```js
return <img />;
// or
return <input />;
```

- formatting
  - opening tag in the same line as return or ()

```js
function Greeting() {
  return (
    <>
      <div className="someValue">
        <h3>hello people</h3>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <input type="text" name="" id="" />
    </>
  );
}
```

#### Nest Components

```js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};
```

#### React Developer Tools

- top right corner
- more tools/extensions
- open chrome web store

- whatever assets we place in public - instantly available
- domain(localhost)/asset

#### JSX - CSS (inline styles)

- style prop
- {} in JSX means going back to JS Land
- value is an object with key/value pairs - capitalized and with ''

#### Props - Initial Setup

- props object, convention to call props, 'shakeAndBake' is an excellent alternative

- pass as key/value pairs
- if the prop exists it will return value, otherwise no value

#### Props - Somewhat Dynamic Setup

- setup an object
- refactor vars to properties
- copy/paste and rename
- get values for second book
- setup props

- no need for all the props.propName
- destructure inside component
- destructure in function parameters (in our case props)
- if you have console.log(props) - it won't be defined

```js
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

#### Children Prop

- everything we render between component tags
- during the course we will mostly use it Context API
- special prop, has to be "children"
- can place anywhere in JSX

```js
function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // rest of the logic
};
const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};
```

#### Simple List

- can't render objects in React
- map - creates a new array from calling a function for every array element.

#### Proper List

- remove names and newNames

- render component
- pass properties one by one

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}
```

#### Key Prop

- typically it's going to be id

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        const { img, title, author, id } = book;
        return <Book book={book} key={id} />;
      })}
    </section>
  );
}
```

- you will see index,but it's not advised if the list is changing

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        console.log(book);
        const { img, title, author, id } = book;
        return <Book book={book} key={index} />;
      })}
    </section>
  );
}
```

#### Pass The Entire Object

- render component
- pass entire object
- Destructuring (object)

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        const { img, title, author } = book;
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

- alternative

```js
const Book = ({ book: { img, title, author } }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

#### Personal Preference

- utilize spread operator (...) - copy values
- Spread Operator

```js
// COPY NOT A REFERENCE !!!!
const newObject = { ...someObject, location: "florida" };
console.log(someObject);
console.log(newObject);
```

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
const Book = ({ img, title, author }) => {
  // rest of the code
};
```

#### Events - Fundamentals

- Vanilla JS

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  // access event object
  // do something when event fires
});
```

- similar approach
- element, event, function
- again camelCase

```js
const EventExamples = () => {
  const handleButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

- [React Events](https://reactjs.org/docs/events.html)
- no need to memorize them(idea is the same)
- most common
  - onClick (click events)
  - onSubmit (submit form )
  - onChange (input change )

#### Event Object and Form Submission

```js
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        {/* add button with type='submit' */}
        <button type="submit">submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

- alternative approach

```js
<button type="submit" onClick={handleFormSubmission}>
  submit form
</button>
```

#### Mind Grenade

- alternative approach
- pass anonymous function (in this case arrow function)
- one liner - less code
- also can access event object

```js
const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={() => console.log("you clicked me")}>click me</button>
    </section>
  );
};
```

- components are independent by default

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author} </h4>
    </article>
  );
};
```

- remove button

#### Prop Drilling

- react data flow - can only pass props down
- alternatives Context API, redux, other state libraries

```js
function BookList() {
  const someValue = "shakeAndBake";
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, displayValue } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>click me</button>
      <h4>{author} </h4>
    </article>
  );
};
```

```js
const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <button onClick={() => getBook(id)}>display title</button>
      <h4>{author}</h4>
    </article>
  );
};
```

#### Import and Export Statements

- setup two files in src books.js and Book.js
- cut books array from index.js
- add to books.js

books.js

```js
const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];
```

- two flavors named and default exports

  - with named exports names MUST match
  - with default exports,can rename but only one per file

- named export

```js
export const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];
```

index.js

```js
import { books } from "./books";
```

- default export

```js
const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>
    </article>
  );
};

export default Book;
```

index.js

```js
import Book from "./Book";
```

#### Local Images (src folder)

- better performance because optimized
- add one more book to array
- download all three images (rename)
- setup images folder in the src
- import all three images in the books.js
- set image property equal to import
- and yes each image requires new import

```js
import img1 from "./images/book-1.jpg";
import img2 from "./images/book-2.jpg";
import img3 from "./images/book-3.jpg";

export const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: img1,
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: img2,
    id: 2,
  },
  {
    author: "Stephen King",
    title: "Fairy Tale",
    img: img3,
    id: 3,
  },
];
```

#### Build Production Application

- stop the dev server "ctrl + c"
- run "npm run build"
- build folder gets created

#### Netlify

- sign up
- add new site/deploy manually
- choose build folder
- rename site - site settings/change site name

#### Create-React-App Boilerplate (src)

- index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

// styles (typically global)
import "./index.css";

// convention to name it App and setup in a separate file
import App from "./App";
// import report web vitals
import reportWebVitals from "./reportWebVitals";

// StrictMode

// StrictMode is a tool for highlighting potential problems in an application.Activates additional checks and warnings for its descendants.Runs only in Development, does not impact the production build. RENDERS TWICE !!! Possible to remove.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

- remove in src

  - setupTests.js
  - reportWebVitals.js
  - App.test.js

- be careful with multiple css files

App.js

```js
function App() {
  return <h1>backroads app</h1>;
}

export default App;
```

- remove
  - remove logo.svg
  - App.css

#### Vite Docs

(Vite)[https://vitejs.dev/]

#### Vite Install

```sh
npm create vite@latest app-name -- --template react
npm install
npm run dev
```

- http://localhost:5173/

#### Vite Setup

- need to use .jsx extension
- index.html in the source instead of public
- assets still in public
- instead of index.js, need to use main.jsx
- to spin up dev server - "npm run dev"

- rest the same - imports/exports, deployment, assets, etc...
