/*
# EVENT HANDLING IN REACT

## 1. What is Event Handling?

Event handling means:

"Doing something when a user interacts with our website."

For example, when a user:

- clicks a button
- types something in an input
- submits a form
- moves the mouse
- selects an option
- presses a keyboard key

These actions are called EVENTS.

React allows us to handle these events using EVENT HANDLERS.

Simple example:

User clicks "Login" button
        ↓
Click event happens
        ↓
React event handler runs
        ↓
Login function executes
        ↓
User gets logged in


--------------------------------------------------

## 2. Why Do We Need Event Handling?

A website is not only about displaying data.

We also need to respond to what the user does.

For example:

Without event handling:

[ Login Button ]

User clicks it
        ↓
Nothing happens


With event handling:

[ Login Button ]

User clicks it
        ↓
handleLogin() runs
        ↓
API request is sent
        ↓
User gets logged in


So, event handling makes our React application INTERACTIVE.

In simple words:

Event Handling = React ko batana ki user ke action par kya karna hai.


--------------------------------------------------

## 3. Real Industry Example

Suppose we are building an e-commerce website like Amazon.

We have:

[ Add to Cart ]

When the user clicks "Add to Cart":

1. Click event happens.
2. React detects the click.
3. Event handler function runs.
4. Product is added to cart.
5. Cart count gets updated.

Example:

<button onClick={handleAddToCart}>
    Add to Cart
</button>

Here:

onClick
    ↓
Event

handleAddToCart
    ↓
Event Handler


--------------------------------------------------

## 4. Basic Syntax

React event handling looks like this:

<button onClick={handleClick}>
    Click Me
</button>

function handleClick() {
    console.log("Button clicked");
}


Flow:

User clicks button
        ↓
onClick detects click
        ↓
handleClick() runs
        ↓
"Button clicked" is printed


--------------------------------------------------

## 5. Important: We Don't Call the Function Directly

Correct:

<button onClick={handleClick}>
    Click
</button>


Wrong:

<button onClick={handleClick()}>
    Click
</button>


Why?

Because:

onClick={handleClick}

means:

"React, when the button is clicked, call handleClick."


But:

onClick={handleClick()}

means:

"Call handleClick immediately while rendering."


So generally:

onClick={handleClick}

NOT

onClick={handleClick()}


--------------------------------------------------

## 6. Common Events in React

Some commonly used React events are:

onClick
    → When user clicks something

onChange
    → When input value changes

onSubmit
    → When form is submitted

onMouseEnter
    → When mouse enters an element

onMouseLeave
    → When mouse leaves an element

onKeyDown
    → When keyboard key is pressed

onFocus
    → When input gets focus

onBlur
    → When input loses focus


--------------------------------------------------

## 7. onClick Example

Example:

function App() {

    function handleClick() {
        console.log("Button clicked");
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}


What happens?

Initially:

React renders the button.

Then:

User clicks button
        ↓
onClick event occurs
        ↓
handleClick()
        ↓
"Button clicked"


--------------------------------------------------

## 8. Event Handling with State

This is very important in real React applications.

Suppose we have a counter.

const [count, setCount] = useState(0);


Button:

<button onClick={handleIncrement}>
    Increase
</button>


Function:

function handleIncrement() {
    setCount(count + 1);
}


Flow:

User clicks Increase
        ↓
onClick
        ↓
handleIncrement()
        ↓
setCount(count + 1)
        ↓
State changes
        ↓
React re-renders
        ↓
Updated count appears on screen


Example:

Count: 0

Click Increase

Count: 1

Click Increase

Count: 2

Click Increase

Count: 3


This is a very common pattern in React:

USER ACTION
    ↓
EVENT
    ↓
EVENT HANDLER
    ↓
STATE UPDATE
    ↓
RE-RENDER
    ↓
UI UPDATE


--------------------------------------------------

## 9. onChange Event

onChange is very important for forms.

Example:

<input
    type="text"
    onChange={handleChange}
/>


Function:

function handleChange(event) {
    console.log(event.target.value);
}


Suppose user types:

N

Then:

event.target.value
    ↓
"N"


Then user types:

Na

event.target.value
    ↓
"Na"


Then:

Navneet

event.target.value
    ↓
"Navneet"


So onChange allows us to know what the user is entering.


--------------------------------------------------

## 10. Real Industry Example: Login Form

Suppose we have a login page:

Email:
[ user@gmail.com ]

Password:
[ ******** ]

[ Login ]


We need to handle:

1. User typing email
2. User typing password
3. User clicking Login


So we can have:

onChange
    ↓
Capture input values

onSubmit / onClick
    ↓
Submit login form


Example:

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        console.log(email);
        console.log(password);
    }

    return (
        <form>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>
                Login
            </button>

        </form>
    );
}


Real application flow:

User enters email
        ↓
onChange
        ↓
setEmail()
        ↓
email state updated


User enters password
        ↓
onChange
        ↓
setPassword()
        ↓
password state updated


User clicks Login
        ↓
onClick
        ↓
handleLogin()
        ↓
API request
        ↓
Backend checks credentials
        ↓
Login successful


--------------------------------------------------

## 11. Event Object

When an event occurs, React gives us information about that event.

This information is available through the event object.

Example:

function handleClick(event) {
    console.log(event);
}


Here:

event

contains information related to the event.

For example:

- which element was clicked
- input value
- keyboard key
- mouse information
- etc.


--------------------------------------------------

## 12. event.target

One of the most commonly used properties is:

event.target


It tells us which HTML element triggered the event.

Example:

<input onChange={handleChange} />


function handleChange(event) {
    console.log(event.target);
}


It refers to the input element.

And:

event.target.value

gives the current value of the input.


Example:

function handleChange(event) {
    console.log(event.target.value);
}


If user types:

Hello

Output:

Hello


--------------------------------------------------

## 13. Passing Arguments to Event Handlers

Sometimes we want to pass additional information.

Example:

function handleDelete(id) {
    console.log(id);
}


We cannot normally do:

onClick={handleDelete(10)}

because that calls the function immediately.

Instead:

<button onClick={() => handleDelete(10)}>
    Delete
</button>


Now:

User clicks Delete
        ↓
Arrow function runs
        ↓
handleDelete(10)
        ↓
id = 10


This is very common in industry.

For example, if we have products:

Product 101
[ Delete ]

Product 102
[ Delete ]

Product 103
[ Delete ]


We can do:

<button onClick={() => handleDelete(product.id)}>
    Delete
</button>


Now React knows which product should be deleted.


--------------------------------------------------

## 14. Event Handling in Real MERN Application

Imagine we are building an Admin Dashboard.

There is a table:

--------------------------------------------------
Name        Email              Action
--------------------------------------------------
Rahul       rahul@gmail.com    [Delete]
Aman        aman@gmail.com     [Delete]
Priya       priya@gmail.com   [Delete]
--------------------------------------------------


When admin clicks Delete:

User clicks Delete
        ↓
onClick
        ↓
handleDelete(user.id)
        ↓
API request
        ↓
DELETE /api/users/:id
        ↓
Backend deletes user
        ↓
Frontend updates UI


Example:

function handleDelete(id) {

    fetch(`/api/users/${id}`, {
        method: "DELETE"
    });

}


Button:

<button onClick={() => handleDelete(user.id)}>
    Delete
</button>


This is how event handling is connected with backend APIs in real applications.


--------------------------------------------------

## 15. Event Handling vs Event Handler

These two terms are slightly different.

EVENT:

The user's action.

Example:

User clicks a button.


EVENT HANDLER:

The function that handles that action.

Example:

function handleClick() {
    console.log("Clicked");
}


So:

Click
    ↓
EVENT

handleClick()
    ↓
EVENT HANDLER


--------------------------------------------------

## 16. Why Event Handling Is Important in React?

Event handling is important because it allows our application to respond to users.

Without events, our application would mostly be static.

With events, we can build:

- Login forms
- Signup forms
- Search bars
- Add to Cart
- Delete buttons
- Like buttons
- Dropdowns
- Modals
- Menus
- Form validation
- File uploads
- Filters
- Pagination
- API calls
- Dashboard interactions


--------------------------------------------------

## 17. Simple Real-Life Analogy

Think about a doorbell.

You press the doorbell.

PRESS
  ↓
EVENT

Doorbell system responds.

  ↓
EVENT HANDLER

Bell rings.

  ↓
ACTION


React works in a similar way.

User clicks button
        ↓
EVENT

React detects event
        ↓
EVENT HANDLER

Function executes
        ↓
ACTION


--------------------------------------------------

## 18. Most Important Pattern to Remember

Remember this pattern:

USER ACTION
    ↓
EVENT
    ↓
EVENT HANDLER
    ↓
LOGIC
    ↓
STATE / API / UI UPDATE


Example:

User clicks "Add to Cart"
        ↓
onClick
        ↓
handleAddToCart()
        ↓
setCart(...)
        ↓
Cart updates


Another example:

User types in Search
        ↓
onChange
        ↓
handleSearch()
        ↓
search state updates
        ↓
Products are filtered


--------------------------------------------------

## 19. In One Line

Event Handling in React means:

"Handling user actions like click, typing, submit, etc. and performing the required action in response."


--------------------------------------------------

## 20. Interview Definition

If an interviewer asks:

"What is event handling in React?"

You can say:

"Event handling in React is the process of responding to user actions such as clicks, typing, form submission, and keyboard events by attaching event handlers to React elements."


--------------------------------------------------

## QUICK REVISION

Event
→ User's action.

Event Handler
→ Function that handles the action.

onClick
→ Handles clicks.

onChange
→ Handles input changes.

onSubmit
→ Handles form submission.

event.target
→ Gives the element that triggered the event.

event.target.value
→ Gives the current input value.

Main flow:

User Action
    ↓
Event
    ↓
Event Handler
    ↓
Logic
    ↓
State/API/UI Update


REAL INDUSTRY EXAMPLE:

[ Add to Cart ]

        ↓

onClick

        ↓

handleAddToCart(product)

        ↓

Update cart state

        ↓

React re-renders

        ↓

Cart count changes

        ↓

User sees updated UI
*/