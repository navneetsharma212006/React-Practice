/*
REACT.JS — WHAT IS IT?

React.js is a JavaScript library used to build the frontend/User
Interface (UI) of modern web applications.

In simple words:

React helps us create the frontend of a web application using
small, reusable components.

For example, in a MERN application, React is responsible for
what the user sees and interacts with in the browser.

MERN =

M → MongoDB      → Database
E → Express.js   → Backend/API
R → React.js     → Frontend/UI
N → Node.js      → Server/Runtime


REAL MERN EXAMPLE:

Suppose we are building an E-commerce application.

The architecture can look like:

User
  ↓
React.js
  ↓
Express.js + Node.js
  ↓
MongoDB


React.js handles things like:

- Navbar
- Login/Register page
- Product list
- Product cards
- Search bar
- Add to Cart button
- Cart page
- Checkout page
- User profile
- Admin dashboard


WHY DO WE USE REACT.JS?

1. COMPONENT-BASED DEVELOPMENT

React allows us to divide a large UI into small reusable
components.

Example:

E-commerce application:

App
 ├── Navbar
 ├── ProductList
 │    └── ProductCard
 ├── Cart
 └── Footer

Instead of writing the entire frontend in one file,
we create separate components.

Example:

ProductCard.jsx

function ProductCard() {
    return (
        <div>
            <h2>iPhone</h2>
            <p>₹79999</p>
            <button>Add to Cart</button>
        </div>
    );
}

Now we can reuse ProductCard for many products.


2. REUSABILITY

One component can be reused with different data.

Example:

<ProductCard name="iPhone" price="79999" />

<ProductCard name="Laptop" price="60000" />

<ProductCard name="Headphones" price="2000" />

The structure of the component remains the same,
but the data changes.

This reduces duplicate code and makes the application
easier to maintain.


3. DYNAMIC UI

Modern applications are not static.

The UI changes according to:

- User actions
- API data
- Login status
- Cart items
- Search results
- Notifications
- Form input
- Database data

React makes it easier to create such dynamic interfaces.

Example:

User clicks:

"Add to Cart"

Then:

Button Click
    ↓
React State changes
    ↓
Cart count changes
    ↓
UI updates


4. STATE MANAGEMENT

State is data that can change during the lifetime of a
React application.

Example:

let cartItems = 2;

User adds another product:

cartItems = 3;

React can keep track of this changing data and update
the required UI.

Example:

const [cartCount, setCartCount] = useState(0);

When the user adds a product:

setCartCount(cartCount + 1);

The UI can automatically show:

Cart: 3


5. API INTEGRATION

This is very important in MERN.

React is mainly responsible for the frontend.

Express + Node.js provides the backend APIs.

MongoDB stores the data.

Example:

React
  ↓
GET /api/products
  ↓
Express + Node.js
  ↓
MongoDB
  ↓
Products returned
  ↓
React displays products


For example, React can request:

GET /api/products

Backend may return:

[
    {
        "name": "iPhone",
        "price": 79999
    },
    {
        "name": "Laptop",
        "price": 60000
    }
]

React receives this data and displays it using
components.


6. EASY TO BUILD LARGE APPLICATIONS

A MERN application can become very large.

For example:

E-commerce
    ↓
100+ pages/components
    ↓
Products
Users
Orders
Payments
Admin
Authentication
Reports
etc.

React's component-based architecture helps us divide
this large application into manageable parts.


REACT IN MERN — SIMPLE RESPONSIBILITY

MongoDB
    ↓
Stores data

Node.js
    ↓
Runs the backend server

Express.js
    ↓
Creates APIs and handles backend logic

React.js
    ↓
Creates the frontend/UI


REAL INDUSTRY FLOW:

Suppose a user opens an e-commerce website.

Step 1:
React displays the product page.

Step 2:
React sends an API request:

GET /api/products

Step 3:
Express receives the request.

Step 4:
Node.js runs the backend code.

Step 5:
Backend gets products from MongoDB.

Step 6:
Backend sends the product data back to React.

Step 7:
React receives the data and displays ProductCard
components.


So the complete flow is:

User
 ↓
React
 ↓
API Request
 ↓
Express
 ↓
Node.js
 ↓
MongoDB
 ↓
Node.js + Express
 ↓
API Response
 ↓
React
 ↓
UI


WHY REACT INSTEAD OF ONLY HTML/CSS/JS?

With basic HTML/CSS/JS, we can build websites.

But when an application becomes large and highly dynamic,
managing all UI changes manually becomes difficult.

React provides:

- Reusable components
- State management
- Component-based architecture
- Easy API integration
- Dynamic UI updates
- Better code organization
- Easier maintenance of large frontend applications


IMPORTANT:

React.js is a FRONTEND library.

React does NOT directly replace:

Node.js
Express.js
MongoDB

In a MERN application:

React       → Frontend
Node/Express → Backend
MongoDB     → Database


INTERVIEW DEFINITION:

React.js is a JavaScript library used to build dynamic and
interactive user interfaces. It uses a component-based
architecture, which allows developers to create reusable
UI components and efficiently update the interface when
application data changes.


ONE-LINE MEMORY:

React.js = Build the frontend of a dynamic MERN application
            using reusable components and state.
*/