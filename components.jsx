/*
REACT COMPONENTS
================

Components are one of the MOST IMPORTANT concepts in React.

A React application is built by dividing the UI
into small, reusable pieces called COMPONENTS.


==================================================
1. WHAT IS A COMPONENT?
==================================================

A component is a reusable piece of UI.

For example, imagine we are building an e-commerce
website.

The website may have:

Navbar
Product Card
Search Bar
Button
Sidebar
Footer
Login Form
Cart

Instead of writing everything inside one large file,
we create separate components.

Example:

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── ProductCard.jsx
│   ├── Button.jsx
│   └── Footer.jsx
│
└── App.jsx


Each component handles a particular part of the UI.


Simple definition:

Component = Reusable UI building block.


==================================================
2. REAL-LIFE EXAMPLE
==================================================

Think about building a house.

A house contains:

Door
Window
Room
Kitchen
Bathroom
Stairs

Instead of treating the entire house as one huge thing,
we divide it into smaller parts.

React applications work in a similar way.

Website
   │
   ├── Navbar
   ├── Sidebar
   ├── Main Content
   │      ├── Product Card
   │      ├── Product Card
   │      └── Product Card
   │
   └── Footer


Each part can be a component.


==================================================
3. SIMPLE COMPONENT
==================================================

A React component is commonly created using
a JavaScript function.

Example:

function Welcome() {

    return (
        <h1>Hello World</h1>
    );

}

export default Welcome;


Here:

function Welcome()
→ This is our component.

return
→ Returns the UI.

<h1>Hello World</h1>
→ JSX.

export default Welcome
→ Allows us to use this component in another file.


==================================================
4. HOW DO WE USE A COMPONENT?
==================================================

Suppose we create:

Welcome.jsx

function Welcome() {

    return (
        <h1>Hello World</h1>
    );

}

export default Welcome;


Now we can import it into App.jsx:

import Welcome from "./Welcome";

function App() {

    return (
        <div>
            <Welcome />
        </div>
    );

}

export default App;


Here:

<Welcome />

is using the Welcome component.


So the flow is:

Welcome.jsx
     ↓
Create component
     ↓
Export component
     ↓
App.jsx imports it
     ↓
<Welcome />
     ↓
Component appears in UI


==================================================
5. COMPONENTS SHOULD START WITH CAPITAL LETTER
==================================================

React components normally start with a CAPITAL letter.

Correct:

function Navbar() {

    return <nav>Navbar</nav>;

}


Incorrect:

function navbar() {

    return <nav>Navbar</nav>;

}


Then:

<Navbar />


Why capital letter?

React uses capitalization to distinguish
components from normal HTML elements.

For example:

<div>
→ HTML element

<button>
→ HTML element

<Navbar>
→ React component

<ProductCard>
→ React component


So:

Lowercase
→ Usually HTML element

Uppercase
→ React component


==================================================
6. WHY DO WE USE COMPONENTS?
==================================================

There are several important reasons.


------------------------------
1. REUSABILITY
------------------------------

Suppose our website has 20 product cards.

Without components, we might have to write
similar UI again and again.

With a component:

<ProductCard />

we can reuse it multiple times.


Example:

<ProductCard />
<ProductCard />
<ProductCard />


Same component
→ Different products.


------------------------------
2. CODE ORGANIZATION
------------------------------

Instead of one huge App.jsx:

App.jsx
→ 2000 lines


we can divide it:

Navbar.jsx
ProductCard.jsx
Sidebar.jsx
Footer.jsx


This makes the project easier to understand.


------------------------------
3. MAINTAINABILITY
------------------------------

Suppose the design of our button needs to change.

If we have a reusable Button component:

<Button />


we can change the Button component once.

All places using it can use the updated version.


------------------------------
4. REUSABLE LOGIC/UI
------------------------------

A component can contain:

- JSX
- JavaScript logic
- State
- Event handlers
- API-related logic
- Styling


This allows us to create independent UI pieces.


==================================================
7. REAL INDUSTRY EXAMPLE — E-COMMERCE
==================================================

Imagine we are building an Amazon-like website.

Our page looks like:

--------------------------------------------------
| Logo | Search Bar | Account | Cart             |
--------------------------------------------------

| Sidebar | Product | Product | Product         |
|         | Card    | Card    | Card            |
|         |         |        |                 |
--------------------------------------------------

|                    Footer                       |
--------------------------------------------------


We can divide this into components:

App
│
├── Navbar
│   ├── Logo
│   ├── SearchBar
│   ├── Account
│   └── Cart
│
├── ProductPage
│   ├── Sidebar
│   └── ProductCard
│
└── Footer


This is called a COMPONENT HIERARCHY.


==================================================
8. COMPONENT HIERARCHY
==================================================

Components can contain other components.

Example:

App
│
├── Navbar
│
├── Main
│   ├── Sidebar
│   └── ProductCard
│
└── Footer


Here:

App
→ Parent component

Navbar
→ Child of App

Main
→ Child of App

Sidebar
→ Child of Main

ProductCard
→ Child of Main


This creates a tree-like structure.


==================================================
9. PARENT AND CHILD COMPONENTS
==================================================

When one component uses another component:

Parent
    ↓
Child


Example:

function App() {

    return (
        <Navbar />
    );

}


Here:

App
→ Parent

Navbar
→ Child


Another example:

function App() {

    return (
        <main>

            <Navbar />

            <ProductCard />

            <Footer />

        </main>
    );

}


App is the parent.

Navbar, ProductCard and Footer are child components.


==================================================
10. COMPONENTS WITH PROPS
==================================================

This is VERY IMPORTANT.

Suppose we have:

<ProductCard />


We want different product information
for different cards.

We can pass data using PROPS.


Example:

<ProductCard
    name="iPhone"
    price={79999}
/>


Here we are passing:

name
price


to ProductCard.


The component can receive them:

function ProductCard(props) {

    return (
        <div>

            <h2>{props.name}</h2>

            <p>₹{props.price}</p>

        </div>
    );

}


Output:

iPhone
₹79999


Another card:

<ProductCard
    name="MacBook"
    price={129999}
/>


Output:

MacBook
₹129999


Same component.

Different data.


This is one of the main reasons components
are reusable.


==================================================
11. PROPS = DATA PASSED TO A COMPONENT
==================================================

Think:

Parent
   ↓
   Props
   ↓
Child


Example:

<ProductCard
    name="iPhone"
    price={79999}
/>


Parent gives data.

ProductCard receives the data.


Simple definition:

Props are used to pass data from a parent component
to a child component.


==================================================
12. DESTRUCTURING PROPS
==================================================

Instead of:

function ProductCard(props) {

    return (
        <h2>{props.name}</h2>
    );

}


We can write:

function ProductCard({ name, price }) {

    return (
        <div>

            <h2>{name}</h2>

            <p>₹{price}</p>

        </div>
    );

}


This is called destructuring.

It makes the code shorter and easier to read.


==================================================
13. COMPONENT WITH EVENT
==================================================

A component can also contain events.

Example:

function Button() {

    function handleClick() {

        console.log("Button clicked");

    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );

}


Here:

Button
→ Component

handleClick()
→ JavaScript function

onClick
→ React event

<button>
→ JSX


So a component can contain both:

UI
+
JavaScript logic


==================================================
14. REAL INDUSTRY BUTTON COMPONENT
==================================================

In a large application, we may use buttons
in many places:

Login
Signup
Add to Cart
Buy Now
Save
Delete
Submit


Instead of creating completely different button
code every time, we can create:

Button.jsx


function Button({ text }) {

    return (
        <button className="btn">
            {text}
        </button>
    );

}

export default Button;


Then use it:

<Button text="Login" />

<Button text="Buy Now" />

<Button text="Add to Cart" />

<Button text="Delete" />


Same component.

Different text.


This is REUSABILITY.


==================================================
15. COMPONENT WITH STATE
==================================================

Components can also have their own state.

Example:

import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h2>{count}</h2>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increase
            </button>

        </div>
    );

}

export default Counter;


This component has:

UI
+
State
+
Event
+
Logic


When the button is clicked:

0
↓
1
↓
2
↓
3


React updates the component's UI.


==================================================
16. COMPONENT = UI + LOGIC
==================================================

A component is not just HTML.

It can contain:

Component
│
├── JSX
├── JavaScript
├── State
├── Props
├── Events
├── Functions
└── Logic


For example:

function CartButton() {

    const [count, setCount] = useState(0);

    function addToCart() {

        setCount(count + 1);

    }

    return (
        <button onClick={addToCart}>
            Cart ({count})
        </button>
    );

}


The component contains:

UI
→ button

State
→ count

Function
→ addToCart

Event
→ onClick


This is how real React components can work.


==================================================
17. COMPONENTS AND API DATA
==================================================

In real MERN applications, data usually comes
from the backend.

For example:

MongoDB
    ↓
Node.js / Express
    ↓
REST API
    ↓
React
    ↓
Components
    ↓
UI


Suppose backend sends:

[
    {
        "name": "iPhone",
        "price": 79999
    },
    {
        "name": "MacBook",
        "price": 129999
    }
]


React can display these using ProductCard.

Example:

products.map((product) => (

    <ProductCard
        name={product.name}
        price={product.price}
    />

))


Now one reusable component can display
hundreds of products.


==================================================
18. REAL INDUSTRY COMPONENT STRUCTURE
==================================================

A real e-commerce project might have:

src/
│
├── components/
│   │
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   │
│   ├── ProductCard/
│   │   ├── ProductCard.jsx
│   │   └── ProductCard.css
│   │
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.css
│   │
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Login.jsx
│   └── Cart.jsx
│
├── App.jsx
└── main.jsx


Here:

components/
→ Reusable UI pieces

pages/
→ Complete screens


For example:

Home.jsx
    ↓
Navbar
ProductCard
ProductCard
ProductCard
Footer


Products.jsx
    ↓
Navbar
ProductCard
ProductCard
ProductCard
Footer


The same components can be reused on
different pages.


==================================================
19. COMPONENT VS PAGE
==================================================

This is another important concept.


COMPONENT:

Usually a smaller reusable part of UI.

Examples:

Navbar
Button
Card
Modal
Input
Sidebar


PAGE:

Usually represents a complete screen/route.

Examples:

Home
Login
Register
Dashboard
Products
Cart


Example:

Home Page
│
├── Navbar
├── Hero
├── ProductList
│   └── ProductCard
├── Newsletter
└── Footer


So:

Page
→ Made using multiple components.


==================================================
20. COMPONENT TREE EXAMPLE
==================================================

Suppose we have:

App
│
├── Navbar
│   ├── Logo
│   ├── SearchBar
│   └── CartButton
│
├── Home
│   ├── Hero
│   └── ProductList
│       ├── ProductCard
│       ├── ProductCard
│       └── ProductCard
│
└── Footer


This is called a:

Component Tree


The top component is:

App


And smaller components are inside it.


==================================================
21. WHY INDUSTRIES USE COMPONENTS
==================================================

Imagine a large application with:

100+ screens
500+ UI elements
Multiple developers


If everything is written in one file:

App.jsx
→ 20,000 lines

This becomes difficult to:

- Understand
- Debug
- Maintain
- Test
- Reuse


Instead:

Navbar.jsx
ProductCard.jsx
Button.jsx
Modal.jsx
Sidebar.jsx
Table.jsx
Form.jsx


Each component has a specific responsibility.


This makes the application easier to work on.


==================================================
22. GOOD COMPONENT PRINCIPLE
==================================================

A component should generally have a clear purpose.

For example:

Navbar
→ Responsible for navigation UI.

ProductCard
→ Responsible for displaying product information.

LoginForm
→ Responsible for login form UI and related behavior.

Modal
→ Responsible for modal UI.


Avoid making one component responsible for
everything.


Bad:

MegaComponent.jsx

→ Navbar
→ Login
→ Products
→ Cart
→ Footer
→ 2000 lines of code


Better:

Navbar.jsx
Login.jsx
ProductList.jsx
Cart.jsx
Footer.jsx


==================================================
23. COMPONENT REUSABILITY EXAMPLE
==================================================

Suppose we create:

<Card />

We can use it for:

<Card title="Product" />

<Card title="User" />

<Card title="Order" />

<Card title="Notification" />


The component can be designed to accept
different props.

This is how reusable component systems are created
in real applications.


==================================================
24. MOST IMPORTANT CONCEPTS TO REMEMBER
==================================================

COMPONENT

→ Reusable UI building block.


PROPS

→ Data passed from parent to child.


STATE

→ Data that belongs to a component and can change.


PARENT

→ Component that uses another component.


CHILD

→ Component being used by another component.


JSX

→ Used to describe the UI inside a component.


EVENTS

→ Allow components to respond to user actions.


==================================================
25. COMPLETE REAL-WORLD FLOW
==================================================

Let's take an Amazon-like Product Page.

Backend:

Express API
    ↓
GET /api/products
    ↓
Product data


React:

ProductPage
    ↓
ProductList
    ↓
ProductCard
    ↓
Button


Data flow:

API
 ↓
ProductPage
 ↓
ProductList
 ↓
ProductCard
 ↓
Props
 ↓
UI


Example:

<ProductCard
    name="iPhone"
    price={79999}
    rating={4.5}
/>


ProductCard receives:

name
price
rating


and displays:

---------------------------
iPhone
₹79,999
Rating: 4.5

[ Add to Cart ]
---------------------------


==================================================
26. ONE-LINE INTERVIEW DEFINITION
==================================================

A React component is a reusable and independent
building block of a React application's UI that can
contain JSX, JavaScript logic, state, props and events.


==================================================
EASY MEMORY TRICK
==================================================

Component
→ Reusable UI block

Props
→ Data coming from parent

State
→ Data that can change

Event
→ User action

JSX
→ UI structure

Parent
→ Uses child

Child
→ Receives props


FINAL MENTAL MODEL:

              React Application
                     │
                     ▼
                    App
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
       Navbar       Home       Footer
                     │
              ┌──────┴──────┐
              ▼             ▼
         ProductList      Sidebar
              │
        ┌─────┼─────┐
        ▼     ▼     ▼
      Card   Card   Card
        │
        ▼
      Button


React application
      ↓
made of components
      ↓
components can contain components
      ↓
props pass data
      ↓
state manages changing data
      ↓
events handle user actions
      ↓
final UI appears in the browser
*/