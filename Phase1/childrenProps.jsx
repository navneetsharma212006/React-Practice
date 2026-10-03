/*
CHILDREN PROP IN REACT
======================

Before understanding children prop, remember:

Props
→ Used to pass data from a parent component
  to a child component.

children
→ A special prop that is automatically created by React
  when we put content between the opening and closing
  tags of a component.


==================================================
1. WHAT IS children PROP?
==================================================

Suppose we have a Card component:

function Card() {

    return (
        <div className="card">
            ...
        </div>
    );

}


Now we want to put different content inside this Card.

We can write:

<Card>
    <h2>iPhone</h2>
    <p>₹79999</p>
</Card>


The content between:

<Card>
    ...
</Card>


is automatically available inside the Card component
through a special prop called:

children


So:

<Card>
    <h2>iPhone</h2>
    <p>₹79999</p>
</Card>


becomes conceptually:

children = (
    <>
        <h2>iPhone</h2>
        <p>₹79999</p>
    </>
)


The Card component can then display it:

function Card({ children }) {

    return (
        <div className="card">
            {children}
        </div>
    );

}


Output:

-------------------------
| iPhone                |
| ₹79999                |
-------------------------


==================================================
2. WHY DO WE NEED children?
==================================================

The main reason is:

REUSABILITY


Suppose we create a Card component.

We want to use the same Card design for:

Product
User
Notification
Order
Profile
Payment


The outer design can remain the same,
but the content inside can be different.


Without children:

We might create:

ProductCard
UserCard
OrderCard
NotificationCard


This can create unnecessary duplicate UI code.


With children:

<Card>
    <Product />
</Card>


<Card>
    <User />
</Card>


<Card>
    <Order />
</Card>


Same Card component.

Different content.


This is extremely useful in real React applications.


==================================================
3. SIMPLE EXAMPLE
==================================================

Create a Card component:

function Card({ children }) {

    return (
        <div className="card">
            {children}
        </div>
    );

}


Now use it:

<Card>
    <h2>Hello</h2>
    <p>Welcome to React</p>
</Card>


The Card receives:

children


which contains:

<h2>Hello</h2>
<p>Welcome to React</p>


Then:

{children}


renders that content.


So:

Parent
   ↓
<Card>
   ↓
children
   ↓
Card component
   ↓
{children}
   ↓
UI


==================================================
4. WHY IS IT CALLED children?
==================================================

React has a special prop name:

children


When we write:

<Card>
    Hello
</Card>


React automatically passes:

children = "Hello"


to Card.


So:

function Card({ children }) {

    return (
        <div>
            {children}
        </div>
    );

}


The word:

children

is provided by React.

We don't manually create it.


==================================================
5. VERY SIMPLE EXAMPLE
==================================================

Parent:

function App() {

    return (
        <Card>
            Hello World
        </Card>
    );

}


Child:

function Card({ children }) {

    return (
        <div>
            {children}
        </div>
    );

}


Output:

Hello World


Here:

"Hello World"

is the children prop.


==================================================
6. children CAN BE JSX
==================================================

children doesn't have to be just text.

It can contain JSX.

Example:

<Card>

    <h2>iPhone</h2>

    <p>₹79999</p>

    <button>
        Add to Cart
    </button>

</Card>


The entire content becomes:

children


So:

function Card({ children }) {

    return (
        <div className="card">
            {children}
        </div>
    );

}


The Card doesn't need to know what content
is inside it.


It simply says:

"Whatever you give me, I will render it here."


==================================================
7. REAL INDUSTRY EXAMPLE — CARD COMPONENT
==================================================

Imagine an e-commerce website.

We want a common card design:

-----------------------------
|                           |
|        CONTENT            |
|                           |
-----------------------------


We create:

Card.jsx

function Card({ children }) {

    return (
        <div className="card">
            {children}
        </div>
    );

}


Now ProductCard:

<Card>

    <img src="/iphone.jpg" />

    <h2>iPhone 17</h2>

    <p>₹79999</p>

    <button>
        Add to Cart
    </button>

</Card>


UserCard:

<Card>

    <img src="/user.jpg" />

    <h2>Navneet Sharma</h2>

    <p>Software Engineer</p>

</Card>


Notification:

<Card>

    <h3>New Notification</h3>

    <p>Your order has been shipped.</p>

</Card>


Notice:

Card component did NOT change.

Only its children changed.


This is the main benefit.


==================================================
8. CHILDREN VS NORMAL PROPS
==================================================

Normal props:

<ProductCard
    name="iPhone"
    price={79999}
/>


Here we explicitly give names:

name
price


Child:

function ProductCard({ name, price }) {

    return (
        <h2>{name}</h2>
    );

}


With children:

<Card>
    <h2>iPhone</h2>
    <p>₹79999</p>
</Card>


The content inside the Card automatically becomes:

children


Child:

function Card({ children }) {

    return (
        <div>
            {children}
        </div>
    );

}


So:

NORMAL PROP

Parent
 ↓
name="iPhone"
 ↓
Child
 ↓
name


CHILDREN PROP

Parent
 ↓
<Card>
   content
</Card>
 ↓
children
 ↓
Child


==================================================
9. THINK OF children LIKE A CONTAINER
==================================================

This is a very useful mental model.

Imagine:

<Card>
    SOMETHING
</Card>


Card is like a container.

Whatever we put inside:

<Card>
    SOMETHING
</Card>


goes into:

children


Think:

┌─────────────────────────────┐
│           Card              │
│                             │
│        children             │
│                             │
│    Whatever we put here     │
│                             │
└─────────────────────────────┘


This makes components flexible.


==================================================
10. REAL INDUSTRY EXAMPLE — MODAL
==================================================

Modals are a very common use case.

Suppose we create a reusable Modal:

function Modal({ children }) {

    return (
        <div className="modal">

            <div className="modal-content">

                {children}

            </div>

        </div>
    );

}


Now we can use it for different things.

LOGIN MODAL:

<Modal>

    <h2>Login</h2>

    <input placeholder="Email" />

    <input placeholder="Password" />

    <button>
        Login
    </button>

</Modal>


DELETE CONFIRMATION MODAL:

<Modal>

    <h2>Delete Account?</h2>

    <p>
        This action cannot be undone.
    </p>

    <button>
        Delete
    </button>

</Modal>


PAYMENT MODAL:

<Modal>

    <h2>Payment</h2>

    <p>Total: ₹5000</p>

    <button>
        Pay Now
    </button>

</Modal>


Same Modal component.

Different children.


This is a very common pattern in industry.


==================================================
11. REAL INDUSTRY EXAMPLE — LAYOUT
==================================================

children is also heavily used for layouts.

Suppose we create:

DashboardLayout.jsx


function DashboardLayout({ children }) {

    return (
        <div>

            <Navbar />

            <Sidebar />

            <main>
                {children}
            </main>

        </div>
    );

}


Now we can put different pages inside it.

Dashboard:

<DashboardLayout>
    <Dashboard />
</DashboardLayout>


Users:

<DashboardLayout>
    <Users />
</DashboardLayout>


Settings:

<DashboardLayout>
    <Settings />
</DashboardLayout>


The layout remains the same:

Navbar
Sidebar
Main area


Only:

children

changes.


So:

DashboardLayout
      │
      ├── Navbar
      ├── Sidebar
      │
      └── children
            │
            ├── Dashboard
            ├── Users
            └── Settings


This is a very common real-world React pattern.


==================================================
12. CHILDREN WITH ROUTING
==================================================

In larger React applications, layouts are often
used with routing.

For example:

DashboardLayout
      ↓
Dashboard
Users
Orders
Settings


The layout can remain common while the page inside
changes.

Conceptually:

<DashboardLayout>

    Current Page

</DashboardLayout>


The current page becomes:

children


This allows us to keep common UI in one place.


==================================================
13. children CAN BE TEXT
==================================================

Example:

<Card>
    Hello
</Card>


Here:

children = "Hello"


Component:

function Card({ children }) {

    return (
        <div>
            {children}
        </div>
    );

}


Output:

Hello


==================================================
14. children CAN BE A SINGLE ELEMENT
==================================================

Example:

<Card>

    <h2>Product</h2>

</Card>


children contains:

<h2>Product</h2>


==================================================
15. children CAN BE MULTIPLE ELEMENTS
==================================================

Example:

<Card>

    <h2>Product</h2>

    <p>₹79999</p>

    <button>Buy</button>

</Card>


children contains all of them.

Conceptually:

children =

<>
    <h2>Product</h2>
    <p>₹79999</p>
    <button>Buy</button>
</>


Then:

{children}

renders all of them.


==================================================
16. children CAN ALSO BE ANOTHER COMPONENT
==================================================

Example:

<Card>

    <ProductDetails />

</Card>


Here:

ProductDetails

becomes part of:

children


The Card doesn't need to know what ProductDetails
does internally.


This gives us very flexible components.


==================================================
17. NESTING COMPONENTS USING children
==================================================

Example:

function App() {

    return (

        <Card>

            <Product />

        </Card>

    );

}


The hierarchy is:

App
 ↓
Card
 ↓
Product


Product becomes:

children

inside Card.


==================================================
18. children IS JUST A PROP
==================================================

This is an important concept.

children is NOT a completely different React feature.

It is a special prop.

For example:

<Card>
    <h2>Hello</h2>
</Card>


is conceptually similar to passing:

<Card
    children={<h2>Hello</h2>}
/>


You normally DON'T write it this way because
the opening/closing tag syntax is much cleaner.


So:

<Card>
    Hello
</Card>


and conceptually:

<Card children="Hello" />


represent the same idea.


==================================================
19. NORMAL PROP VS children
==================================================

NORMAL PROP:

<Card
    title="iPhone"
    price={79999}
/>


Component:

function Card({ title, price }) {

    return (
        <div>

            <h2>{title}</h2>

            <p>{price}</p>

        </div>
    );

}


The component decides where each piece of data
is displayed.


With children:

<Card>

    <h2>iPhone</h2>

    <p>₹79999</p>

</Card>


Component:

function Card({ children }) {

    return (
        <div className="card">
            {children}
        </div>
    );

}


The parent decides what content goes inside.


This makes children more flexible.


==================================================
20. WHY NOT JUST USE NORMAL PROPS?
==================================================

We could do:

<Card
    title="iPhone"
    price={79999}
    buttonText="Add to Cart"
/>


But now Card needs to know about:

title
price
buttonText
image
rating
description
etc.


As requirements increase, the component can become
very specific.


With children:

<Card>

    <img src="/iphone.jpg" />

    <h2>iPhone</h2>

    <p>₹79999</p>

    <button>Add to Cart</button>

</Card>


Card only cares about:

"Put this content inside my card container."


This makes Card more reusable.


==================================================
21. REAL MERN EXAMPLE
==================================================

Imagine we are building a MERN admin dashboard.

We create a reusable layout:

AdminLayout.jsx


function AdminLayout({ children }) {

    return (
        <div>

            <Navbar />

            <Sidebar />

            <main>
                {children}
            </main>

        </div>
    );

}


Now our pages:

Users.jsx

<AdminLayout>

    <UserTable />

</AdminLayout>


Orders.jsx

<AdminLayout>

    <OrderTable />

</AdminLayout>


Products.jsx

<AdminLayout>

    <ProductTable />

</AdminLayout>


The common structure:

Navbar
Sidebar
Main

is written ONLY ONCE.


The changing content is:

children


So:

AdminLayout
     │
     ├── Navbar
     ├── Sidebar
     │
     └── children
           │
           ├── UserTable
           ├── OrderTable
           └── ProductTable


This is exactly the kind of reusable structure
you will see in larger React applications.


==================================================
22. children + PROPS TOGETHER
==================================================

A component can have normal props AND children.

Example:

function Card({ title, children }) {

    return (
        <div className="card">

            <h2>{title}</h2>

            <div>
                {children}
            </div>

        </div>
    );

}


Use it:

<Card title="User Profile">

    <p>Name: Navneet</p>

    <p>Role: Software Engineer</p>

</Card>


Here:

title
→ Normal prop

children
→ Content between Card tags


Output:

------------------------------
User Profile

Name: Navneet
Role: Software Engineer
------------------------------


This combination is very common.


==================================================
23. IMPORTANT DIFFERENCE
==================================================

Normal props answer:

"What DATA should I receive?"


children answers:

"What CONTENT should I render inside me?"


Example:

<Button
    text="Buy Now"
    type="primary"
/>


Props define specific values.


But:

<Card>

    <ProductDetails />

</Card>


children allows the parent to decide
what content goes inside the Card.


==================================================
24. WHEN SHOULD WE USE children?
==================================================

children is useful when building:

- Card
- Modal
- Layout
- Sidebar
- Navbar wrapper
- Container
- Dropdown
- Dialog
- Page layout
- Reusable UI wrappers
- Authentication layouts
- Dashboard layouts


Whenever you have:

COMMON OUTER STRUCTURE
+
DIFFERENT INNER CONTENT

children is often a good solution.


==================================================
25. EASY REAL-LIFE ANALOGY
==================================================

Imagine a picture frame.

The FRAME is always the same.

But we can put different pictures inside it.


Frame:

┌───────────────────┐
│                   │
│     CONTENT       │
│                   │
└───────────────────┘


In React:

Frame
→ Component

Picture
→ children


Example:

<Frame>
    <Profile />
</Frame>


Another:

<Frame>
    <Product />
</Frame>


Same frame.

Different content.


This is exactly how children works.


==================================================
26. IMPORTANT THING TO REMEMBER
==================================================

children does NOT mean:

"child component"


It means:

"The content placed inside this component."


For example:

<Card>

    <Product />

</Card>


Here:

Product is a child component.

But the special prop:

children

contains the JSX:

<Product />


So don't confuse:

Child Component
vs
children Prop


==================================================
27. CHILD COMPONENT VS children PROP
==================================================

Child component:

function App() {

    return (
        <Card>
            <Product />
        </Card>
    );

}


Here:

Product
→ Child component of Card.


children prop:

function Card({ children }) {

    return (
        <div>
            {children}
        </div>
    );

}


Here:

children
→ Contains <Product />.


So:

<Product />
→ Child component

children
→ Prop containing that child JSX


==================================================
28. MOST IMPORTANT THINGS TO REMEMBER
==================================================

children is a special React prop.

It contains whatever we put between:

<Component>
    ...
</Component>


Example:

<Card>
    <h2>Hello</h2>
</Card>


The:

<h2>Hello</h2>

becomes:

children


The component can render it using:

{children}


Main purpose:

REUSABILITY


It is especially useful when:

Same outer UI
+
Different inner content


Examples:

Card
Modal
Layout
Dashboard
Container
Dialog


==================================================
29. ONE-LINE INTERVIEW DEFINITION
==================================================

The children prop is a special React prop that
contains the content placed between the opening and
closing tags of a component, allowing us to create
flexible and reusable wrapper components.


==================================================
30. EASY MEMORY TRICK
==================================================

NORMAL PROPS:

Parent
   ↓
Specific data
   ↓
Child


Example:

<Card
    title="iPhone"
    price={79999}
/>


CHILDREN:

Parent
   ↓
Content
   ↓
<Component>
    Content
</Component>
   ↓
children


Example:

<Card>

    <h2>iPhone</h2>
    <p>₹79999</p>

</Card>


Remember:

props
→ "Here is some data."

children
→ "Here is some content. Put it inside yourself."


FINAL MENTAL MODEL:

Reusable Component
       │
       │
       ├── Common outer structure
       │
       └── {children}
              │
              ▼
       Different inner content


Example:

<Layout>

    <Dashboard />

</Layout>


Same Layout can become:

<Layout>

    <Users />

</Layout>


or:

<Layout>

    <Orders />

</Layout>


The Layout stays the same.

Only children changes.

That is the main reason we use the children prop.
*/