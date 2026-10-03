/*
VITE — WHAT IS VITE?

Vite is a modern frontend build tool and development server
used to create and run frontend applications.

In simple words:

Vite gives us a ready-to-use development environment for
building React applications.

It handles things like:

- Creating the React project
- Running the development server
- Loading our files quickly
- Building the application for production
- Managing frontend assets and modules


REACT vs VITE

React and Vite are NOT the same thing.

React
    ↓
Used to build the UI
    ↓
Components, Props, State, Hooks, etc.

Vite
    ↓
Used to create, run and build the React project
    ↓
Development server + Build tool


REAL MERN EXAMPLE:

Suppose we want to build an E-commerce MERN application.

MERN:

MongoDB
    ↓
Database

Express.js + Node.js
    ↓
Backend

React.js
    ↓
Frontend

Vite
    ↓
Helps us create and run the React frontend project


REACT SETUP USING VITE

Instead of manually creating all React files and
configurations, Vite can create the basic project structure
for us.

Command:

npm create vite@latest


After running this command, Vite asks:

Project name:
    my-app

Select framework:
    React

Select variant:
    JavaScript

Then we get a React project with the required basic setup.


TYPICAL SETUP:

Step 1 — Create React project

npm create vite@latest my-app


Step 2 — Move inside the project

cd my-app


Step 3 — Install dependencies

npm install


Step 4 — Start development server

npm run dev


Now Vite starts a development server and gives us a local URL,
for example:

http://localhost:5173


We open this URL in the browser and see our React application.


WHAT HAPPENS INTERNALLY?

When we run:

npm create vite@latest my-app

Vite creates the basic project structure.

Then:

npm install

installs the required packages from package.json.

Then:

npm run dev

starts Vite's development server.

Flow:

Create Project
      ↓
npm create vite@latest
      ↓
Vite creates React project
      ↓
npm install
      ↓
Dependencies installed
      ↓
npm run dev
      ↓
Vite development server starts
      ↓
React application runs in browser


IMPORTANT FILES IN A VITE + REACT PROJECT:

my-app/
│
├── node_modules/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js


IMPORTANT FILES:

src/App.jsx
    ↓
Main React component where we usually start building
the application UI.

src/main.jsx
    ↓
Entry point of the React application.
It connects the React application to the HTML page.

index.html
    ↓
The HTML page where the React application is mounted.

package.json
    ↓
Contains project information, dependencies and scripts.

vite.config.js
    ↓
Contains Vite configuration.

node_modules/
    ↓
Contains installed packages/dependencies.


WHY DO WE USE VITE?

1. FAST DEVELOPMENT SERVER

Vite starts the development server very quickly.

2. FAST UPDATES

When we change our React code, Vite can update the browser
quickly without rebuilding the entire application.

3. EASY SETUP

Vite creates the basic React project structure for us.

4. PRODUCTION BUILD

Vite can create an optimized production version of our
frontend application.

Command:

npm run build


5. MODERN TOOLING

Vite works well with modern JavaScript, React and frontend
development workflows.


REAL INDUSTRY MENTAL MODEL:

Think of it like this:

React = The tool we use to build the UI

Vite = The tool that sets up and runs our React project


For example:

React:
    "I will create the ProductCard, Navbar, Cart, Login page."

Vite:
    "I will create the project environment, run your
     development server and build the application."


INTERVIEW ANSWER:

Vite is a modern frontend build tool and development server
commonly used with React. It provides fast development
startup, fast updates during development, and optimized
production builds.

React is responsible for building the UI, while Vite provides
the development and build environment for the React project.


ONE-LINE MEMORY:

React = Builds the UI

Vite = Creates, runs and builds the React project
*/