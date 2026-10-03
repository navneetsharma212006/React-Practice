/*
REACT + VITE PROJECT STRUCTURE
==============================

When we create a React project using Vite:

npm create vite@latest my-app

Vite creates a basic project structure for us.

my-app/
│
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js


==================================================
1. node_modules/
==================================================

node_modules contains all the packages that our project needs.

For example:

- React
- React DOM
- Vite
- ESLint
- Other installed packages

When we run:

npm install

npm reads package.json and downloads the required packages
into node_modules.

Example:

package.json
     ↓
npm install
     ↓
node_modules/
     ├── react/
     ├── react-dom/
     ├── vite/
     └── other packages


IMPORTANT:

We normally do not edit node_modules manually.

We also normally do not push node_modules to GitHub because:

- It can be very large.
- It can be recreated using npm install.


==================================================
2. public/
==================================================

public is used for static files.

Static files are files that we want to access directly
without importing them into our JavaScript/React code.

Example:

public/
├── logo.png
├── favicon.ico
└── robots.txt


If logo.png is inside public:

public/logo.png

We can use:

<img src="/logo.png" />


Notice:

We do NOT write:

import logo from "./assets/logo.png";


That is because the file is inside public.

Simple idea:

public/
→ Files are served directly.

src/assets/
→ Files are imported into React code.


==================================================
3. src/
==================================================

src means "source".

This is the MOST IMPORTANT folder in a React project.

Most of our actual React development happens inside src.

For example:

src/
├── components/
├── pages/
├── assets/
├── App.jsx
├── App.css
├── main.jsx
└── index.css


As our project grows, we create more folders inside src.

For example:

src/
├── components/
├── pages/
├── hooks/
├── services/
├── context/
├── assets/
└── utils/


So:

src
→ Contains the source code of our React application.


==================================================
4. src/main.jsx
==================================================

main.jsx is the ENTRY POINT of our React application.

ENTRY POINT means:

The place from where React starts executing our application.

A basic main.jsx looks like:

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);


Let's understand it step by step.


------------------------------
Step 1: Import React functionality
------------------------------

import { StrictMode } from 'react';


StrictMode helps us detect certain problems during development.

It is mainly useful while developing the application.


------------------------------
Step 2: Import createRoot
------------------------------

import { createRoot } from 'react-dom/client';


createRoot() is used to create the React root.

In simple words:

It tells React:

"Start managing this part of the HTML page."


------------------------------
Step 3: Import App
------------------------------

import App from './App.jsx';


Here we are importing our main React component.

So main.jsx knows about App.jsx.


------------------------------
Step 4: Import global CSS
------------------------------

import './index.css';


This loads the global CSS of our application.


------------------------------
Step 5: Find the root element
------------------------------

document.getElementById('root')


This searches for:

<div id="root"></div>

inside index.html.


------------------------------
Step 6: Render App
------------------------------

<App />

means:

"Display the App component here."


So:

createRoot(document.getElementById('root'))
    .render(<App />);


means:

Find the root div
      ↓
Create React root there
      ↓
Render App component inside it


==================================================
5. index.html
==================================================

index.html is the basic HTML page of our Vite project.

It contains the HTML structure that the browser initially loads.

Important part:

<div id="root"></div>


This is the container where React will be displayed.


Think of it like this:

HTML gives React an empty container:

<div id="root"></div>

React then puts our application inside it.


The connection is:

index.html
    ↓
<div id="root"></div>
    ↓
main.jsx finds "root"
    ↓
<App /> is rendered there


IMPORTANT:

React does NOT create a completely separate HTML page
for every component.

Instead, React manages the UI inside the root element.


==================================================
6. src/App.jsx
==================================================

App.jsx is our main/root React component.

A simple App.jsx:

function App() {
    return (
        <h1>Hello World</h1>
    );
}

export default App;


Here:

function App()
→ Creates a React component.

return (...)
→ Returns the UI that should be displayed.

export default App
→ Allows other files to import App.


main.jsx imports it:

import App from './App.jsx';


Then:

<App />


is rendered.


So the relationship is:

main.jsx
    ↓
imports App.jsx
    ↓
<App />
    ↓
App component UI


==================================================
7. COMPONENTS
==================================================

In a real project, we should not put the entire application
inside App.jsx.

We create smaller reusable components.

Example:

src/
├── components/
│   ├── Navbar.jsx
│   ├── Button.jsx
│   └── Card.jsx
│
├── App.jsx
└── main.jsx


Navbar.jsx:

function Navbar() {
    return (
        <nav>
            My Website
        </nav>
    );
}

export default Navbar;


Then App.jsx can use it:

import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <h1>Home Page</h1>
        </>
    );
}

export default App;


Now the flow becomes:

main.jsx
    ↓
App.jsx
    ↓
Navbar.jsx
    ↓
UI


This is one of the main ideas of React:

BREAK THE UI INTO SMALL REUSABLE COMPONENTS.


==================================================
8. src/App.css
==================================================

App.css contains CSS that is commonly used for
the App component.

Example:

h1 {
    font-size: 30px;
}

button {
    padding: 10px 20px;
}


App.jsx can import it:

import './App.css';


Then the CSS becomes available to the application.


IMPORTANT:

CSS files are separate from JSX.

JSX
→ Structure/UI

CSS
→ Styling


==================================================
9. src/index.css
==================================================

index.css is generally used for GLOBAL CSS.

Global CSS means styling that can affect the entire application.

Example:

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

button {
    cursor: pointer;
}


Because main.jsx imports index.css:

import './index.css';


the CSS is loaded when our React application starts.


Difference:

index.css
→ Global styling

App.css
→ Styling commonly related to App/UI


In larger projects, we can also create separate CSS files
for individual components.


==================================================
10. src/assets/
==================================================

assets contains files that are used by our source code.

Examples:

src/
└── assets/
    ├── logo.png
    ├── profile.jpg
    ├── react.svg
    └── icons/


We can import an asset:

import logo from './assets/logo.png';


Then use it:

<img src={logo} />


Why import it?

Because Vite processes files inside src/assets during the build.

Vite can optimize and manage these files for us.


Simple difference:

public/
→ Directly accessible files

src/assets/
→ Assets imported and processed by Vite


==================================================
11. package.json
==================================================

package.json is one of the MOST IMPORTANT files
in a Node/React project.

It contains information about:

- Project name
- Project version
- Scripts
- Dependencies
- Development dependencies


Example:

{
    "name": "my-app",

    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    },

    "dependencies": {
        "react": "...",
        "react-dom": "..."
    }
}


Let's understand scripts.


------------------------------
npm run dev
------------------------------

Runs the Vite development server.

Usually:

npm run dev

Then Vite gives us a local URL such as:

http://localhost:5173


We use this while developing.


------------------------------
npm run build
------------------------------

Creates a production build.

The code is optimized so that it can be deployed.


------------------------------
npm run preview
------------------------------

Used to preview the production build locally.


==================================================
12. package-lock.json
==================================================

package-lock.json stores the exact dependency information.

For example:

package.json might say:

"react": "^19.0.0"


The ^ means npm can install a compatible newer version.

package-lock.json records the exact version that was
actually installed along with dependency information.


Why is this useful?

Suppose:

Developer A
→ installs the project

Developer B
→ installs the same project

The lock file helps npm install consistent dependency versions.


IMPORTANT:

Normally, we don't manually edit package-lock.json.


==================================================
13. vite.config.js
==================================================

vite.config.js contains Vite configuration.

Vite is the build tool and development server
we are using for our React project.

Example:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()]
});


Here:

defineConfig()
→ Used to define Vite configuration.

react()
→ Adds React support to Vite.

plugins
→ Tells Vite which plugins to use.


Later, we can configure things like:

- Aliases
- Plugins
- Development server
- Build options
- Proxy


For example, while working with a backend:

Frontend:
http://localhost:5173

Backend:
http://localhost:5000

We can configure Vite to proxy API requests.


==================================================
14. eslint.config.js
==================================================

ESLint is a tool that checks our JavaScript/React code
for possible problems.

For example, it can detect:

- Unused variables
- Certain coding mistakes
- Incorrect patterns
- Code quality issues


Example:

const name = "Navneet";

If name is never used, ESLint may warn us about it.


ESLint does NOT run our React application.

Its job is mainly:

Check our code
    ↓
Find possible problems
    ↓
Give warnings/errors


==================================================
15. .gitignore
==================================================

.gitignore tells Git which files/folders should NOT
be tracked.

For example:

node_modules/


When we push our React project to GitHub:

Git sees:

node_modules/

and ignores it because it is written in .gitignore.


Usually we don't push:

node_modules/
environment files containing secrets
build/cache files


==================================================
COMPLETE PROJECT FLOW
==================================================

This is the MOST IMPORTANT part to understand.


Step 1:

Browser requests our website.

        ↓

Step 2:

Vite serves index.html.

        ↓

index.html contains:

<div id="root"></div>

        ↓

Step 3:

index.html loads main.jsx.

        ↓

Step 4:

main.jsx finds:

<div id="root"></div>

        ↓

Step 5:

main.jsx renders:

<App />

        ↓

Step 6:

App.jsx runs.

        ↓

Step 7:

App.jsx can use other components:

Navbar
Card
Button
Footer
etc.

        ↓

Step 8:

React creates/updates the UI inside:

<div id="root"></div>

        ↓

Browser displays the final UI.


==================================================
VISUAL FLOW
==================================================

                    index.html
                        │
                        │
                        ▼
                 <div id="root">
                        │
                        │
                        ▼
                    main.jsx
                        │
                        │
                        ▼
                     App.jsx
                        │
            ┌───────────┼───────────┐
            ▼           ▼           ▼
         Navbar        Card       Footer
            │           │           │
            └───────────┼───────────┘
                        │
                        ▼
                    Final UI


==================================================
REAL-WORLD PROJECT STRUCTURE
==================================================

After working on React projects for some time,
our structure may look like:

src/
│
├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│   ├── Navbar.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Dashboard.jsx
│
├── hooks/
│   └── useAuth.js
│
├── services/
│   └── api.js
│
├── context/
│   └── AuthContext.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx


What each folder means:

components/
→ Reusable UI pieces.

pages/
→ Complete screens/pages.

hooks/
→ Custom React hooks.

services/
→ API/backend communication.

context/
→ Shared/global state.

assets/
→ Images, icons, fonts, etc.

App.jsx
→ Main application component.

main.jsx
→ Entry point.


==================================================
EASY WAY TO REMEMBER
==================================================

index.html
→ Gives React a place to render.

main.jsx
→ Starts React.

App.jsx
→ Main component.

components/
→ Small reusable UI pieces.

pages/
→ Complete application screens.

assets/
→ Images and other files.

index.css
→ Global styling.

App.css
→ App-related styling.

package.json
→ Dependencies + commands.

package-lock.json
→ Exact dependency versions.

vite.config.js
→ Vite configuration.

eslint.config.js
→ Code checking rules.

public/
→ Directly accessible static files.

node_modules/
→ Installed packages.


==================================================
MOST IMPORTANT CONCEPT
==================================================

Remember this:

Vite is NOT React.

React
→ JavaScript library used to build UI.

Vite
→ Development/build tool used to run and build
  our React application quickly.


So when we create:

React + Vite

we are basically using:

React
+
Vite
+
JavaScript
+
HTML
+
CSS


Vite helps us during development and production build,
while React is responsible for creating the UI.
*/