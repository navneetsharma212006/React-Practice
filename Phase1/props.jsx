/*
PROPS IN REACT
==============

Props stands for:

PROPERTIES

Props are used to PASS DATA from one React component
to another component.

Most commonly:

Parent Component
       ↓
     Props
       ↓
Child Component


Simple definition:

Props are data passed from a parent component to
a child component.


==================================================
1. WHY DO WE NEED PROPS?
==================================================

Imagine we have a ProductCard component.

ProductCard.jsx:

function ProductCard() {

    return (
        <div>
            <h2>iPhone</h2>
            <p>₹79999</p>
        </div>
    );

}


This works.

But what if we want to display:

iPhone
MacBook
AirPods
Samsung Galaxy
Sony Headphones

?

We don't want to create a separate component for every
product.

Instead, we create ONE reusable ProductCard component
and send different product data to it using PROPS.


Example:

<ProductCard name="iPhone" price={79999} />

<ProductCard name="MacBook" price={129999} />

<ProductCard name="AirPods" price={24999} />


Same component.

Different data.

This is the main reason we need props.


==================================================
2. BASIC EXAMPLE
==================================================

Parent Component:

function App() {

    return (
        <ProductCard
            name="iPhone"
            price={79999}
        />
    );

}


Here we are passing:

name="iPhone"
price={79999}


These are PROPS.


Child Component:

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


So the flow is:

App
 ↓
name = "iPhone"
price = 79999
 ↓
ProductCard
 ↓
props.name
props.price
 ↓
UI


==================================================
3. UNDERSTANDING PROPS WITH A REAL-LIFE EXAMPLE
==================================================

Think of a restaurant.

Customer places an order:

Burger
Quantity: 2
Price: ₹300


The kitchen receives this information and prepares
the order.

Similarly:

Parent Component
→ Sends information

Child Component
→ Receives information

Props
→ Carry that information


Think:

Parent
  |
  |  name="iPhone"
  |  price={79999}
  ↓
Child


Props are like a package of data sent from
parent to child.


==================================================
4. PROPS SYNTAX
==================================================

Parent:

<Component
    propName="value"
/>


Example:

<User
    name="Navneet"
    age={20}
/>


Here:

name
→ Prop

age
→ Prop


The child receives them:

function User(props) {

    return (
        <div>

            <h2>{props.name}</h2>

            <p>{props.age}</p>

        </div>
    );

}


Output:

Navneet
20


==================================================
5. STRING VS JAVASCRIPT VALUE
==================================================

This is VERY IMPORTANT.


For a string:

name="Navneet"


For a number:

age={20}


Why use { } for 20?

Because without {}:

age="20"


would be treated as a string.


With:

age={20}


it is a JavaScript number.


Similarly:

isLoggedIn={true}

price={79999}

items={products}

user={userData}


All of these are JavaScript values.


==================================================
6. WHY DO WE USE { }?
==================================================

Remember from JSX:

{ }

means:

"Use JavaScript here."


Example:

const price = 79999;

<ProductCard price={price} />


Here:

price={price}

means:

Take the JavaScript variable "price"
and pass its value as a prop.


So:

const price = 79999;

<ProductCard price={price} />


is effectively passing:

79999


to ProductCard.


==================================================
7. MULTIPLE PROPS
==================================================

We can pass multiple props.

Example:

<ProductCard
    name="iPhone"
    price={79999}
    rating={4.5}
    inStock={true}
/>


The child receives:

function ProductCard(props) {

    return (
        <div>

            <h2>{props.name}</h2>

            <p>₹{props.price}</p>

            <p>Rating: {props.rating}</p>

            <p>
                {props.inStock
                    ? "In Stock"
                    : "Out of Stock"}
            </p>

        </div>
    );

}


Output:

iPhone
₹79999
Rating: 4.5
In Stock


One component can receive many props.


==================================================
8. DESTRUCTURING PROPS
==================================================

We can access props like this:

function ProductCard(props) {

    return (
        <h2>{props.name}</h2>
    );

}


But this can become repetitive.

So we commonly use destructuring:

function ProductCard({ name, price, rating }) {

    return (
        <div>

            <h2>{name}</h2>

            <p>₹{price}</p>

            <p>Rating: {rating}</p>

        </div>
    );

}


This is shorter and easier to read.


Think:

props.name
props.price
props.rating


becomes:

name
price
rating


==================================================
9. REAL INDUSTRY EXAMPLE — E-COMMERCE
==================================================

Imagine we are building an e-commerce website.

Backend returns:

[
    {
        name: "iPhone",
        price: 79999,
        rating: 4.5
    },

    {
        name: "MacBook",
        price: 129999,
        rating: 4.8
    },

    {
        name: "AirPods",
        price: 24999,
        rating: 4.6
    }
]


We have one reusable component:

ProductCard.jsx


function ProductCard({ name, price, rating }) {

    return (
        <div className="product-card">

            <h2>{name}</h2>

            <p>₹{price}</p>

            <p>Rating: {rating}</p>

            <button>
                Add to Cart
            </button>

        </div>
    );

}


Now in ProductList:

function ProductList() {

    return (
        <div>

            <ProductCard
                name="iPhone"
                price={79999}
                rating={4.5}
            />

            <ProductCard
                name="MacBook"
                price={129999}
                rating={4.8}
            />

            <ProductCard
                name="AirPods"
                price={24999}
                rating={4.6}
            />

        </div>
    );

}


Notice:

We created ProductCard ONLY ONCE.

But we used it three times.

The data changes because props change.


==================================================
10. PROPS + MAP()
==================================================

In real projects, we usually don't manually write:

<ProductCard />
<ProductCard />
<ProductCard />


Instead, data comes from an API and we use map().


Example:

const products = [
    {
        id: 1,
        name: "iPhone",
        price: 79999
    },

    {
        id: 2,
        name: "MacBook",
        price: 129999
    },

    {
        id: 3,
        name: "AirPods",
        price: 24999
    }
];


Then:

function ProductList() {

    return (
        <div>

            {products.map((product) => (

                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                />

            ))}

        </div>
    );

}


Here:

products.map()

takes every product one by one.

For the first product:

name="iPhone"
price=79999


For the second:

name="MacBook"
price=129999


For the third:

name="AirPods"
price=24999


And sends that data to ProductCard through props.


The flow:

products array
      ↓
    map()
      ↓
ProductCard
      ↓
   props
      ↓
    JSX
      ↓
    UI


This pattern is used VERY frequently in
real React applications.


==================================================
11. PROPS CAN CONTAIN ANY TYPE OF DATA
==================================================

Props are not limited to strings.

We can pass:


STRING:

name="Navneet"


NUMBER:

age={20}


BOOLEAN:

isLoggedIn={true}


ARRAY:

items={products}


OBJECT:

user={userData}


FUNCTION:

onClick={handleClick}


Even another component/JSX:

icon={<HomeIcon />}


So props can carry different types of JavaScript data.


==================================================
12. PASSING AN OBJECT AS A PROP
==================================================

Suppose:

const user = {
    name: "Navneet",
    role: "Software Engineer",
    city: "Indore"
};


We can pass the entire object:

<UserCard user={user} />


Child:

function UserCard({ user }) {

    return (
        <div>

            <h2>{user.name}</h2>

            <p>{user.role}</p>

            <p>{user.city}</p>

        </div>
    );

}


This is very common when an API returns
an object containing lots of information.


==================================================
13. PASSING AN ARRAY AS A PROP
==================================================

Suppose:

const skills = [
    "React",
    "Node.js",
    "MongoDB"
];


Parent:

<Skills skills={skills} />


Child:

function Skills({ skills }) {

    return (
        <ul>

            {skills.map((skill) => (
                <li key={skill}>
                    {skill}
                </li>
            ))}

        </ul>
    );

}


Output:

React
Node.js
MongoDB


Again:

Parent
 ↓
skills array
 ↓
Skills component
 ↓
map()
 ↓
UI


==================================================
14. PASSING A FUNCTION AS A PROP
==================================================

This is VERY IMPORTANT in React.

Props can also be functions.


Suppose the parent has:

function App() {

    function handleDelete() {
        console.log("Delete clicked");
    }

    return (
        <DeleteButton
            onDelete={handleDelete}
        />
    );

}


Child:

function DeleteButton({ onDelete }) {

    return (
        <button onClick={onDelete}>
            Delete
        </button>
    );

}


Now:

Parent
    ↓
passes function
    ↓
Child
    ↓
button clicked
    ↓
parent's function runs


This allows a child component to communicate
an action back to the parent.


==================================================
15. IMPORTANT: PROPS ARE READ-ONLY
==================================================

This is one of the MOST IMPORTANT rules.

A child should NOT directly change its props.


For example:

function Product({ price }) {

    price = 500;   // DON'T DO THIS

}


Props should be treated as read-only.


Why?

Because the parent owns the data it passed.

Think:

Parent
  ↓
  Data
  ↓
Child


The child can READ the data.

The child should not directly MODIFY that prop.


If the data needs to change, we normally use:

STATE


or call a function provided by the parent.


==================================================
16. PROPS VS STATE
==================================================

This is VERY important for React interviews.


PROPS:

Data passed from parent to child.

Example:

<ProductCard price={79999} />


STATE:

Data managed inside a component.

Example:

const [count, setCount] = useState(0);


Simple difference:

PROPS
→ Comes from parent.

STATE
→ Belongs to the component.


Example:

Parent
  │
  │ props
  ↓
Child
  │
  │ state
  ↓
Child's internal data


Props:
"Here is some data for you."


State:
"This is my own data and I can update it."


==================================================
17. PROPS VS STATE — REAL EXAMPLE
==================================================

Suppose we have:

<ProductCard
    name="iPhone"
    price={79999}
/>


ProductCard receives:

name
price

These are props.


But ProductCard may have:

const [quantity, setQuantity] = useState(1);


quantity is state.


So:

name
price
→ Props

quantity
→ State


Example:

function ProductCard({ name, price }) {

    const [quantity, setQuantity] = useState(1);

    return (
        <div>

            <h2>{name}</h2>

            <p>₹{price}</p>

            <p>Quantity: {quantity}</p>

            <button
                onClick={() => setQuantity(quantity + 1)}
            >
                +
            </button>

        </div>
    );

}


Here:

Props
→ Product information from parent.

State
→ Quantity managed by ProductCard.


==================================================
18. PROPS FLOW IN ONE DIRECTION
==================================================

React follows:

ONE-WAY DATA FLOW


Usually:

Parent
   ↓
Child
   ↓
Grandchild


Example:

App
 ↓
ProductList
 ↓
ProductCard


App can pass data to ProductList.

ProductList can pass data to ProductCard.


Data generally flows DOWN the component tree.


Example:

App
 │
 │ products
 ↓
ProductList
 │
 │ product
 ↓
ProductCard


This makes data flow easier to understand.


==================================================
19. REAL MERN INDUSTRY EXAMPLE
==================================================

Imagine we are building a MERN e-commerce
application.

Backend:

MongoDB
   ↓
Express
   ↓
Node.js
   ↓
API


React receives:

GET /api/products


Response:

[
    {
        "id": 1,
        "name": "iPhone",
        "price": 79999
    },
    {
        "id": 2,
        "name": "MacBook",
        "price": 129999
    }
]


React:

ProductPage
     ↓
ProductList
     ↓
ProductCard


ProductList passes data:

<ProductCard
    name={product.name}
    price={product.price}
/>


ProductCard receives:

function ProductCard({ name, price }) {

    return (
        <div>

            <h2>{name}</h2>

            <p>₹{price}</p>

        </div>
    );

}


So the complete flow is:

MongoDB
   ↓
Express API
   ↓
React
   ↓
ProductPage
   ↓
ProductList
   ↓
Props
   ↓
ProductCard
   ↓
UI


This is a very realistic use of props
in a MERN application.


==================================================
20. ANOTHER REAL INDUSTRY EXAMPLE — USER PROFILE
==================================================

Suppose we have a UserProfile component.

Parent:

<UserProfile
    name="Navneet"
    role="Software Engineer"
    image="/profile.jpg"
/>


Child:

function UserProfile({ name, role, image }) {

    return (
        <div>

            <img src={image} />

            <h2>{name}</h2>

            <p>{role}</p>

        </div>
    );

}


Now we can reuse it:

<UserProfile
    name="Navneet"
    role="Software Engineer"
    image="/navneet.jpg"
/>


<UserProfile
    name="Rahul"
    role="Frontend Developer"
    image="/rahul.jpg"
/>


Same component.

Different data.

That is the power of props.


==================================================
21. CHILDREN PROP
==================================================

There is a special prop called:

children


Suppose we create:

function Card({ children }) {

    return (
        <div className="card">
            {children}
        </div>
    );

}


Now:

<Card>
    <h2>iPhone</h2>
    <p>₹79999</p>
</Card>


Everything written between:

<Card>
    ...
</Card>


is received by the Card component as:

children


This is useful for creating reusable layouts.


For example:

<Card>
    <Product />
</Card>


or:

<Card>
    <UserProfile />
</Card>


The Card component doesn't need to know
exactly what is inside it.


==================================================
22. WHY PROPS ARE SO IMPORTANT
==================================================

Without props:

Every component would have fixed data.

For example:

ProductCard
→ Always iPhone
→ Always ₹79999


That would make the component less reusable.


With props:

ProductCard
→ Can receive any product.


iPhone
MacBook
AirPods
Samsung
Sony
etc.


So props give components:

REUSABILITY
+
FLEXIBILITY
+
DATA


==================================================
23. COMMON MISTAKE
==================================================

Wrong:

<ProductCard
    name={iPhone}
/>


If iPhone is not a JavaScript variable,
this will cause a problem.


Correct:

<ProductCard
    name="iPhone"
/>


OR:

const productName = "iPhone";

<ProductCard
    name={productName}
/>


Remember:

String directly:

name="iPhone"


JavaScript variable:

name={productName}


==================================================
24. PROPS IN ONE DIAGRAM
==================================================

              PARENT
                 │
                 │
                 │ name="iPhone"
                 │ price={79999}
                 │
                 ▼
              PROPS
                 │
                 ▼
              CHILD
                 │
                 │
                 ▼
        ┌─────────────────┐
        │ ProductCard     │
        │                 │
        │ {name}          │
        │ {price}         │
        └─────────────────┘
                 │
                 ▼
                UI


==================================================
25. MOST IMPORTANT THINGS TO REMEMBER
==================================================

PROPS

→ Props means Properties.

→ Props pass data from parent to child.

→ Props make components reusable.

→ Props can contain:
   strings
   numbers
   booleans
   arrays
   objects
   functions
   JSX

→ Props are read-only.

→ Data normally flows from parent to child.

→ A child can use props to display dynamic data.

→ A parent can pass a function as a prop so the
  child can trigger an action defined by the parent.


==================================================
26. ONE-LINE INTERVIEW DEFINITION
==================================================

Props are read-only inputs passed from a parent
component to a child component, allowing components
to receive dynamic and reusable data.


==================================================
EASY MEMORY TRICK
==================================================

PROPS = DATA FROM PARENT


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


name and price
→ Props


Child:

function ProductCard({ name, price }) {

    return (
        <h2>{name} - ₹{price}</h2>
    );

}


FINAL MENTAL MODEL:

Component
    ↓
Needs data
    ↓
Parent has the data
    ↓
Parent passes it as props
    ↓
Child receives props
    ↓
Child displays/uses the data


In simple words:

"Props are the way a parent gives data to its child
component."
*/