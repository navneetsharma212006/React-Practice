/*
JSX IN REACT
============

JSX stands for:

JavaScript XML

JSX is a syntax used in React that allows us to write
HTML-like code inside JavaScript.


IMPORTANT:

JSX is NOT HTML.

It looks similar to HTML, but it is actually a syntax
that gets converted into JavaScript.


==================================================
1. WHY DO WE NEED JSX?
==================================================

Normally, JavaScript and HTML are written separately.

For example:

HTML:

<h1>Hello Navneet</h1>


JavaScript:

const name = "Navneet";


But in React, we often need JavaScript logic and UI
together.

For example:

const name = "Navneet";

return (
    <h1>Hello {name}</h1>
);


Here:

JavaScript:
const name = "Navneet";

UI:
<h1>Hello {name}</h1>


JSX allows us to write both together.


==================================================
2. SIMPLE JSX EXAMPLE
==================================================

function App() {

    return (
        <h1>Hello World</h1>
    );

}


Here:

function App()
→ JavaScript function

return
→ Returns the UI

<h1>Hello World</h1>
→ JSX


So JSX allows us to write:

JavaScript + HTML-like UI

inside the same code.


==================================================
3. JSX IS NOT ACTUALLY HTML
==================================================

This is VERY IMPORTANT.

When we write:

<h1>Hello World</h1>


It looks like HTML.

But React/Vite processes this JSX and converts it
into JavaScript that the browser can understand.


Conceptually:

JSX:

<h1>Hello World</h1>


gets transformed into something similar to:

React.createElement(
    "h1",
    null,
    "Hello World"
);


Modern React uses a newer JSX transform internally,
so you normally don't write React.createElement()
yourself.

The important idea is:

JSX
   ↓
Processed by the build tools
   ↓
JavaScript
   ↓
Browser


The browser does NOT directly understand JSX.


==================================================
4. JSX + JAVASCRIPT
==================================================

One of the biggest advantages of JSX is that we can
put JavaScript expressions inside JSX.


We use:

{ }


Example:

const name = "Navneet";

function App() {

    return (
        <h1>Hello {name}</h1>
    );

}


Output:

Hello Navneet


Here:

{name}

means:

"Run this JavaScript expression and put the result here."


==================================================
5. REAL INDUSTRY EXAMPLE
==================================================

Imagine we are building an e-commerce website like:

Amazon / Flipkart


We have product data:

const product = {
    name: "iPhone 17",
    price: 79999,
    rating: 4.5
};


Without JSX, creating dynamic UI would be
more complicated.


With JSX:

function ProductCard() {

    return (
        <div>
            <h2>{product.name}</h2>

            <p>₹{product.price}</p>

            <p>Rating: {product.rating}</p>
        </div>
    );

}


Output:

iPhone 17

₹79999

Rating: 4.5


The important thing is that the UI is using
JavaScript data dynamically.


==================================================
6. JAVASCRIPT EXPRESSIONS INSIDE JSX
==================================================

Inside { }, we can use JavaScript expressions.

Example:

const price = 1000;
const quantity = 3;

function App() {

    return (
        <h2>Total: ₹{price * quantity}</h2>
    );

}


Output:

Total: ₹3000


Because:

price * quantity

is a JavaScript expression.


Other examples:

{name}

{price}

{price * quantity}

{user.name}

{isLoggedIn ? "Logout" : "Login"}

{items.length}


All of these can be used inside JSX.


==================================================
7. JSX WITH CONDITIONS
==================================================

Suppose an e-commerce website needs to show:

"Add to Cart"

if the product is available.

Otherwise:

"Out of Stock"


We can use a ternary operator.

const isAvailable = true;

function Product() {

    return (
        <div>
            <h2>iPhone</h2>

            <p>
                {isAvailable
                    ? "Add to Cart"
                    : "Out of Stock"}
            </p>
        </div>
    );

}


If:

isAvailable = true

Output:

Add to Cart


If:

isAvailable = false

Output:

Out of Stock


This is a very common use of JSX in real applications.


==================================================
8. JSX WITH ARRAYS / MAP
==================================================

Suppose our backend sends products:

const products = [
    "iPhone",
    "MacBook",
    "AirPods"
];


We want to display all products.

We can use map():

function ProductList() {

    return (
        <ul>

            {products.map((product) => (
                <li>{product}</li>
            ))}

        </ul>
    );

}


Output:

• iPhone
• MacBook
• AirPods


Here:

products.map(...)

is JavaScript.

The <li>...</li>

is JSX.


This combination is used VERY frequently
in real React applications.


==================================================
9. JSX ATTRIBUTES
==================================================

JSX also allows us to add attributes to elements.

HTML:

<img src="logo.png">


JSX:

<img src={logo} />


For example:

const image = "/logo.png";

function App() {

    return (
        <img src={image} />
    );

}


Here:

src={image}

means the value of src comes from JavaScript.


==================================================
10. className IN JSX
==================================================

In HTML we normally write:

<div class="card">


But in JSX we write:

<div className="card">


Why?

Because:

class

has special meaning in JavaScript.

So React uses:

className


Example:

<div className="product-card">

    <h2>iPhone</h2>

    <p>₹79999</p>

</div>


This is one of the most common JSX differences
from normal HTML.


==================================================
11. JSX USES camelCase FOR MANY ATTRIBUTES
==================================================

HTML:

onclick

JSX:

onClick


HTML:

tabindex

JSX:

tabIndex


HTML:

class

JSX:

className


React generally uses camelCase for many DOM properties
and event handlers.


Example:

<button onClick={handleClick}>
    Buy Now
</button>


Here:

onClick

is a React event handler.


==================================================
12. JSX MUST RETURN ONE ROOT ELEMENT
==================================================

This will cause a problem:

return (
    <h1>Hello</h1>
    <p>Welcome</p>
);


Why?

Because JSX needs one parent/root element
for the returned structure.


We can solve it using:

<div>

    <h1>Hello</h1>
    <p>Welcome</p>

</div>


Now there is one parent:

<div>


OR we can use a Fragment:

<>
    <h1>Hello</h1>
    <p>Welcome</p>
</>


A Fragment allows us to group elements
without adding an extra div to the HTML.


==================================================
13. JSX TAGS MUST BE CLOSED
==================================================

HTML sometimes allows certain tags without
explicit closing tags.

In JSX, elements must be properly closed.

Example:

<img src={image} />


Notice:

/>


Similarly:

<input type="text" />

<button>Login</button>


For elements that don't have children,
we use:

/>


This is called a self-closing tag.


==================================================
14. JSX CAN USE FUNCTIONS
==================================================

Example:

function getUserName() {
    return "Navneet";
}


We can use it inside JSX:

function App() {

    return (
        <h1>Hello {getUserName()}</h1>
    );

}


Output:

Hello Navneet


The function executes and its returned value
is placed inside the JSX.


==================================================
15. REAL INDUSTRY EXAMPLE — DASHBOARD
==================================================

Imagine we are building a company dashboard.

Backend gives us:

const user = {
    name: "Navneet",
    role: "Software Engineer",
    notifications: 5
};


We can create:

function Dashboard() {

    return (
        <div className="dashboard">

            <h1>Welcome, {user.name}</h1>

            <p>Role: {user.role}</p>

            <button>
                Notifications ({user.notifications})
            </button>

        </div>
    );

}


Output:

Welcome, Navneet

Role: Software Engineer

Notifications (5)


This is how JSX is commonly used in industry:

Backend/API data
       ↓
JavaScript variables/state
       ↓
JSX
       ↓
UI


==================================================
16. JSX WITH REACT STATE
==================================================

This is where JSX becomes even more useful.

Example:

const [count, setCount] = useState(0);


We can show count in JSX:

<h1>Count: {count}</h1>


And update it:

<button onClick={() => setCount(count + 1)}>
    Increase
</button>


Complete example:

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h1>Count: {count}</h1>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increase
            </button>

        </div>
    );

}


When the button is clicked:

count
0
 ↓
1
 ↓
2
 ↓
3


React updates the JSX/UI automatically.


This is one of the most important concepts
in React.


==================================================
17. JSX WITH API DATA
==================================================

This is a very common industry situation.

Suppose our backend API returns:

{
    "name": "iPhone",
    "price": 79999
}


React stores this data:

const product = {
    name: "iPhone",
    price: 79999
};


Then JSX displays it:

<div className="product-card">

    <h2>{product.name}</h2>

    <p>₹{product.price}</p>

    <button>
        Add to Cart
    </button>

</div>


So JSX acts as a bridge between:

JavaScript data
       ↓
React
       ↓
UI


==================================================
18. JSX VS HTML
==================================================

HTML:

<div class="card">
    <button onclick="buyProduct()">
        Buy
    </button>
</div>


JSX:

<div className="card">
    <button onClick={buyProduct}>
        Buy
    </button>
</div>


Important differences:

HTML
→ class

JSX
→ className


HTML
→ onclick

JSX
→ onClick


HTML
→ Static values are commonly written directly

JSX
→ JavaScript values are placed inside { }


HTML
→ Browser directly understands HTML

JSX
→ JSX is processed into JavaScript before the browser
   runs it


==================================================
19. JSX VS JAVASCRIPT
==================================================

JavaScript:

const name = "Navneet";

const age = 20;


JSX:

<h1>Hello {name}</h1>

<p>Age: {age}</p>


JSX allows JavaScript expressions inside:

{ }


So remember:

{ } in JSX
→ "I want to use JavaScript here."


==================================================
20. IMPORTANT RULES OF JSX
==================================================

1. JSX looks like HTML but is not HTML.

2. JSX is converted/compiled into JavaScript.

3. JavaScript expressions can be written inside:

   { }

4. Use className instead of class.

5. Use camelCase for many React properties/events.

6. JSX elements must be properly closed.

7. A component's returned JSX should have one root
   element, or use a Fragment <>...</>.

8. JavaScript logic and UI can be combined.

9. JSX can display dynamic data.

10. JSX can work with:
    - variables
    - functions
    - conditions
    - arrays
    - state
    - props
    - API data


==================================================
21. THE MOST IMPORTANT MENTAL MODEL
==================================================

Don't think:

"JSX is HTML inside JavaScript."


Think:

"JSX is a convenient syntax for describing
what the React UI should look like,
while allowing us to use JavaScript data and logic."


For example:

const name = "Navneet";

return (
    <h1>Hello {name}</h1>
);


You can mentally read it as:

JavaScript data:
name = "Navneet"

        ↓

JSX:
<h1>Hello {name}</h1>

        ↓

React processes it

        ↓

Browser displays:

Hello Navneet


==================================================
ONE-LINE DEFINITION FOR INTERVIEW
==================================================

JSX is a JavaScript syntax used in React to write
HTML-like UI code inside JavaScript. It allows us to
combine JavaScript expressions with the UI and is
processed into JavaScript before running in the browser.


==================================================
EASY MEMORY TRICK
==================================================

JSX = UI + JavaScript

{ } = JavaScript inside JSX

className = CSS class

onClick = React event

map() = Display multiple items

? : = Conditional UI


MOST IMPORTANT FLOW:

JavaScript Data
      ↓
     JSX
      ↓
    React
      ↓
   Browser
      ↓
     UI
*/