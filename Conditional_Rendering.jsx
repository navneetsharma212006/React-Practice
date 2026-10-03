/*
# CONDITIONAL RENDERING IN REACT

## 1. What is Conditional Rendering?

Conditional Rendering means:

"Showing different UI on the screen based on a condition."

In simple words:

React checks a condition
        ↓
If condition is TRUE
        ↓
Show one UI

If condition is FALSE
        ↓
Show another UI


This is similar to normal JavaScript:

if condition is true
    → do something

else
    → do something else


In React, we use the same idea to decide:

"What should be displayed on the screen?"


--------------------------------------------------

## 2. Why Do We Need Conditional Rendering?

In real applications, the UI is not always the same.

For example, imagine a website with a login system.

If the user is logged in:

    Welcome, Navneet
    [ Dashboard ]
    [ Logout ]


If the user is NOT logged in:

    Welcome Guest
    [ Login ]
    [ Sign Up ]


The page needs to show different UI depending on the user's login status.

This is where conditional rendering is used.


--------------------------------------------------

## 3. Simple Real-Life Example

Think about a traffic signal.

If the light is GREEN:

    GO


If the light is RED:

    STOP


The action depends on a condition.

React works similarly:

If user is logged in:

    Show Dashboard


If user is not logged in:

    Show Login Page


So:

CONDITION
    ↓
DECIDE WHAT UI TO SHOW
    ↓
RENDER UI


--------------------------------------------------

# 4. Simple Example Using if-else

Suppose:

const isLoggedIn = true;


We can check:

if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
} else {
    return <h1>Please Login</h1>;
}


If:

isLoggedIn = true

Output:

Welcome Back!


If:

isLoggedIn = false

Output:

Please Login


Here React is conditionally rendering different UI.


--------------------------------------------------

# 5. Real Industry Example: Login / Logout

Imagine an e-commerce website.

When the user is not logged in:

    [ Login ]
    [ Sign Up ]


After the user logs in:

    Welcome, Navneet
    [ Profile ]
    [ Orders ]
    [ Logout ]


We can handle this using conditional rendering.

Example:

const isLoggedIn = true;

if (isLoggedIn) {
    return (
        <div>
            <h1>Welcome Back!</h1>
            <button>Logout</button>
        </div>
    );
}

return (
    <div>
        <h1>Please Login</h1>
        <button>Login</button>
    </div>
);


The condition decides which UI React should display.


--------------------------------------------------

# 6. Conditional Rendering Using Ternary Operator

In React, the ternary operator is very commonly used.

Syntax:

condition ? trueValue : falseValue


Example:

const isLoggedIn = true;

return (
    <div>
        {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}
    </div>
);


Meaning:

isLoggedIn ?
    ↓
If TRUE → show "Welcome Back!"

:
    ↓
If FALSE → show "Please Login"


So:

true
    ↓
Welcome Back!


false
    ↓
Please Login


--------------------------------------------------

# 7. Why Do We Use Curly Braces { }?

Inside JSX, JavaScript expressions are written inside:

{ }


Example:

<h1>{name}</h1>


Similarly:

{isLoggedIn ? <Dashboard /> : <Login />}


The curly braces tell React:

"Now I want to use JavaScript inside JSX."


--------------------------------------------------

# 8. Ternary Operator Example

Suppose:

const isLoggedIn = false;


Code:

return (
    <div>
        {isLoggedIn ? (
            <button>Logout</button>
        ) : (
            <button>Login</button>
        )}
    </div>
);


Since:

isLoggedIn = false


React shows:

[ Login ]


If:

isLoggedIn = true


React shows:

[ Logout ]


--------------------------------------------------

# 9. Conditional Rendering Using &&

Another very common method is:

&&


It is useful when we only want to show something when a condition is true.

Example:

const isAdmin = true;

return (
    <div>
        <h1>Dashboard</h1>

        {isAdmin && <button>Delete User</button>}
    </div>
);


Meaning:

If isAdmin is true
        ↓
Show Delete User button


If isAdmin is false
        ↓
Don't show Delete User button


So:

isAdmin = true

    Dashboard
    [Delete User]


isAdmin = false

    Dashboard


The Delete User button disappears.


--------------------------------------------------

# 10. Real Industry Example: Admin Dashboard

Suppose we have an admin dashboard.

Normal user:

    Dashboard
    Products
    Orders


Admin:

    Dashboard
    Products
    Orders
    Users
    Delete Product
    Manage Employees


We can use:

{isAdmin && <button>Manage Employees</button>}


If:

isAdmin = true

→ Manage Employees is displayed.


If:

isAdmin = false

→ Manage Employees is not displayed.


This is very common in real-world applications.


--------------------------------------------------

# 11. Conditional Rendering with Loading

This is one of the MOST common real-world examples.

Suppose React is calling an API.

Initially:

isLoading = true


We don't have the data yet.

So we show:

Loading...


After API response:

isLoading = false


Now we show:

User data


Example:

if (isLoading) {
    return <p>Loading...</p>;
}

return <UserList />;


Flow:

Component loads
        ↓
API request starts
        ↓
isLoading = true
        ↓
Show "Loading..."


API response received
        ↓
isLoading = false
        ↓
Show UserList


This is conditional rendering.


--------------------------------------------------

# 12. Real Industry Example: Product Website

Imagine Amazon-like product page.

When products are loading:

    Loading products...


After products are loaded:

    Laptop
    ₹60,000
    [Add to Cart]

    Phone
    ₹30,000
    [Add to Cart]


If there are no products:

    No products found.


So we have multiple conditions:

Loading
    ↓
Show Loading...


Not loading + products exist
    ↓
Show Products


Not loading + no products
    ↓
Show "No products found"


This is extremely common in frontend development.


--------------------------------------------------

# 13. Conditional Rendering with API Data

Suppose:

const users = [];


We want:

If users exist:

    Show user list


If users don't exist:

    Show "No users found"


Example:

return (
    <div>
        {users.length > 0 ? (
            <UserList users={users} />
        ) : (
            <p>No users found</p>
        )}
    </div>
);


Condition:

users.length > 0


If TRUE:

<UserList />


If FALSE:

<p>No users found</p>


--------------------------------------------------

# 14. Multiple Conditions

Sometimes we have more than two states.

For example:

1. Loading
2. Error
3. Success
4. Empty data


Example:

if (isLoading) {
    return <p>Loading...</p>;
}

if (error) {
    return <p>Something went wrong</p>;
}

if (users.length === 0) {
    return <p>No users found</p>;
}

return <UserList users={users} />;


Flow:

             API Request
                  ↓
        ┌─────────┴─────────┐
        ↓                   ↓
     Loading?             No
        ↓                   ↓
      Yes                 Error?
        ↓                   ↓
   Loading UI         ┌─────┴─────┐
                      ↓           ↓
                     Yes         No
                      ↓           ↓
                  Error UI    Users exist?
                                  ↓
                           ┌──────┴──────┐
                           ↓             ↓
                          Yes           No
                           ↓             ↓
                      User List    No Users UI


This pattern is very common in production React applications.


--------------------------------------------------

# 15. Conditional Rendering with State

Conditional rendering becomes even more useful when combined with state.

Example:

const [isOpen, setIsOpen] = useState(false);


Button:

<button onClick={() => setIsOpen(!isOpen)}>
    Open
</button>


Then:

{isOpen && <Modal />}


Initially:

isOpen = false

    ↓

Modal is NOT shown.


User clicks button:

isOpen = true

    ↓

Modal is shown.


User clicks again:

isOpen = false

    ↓

Modal disappears.


Flow:

Button Click
    ↓
State changes
    ↓
Condition changes
    ↓
React re-renders
    ↓
UI changes


This is how many UI elements work.


--------------------------------------------------

# 16. Real Industry Example: Modal

Suppose an admin wants to delete a user.

Initially:

Users Table

Rahul
[Delete]


When Delete is clicked:

    Are you sure you want to delete Rahul?

    [Cancel]    [Delete]


This confirmation box can be conditionally rendered.

Example:

const [showModal, setShowModal] = useState(false);


Delete button:

<button onClick={() => setShowModal(true)}>
    Delete
</button>


Modal:

{showModal && (
    <div>
        <h2>Are you sure?</h2>

        <button onClick={() => setShowModal(false)}>
            Cancel
        </button>

        <button>
            Delete
        </button>
    </div>
)}


Flow:

showModal = false
        ↓
Modal hidden


Click Delete
        ↓
setShowModal(true)
        ↓
showModal = true
        ↓
Modal appears


Click Cancel
        ↓
setShowModal(false)
        ↓
Modal disappears


--------------------------------------------------

# 17. Conditional Rendering vs Normal Rendering

Normal rendering:

return <h1>Hello</h1>;


Every time the component renders:

Hello is shown.


Conditional rendering:

return (
    <div>
        {isLoggedIn && <h1>Welcome</h1>}
    </div>
);


Here:

isLoggedIn = true
    ↓
Welcome is shown


isLoggedIn = false
    ↓
Welcome is not shown


So conditional rendering allows the UI to change based on application state or data.


--------------------------------------------------

# 18. Common Ways to Do Conditional Rendering

There are mainly three patterns you should know:

### 1. if-else

Used when the logic is bigger or there are multiple conditions.

Example:

if (isLoading) {
    return <Loading />;
}

return <Dashboard />;


--------------------------------------------------

### 2. Ternary Operator

Used when there are two possible UI options.

Example:

{isLoggedIn ? <Dashboard /> : <Login />}


Meaning:

TRUE  → Dashboard

FALSE → Login


--------------------------------------------------

### 3. && Operator

Used when we only want to show something if the condition is true.

Example:

{isAdmin && <AdminPanel />}


Meaning:

isAdmin = true
    → AdminPanel appears

isAdmin = false
    → AdminPanel does not appear


--------------------------------------------------

# 19. Real MERN Application Example

Suppose you are building an Admin Dashboard using MERN.

Backend gives us:

{
    "name": "Navneet",
    "role": "admin"
}


React stores the user:

const user = {
    name: "Navneet",
    role: "admin"
};


Now we can conditionally show UI.

Example:

<h1>Welcome {user.name}</h1>

{user.role === "admin" && (
    <button>Manage Users</button>
)}


If:

role = "admin"

UI:

Welcome Navneet

[Manage Users]


If:

role = "user"

UI:

Welcome Navneet


The Manage Users button will not be displayed.


This is called ROLE-BASED UI.

It is commonly used in admin dashboards and enterprise applications.


--------------------------------------------------

# 20. Important Point: Conditional Rendering Is About UI

Conditional rendering means:

"Based on some condition, decide which UI should appear."


The condition can come from:

- State
- Props
- API response
- User authentication
- User role
- Form values
- Loading status
- Error status
- Data availability


For example:

isLoggedIn
isAdmin
isLoading
hasError
users.length
isOpen


All of these can control what React displays.


--------------------------------------------------

# 21. Easy Mental Model

Whenever you see a requirement like:

"If this happens, show X.
Otherwise, show Y."

Think:

CONDITIONAL RENDERING


Examples:

"If user is logged in → show Dashboard."

"If user is not logged in → show Login."


"If data is loading → show Spinner."

"If data is loaded → show Data."


"If admin → show Delete button."

"If normal user → hide Delete button."


"If modal is open → show Modal."

"If modal is closed → hide Modal."


--------------------------------------------------

# 22. Most Important Flow

Remember this:

CONDITION
    ↓
React checks the condition
    ↓
TRUE or FALSE
    ↓
Choose UI
    ↓
React renders that UI


When state changes:

STATE CHANGE
    ↓
CONDITION changes
    ↓
React re-renders
    ↓
UI changes


--------------------------------------------------

# 23. Interview Definition

If an interviewer asks:

"What is conditional rendering in React?"

You can say:

"Conditional rendering in React means displaying different UI elements or components based on a condition, such as authentication status, loading state, user role, or available data."


--------------------------------------------------

# QUICK REVISION

Conditional Rendering
→ Showing UI based on a condition.

if-else
→ Good for bigger or multiple conditions.

Ternary
→ Good when there are two UI choices.

&&
→ Good when something should be shown only when a condition is true.


Examples:

{isLoggedIn ? <Dashboard /> : <Login />}


{isAdmin && <AdminPanel />}


if (isLoading) {
    return <Loading />;
}

return <Data />;


REAL INDUSTRY EXAMPLE:

User Login:

isLoggedIn = true
        ↓
Show Dashboard


isLoggedIn = false
        ↓
Show Login


Admin Dashboard:

isAdmin = true
        ↓
Show Manage Users


isAdmin = false
        ↓
Hide Manage Users


API:

isLoading = true
        ↓
Show Loading...


isLoading = false
        ↓
Show Data


MAIN IDEA:

Conditional Rendering =

"Condition ke according decide karna ki React ko screen par kya dikhana hai."
*/