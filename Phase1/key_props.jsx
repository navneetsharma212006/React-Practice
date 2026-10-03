/*
# KEY PROP IN REACT

## 1. What is the key prop?

The `key` prop is a special prop that React uses when we render a list of items.

It helps React identify:

"Which item is this?"

For example, suppose we have:

const users = [
    {
        id: 1,
        name: "Rahul"
    },
    {
        id: 2,
        name: "Aman"
    },
    {
        id: 3,
        name: "Priya"
    }
];


When we render this list:

{users.map((user) => (
    <div key={user.id}>
        {user.name}
    </div>
))}


Here:

key={user.id}

is the key prop.


In simple words:

KEY = UNIQUE IDENTITY OF A LIST ITEM


--------------------------------------------------

## 2. Why do we need key?

React applications are constantly changing.

For example:

A user may be:

- added
- deleted
- updated
- moved to another position

React needs to understand what exactly changed.

The `key` helps React identify each item and update the correct item instead of treating every item as completely new.


So:

Without key:

React may have difficulty identifying list items correctly.


With key:

React knows exactly which item is:

- new
- removed
- changed
- still the same


--------------------------------------------------

## 3. Real-Life Analogy

Imagine a classroom.

There are three students:

Student ID 101 → Rahul
Student ID 102 → Aman
Student ID 103 → Priya


Now imagine Aman leaves the classroom.

Before:

101 → Rahul
102 → Aman
103 → Priya


After:

101 → Rahul
103 → Priya


The student IDs help us identify the students.

React's `key` works in a similar way.

For React:

101 → Rahul
102 → Aman
103 → Priya


These keys give each list item a stable identity.


--------------------------------------------------

## 4. Simple Example

Suppose:

const fruits = [
    "Apple",
    "Banana",
    "Mango"
];


We render:

{fruits.map((fruit, index) => (
    <p key={index}>
        {fruit}
    </p>
))}


Here:

Apple  → key = 0
Banana → key = 1
Mango  → key = 2


React can use these keys to identify the items.


--------------------------------------------------

## 5. Better Example Using ID

In real applications, data usually has an ID.

Example:

const products = [
    {
        id: 101,
        name: "Laptop"
    },
    {
        id: 102,
        name: "Phone"
    },
    {
        id: 103,
        name: "Headphones"
    }
];


We render:

{products.map((product) => (
    <div key={product.id}>
        <h2>{product.name}</h2>
    </div>
))}


Now:

Laptop     → key = 101
Phone      → key = 102
Headphones → key = 103


This is better because these IDs are stable and unique.


--------------------------------------------------

## 6. What Problem Does key Solve?

Imagine this list:

A
B
C


React knows:

A → item 1
B → item 2
C → item 3


Now we add:

D


List becomes:

A
B
C
D


React can see:

A → same
B → same
C → same
D → new


So React only needs to deal with the new item.


The key helps React make this connection.


--------------------------------------------------

## 7. Example: Deleting an Item

Suppose we have:

Product ID 101 → Laptop
Product ID 102 → Phone
Product ID 103 → Headphones


UI:

Laptop
Phone
Headphones


Now Phone is deleted.

New list:

Laptop
Headphones


Because of the keys:

101 → Laptop
102 → Phone
103 → Headphones


React knows:

101 → still exists
102 → removed
103 → still exists


So React understands that only the item with key `102` was removed.


This is one of the main reasons keys are important.


--------------------------------------------------

## 8. How React Uses key

Think of React's process like this:

OLD LIST

101 → Laptop
102 → Phone
103 → Headphones


        ↓

Something changes


NEW LIST

101 → Laptop
103 → Headphones
104 → Mouse


        ↓

React compares the lists using keys


React understands:

101 → still exists
102 → removed
103 → still exists
104 → new


        ↓

React updates the UI accordingly


So the key helps React match items between renders.


--------------------------------------------------

## 9. Real Industry Example: E-Commerce Website

Imagine an Amazon-like application.

The backend sends:

const products = [
    {
        id: 101,
        name: "Laptop",
        price: 60000
    },
    {
        id: 102,
        name: "Phone",
        price: 30000
    },
    {
        id: 103,
        name: "Headphones",
        price: 2000
    }
];


React:

{products.map((product) => (
    <ProductCard
        key={product.id}
        product={product}
    />
))}


Here:

Laptop
    → key = 101

Phone
    → key = 102

Headphones
    → key = 103


If the Phone is removed from the database:

Phone
    → key = 102


React can identify that item and update the list correctly.


--------------------------------------------------

## 10. Real Industry Example: Admin Dashboard

Suppose an admin dashboard shows users:

ID  Name
101 Rahul
102 Aman
103 Priya


React code:

{users.map((user) => (
    <div key={user.id}>
        <span>{user.name}</span>
    </div>
))}


Now admin deletes Aman.

Before:

101 → Rahul
102 → Aman
103 → Priya


After:

101 → Rahul
103 → Priya


React knows:

key 102 disappeared.


Therefore:

Aman was removed.


This is very common in:

- Admin dashboards
- CRM systems
- ERP systems
- E-commerce
- Banking applications
- Social media applications


--------------------------------------------------

## 11. Why Can't We Just Use the Name?

We could sometimes use:

key={user.name}


But names are not guaranteed to be unique.

Example:

Rahul
Rahul
Priya


Now:

Rahul → key = "Rahul"
Rahul → key = "Rahul"
Priya → key = "Priya"


Two items have the same key.

That's a problem.

A database ID is usually better:

101 → Rahul
102 → Rahul
103 → Priya


Now every item has a unique key.


--------------------------------------------------

## 12. Why Should key Be Unique?

React expects keys to uniquely identify items among their siblings.

Bad:

key="1"
key="1"
key="1"


All three items have the same key.


Good:

key="101"
key="102"
key="103"


Each item has a different key.


So remember:

KEY SHOULD BE UNIQUE AMONG THE ITEMS IN THAT LIST.


--------------------------------------------------

## 13. Why Should key Be Stable?

Stable means:

The key should remain associated with the same item across renders.

Example:

Laptop → 101
Phone → 102
Headphones → 103


If the list changes, Laptop should still have:

key = 101


Phone should still have:

key = 102


The identity should not randomly change.


--------------------------------------------------

## 14. Don't Use Math.random()

Avoid:

key={Math.random()}


Why?

Because `Math.random()` generates a different value every time.

For example:

First render:

Laptop → key = 0.235

Next render:

Laptop → key = 0.827


React may think:

"These are different items."


That defeats the purpose of the key.


So avoid:

key={Math.random()}


Use:

key={product.id}


instead.


--------------------------------------------------

## 15. What About Array Index?

You may see:

{products.map((product, index) => (
    <div key={index}>
        {product.name}
    </div>
))}


Here:

index = 0
index = 1
index = 2


This can work for simple lists that never change order or have items inserted/removed.

But it can cause problems when the list changes.


For example:

Before:

0 → Laptop
1 → Phone
2 → Headphones


Now Phone is removed.

After:

0 → Laptop
1 → Headphones


Headphones changed from:

key = 2

to:

key = 1


Its identity changed even though it is the same product.


That's why a stable ID is generally preferred.


--------------------------------------------------

## 16. Prefer Database ID

If your backend gives:

{
    "id": 101,
    "name": "Laptop"
}


Use:

key={product.id}


This is usually the best choice.

In a MERN application:

MongoDB
    ↓
Document has _id
    ↓
Express API
    ↓
React receives data
    ↓
Use unique ID as key


For example:

key={product._id}


or if your API maps it to `id`:

key={product.id}


--------------------------------------------------

## 17. key Is Not Passed as a Normal Prop

This is an IMPORTANT point.

Suppose:

<ProductCard
    key={product.id}
    product={product}
/>


Here:

key

is used by React.

It is NOT available inside `ProductCard` as a normal prop.

For example:

function ProductCard(props) {

    console.log(props.key);

}


This will NOT give you the key.


If the component needs the ID, pass it separately:

<ProductCard
    key={product.id}
    productId={product.id}
/>


Now:

function ProductCard({ productId }) {

    console.log(productId);

}


Here:

key

and:

productId

are two different things.


--------------------------------------------------

## 18. key Does Not Mean Database Primary Key

The word "key" can be confusing.

React's key does NOT have to be a database primary key.

It simply needs to be:

- unique among the list items
- stable
- associated with the correct item


A database ID is often a convenient choice because it already satisfies these requirements.


--------------------------------------------------

## 19. key With Components

We can use keys when rendering components.

Example:

function ProductList({ products }) {

    return (
        <div>

            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}

        </div>
    );
}


Here:

ProductCard 1 → key = 101
ProductCard 2 → key = 102
ProductCard 3 → key = 103


React uses these keys to identify each ProductCard.


--------------------------------------------------

## 20. key With a Table

Suppose an admin dashboard has:

Name       Email
Rahul      rahul@gmail.com
Aman       aman@gmail.com
Priya      priya@gmail.com


Data:

const users = [
    {
        id: 1,
        name: "Rahul",
        email: "rahul@gmail.com"
    },
    {
        id: 2,
        name: "Aman",
        email: "aman@gmail.com"
    },
    {
        id: 3,
        name: "Priya",
        email: "priya@gmail.com"
    }
];


Rendering:

{users.map((user) => (
    <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
    </tr>
))}


Here:

key={user.id}


gives each table row a stable identity.


--------------------------------------------------

## 21. key + List Rendering

Remember that `key` is especially important when using:

map()


Example:

{users.map((user) => (
    <div key={user.id}>
        {user.name}
    </div>
))}


The relationship is:

Array
    ↓
map()
    ↓
Multiple elements
    ↓
key
    ↓
React identifies each element


So when you learn:

"Rendering Lists"

you should also learn:

"key prop"


They are closely related.


--------------------------------------------------

## 22. key + State

Keys become especially important when list items contain their own state.

Imagine:

Product A
[Input: "Hello"]

Product B
[Input: "World"]


If the list is reordered, React needs to know which component belongs to which product.

Stable keys help React preserve the correct component identity and its state.


For example:

<ProductCard key={product.id} />


React can associate:

Product A → its ProductCard state

Product B → its ProductCard state


This is another important reason stable keys matter.


--------------------------------------------------

## 23. Common Mistake

Wrong:

{products.map((product) => (
    <ProductCard product={product} />
))}


There is no key.

React may show a warning such as:

"Each child in a list should have a unique key."


Correct:

{products.map((product) => (
    <ProductCard
        key={product.id}
        product={product}
    />
))}


Now every item has a key.


--------------------------------------------------

## 24. The Most Common Pattern

In real React projects, you will frequently see:

{items.map((item) => (
    <Component
        key={item.id}
        item={item}
    />
))}


Understand this pattern properly:

items
    ↓
map()
    ↓
item
    ↓
key={item.id}
    ↓
React identifies item
    ↓
item passed to component
    ↓
<Component />


Example:

{products.map((product) => (
    <ProductCard
        key={product.id}
        product={product}
    />
))}


--------------------------------------------------

## 25. Why React Doesn't Automatically Use the ID?

React does not automatically know which property in your data should be used as the identity.

Your object could be:

{
    productCode: "P101",
    name: "Laptop"
}


Or:

{
    uuid: "abc123",
    name: "Laptop"
}


Or:

{
    id: 101,
    name: "Laptop"
}


React lets you tell it:

"Use this value as the identity."

Example:

key={product.productCode}


or:

key={product.uuid}


or:

key={product.id}


--------------------------------------------------

# 26. Easy Mental Model

Think of `key` as an ID card.

Suppose React has:

Laptop
Phone
Headphones


React asks:

"How do I identify each one?"


You give:

Laptop → 101
Phone → 102
Headphones → 103


Now React can track them.


So:

KEY = ID CARD FOR A LIST ITEM


--------------------------------------------------

# 27. Complete Real Industry Example

Suppose we have a shopping application.

Backend returns:

const products = [
    {
        id: 101,
        name: "Laptop",
        price: 60000
    },
    {
        id: 102,
        name: "Phone",
        price: 30000
    },
    {
        id: 103,
        name: "Headphones",
        price: 2000
    }
];


React:

function ProductList() {

    return (
        <div>

            {products.map((product) => (

                <ProductCard
                    key={product.id}
                    product={product}
                />

            ))}

        </div>
    );
}


Here:

products
    ↓
map()
    ↓
Product 101
    ↓
key = 101
    ↓
ProductCard


Product 102
    ↓
key = 102
    ↓
ProductCard


Product 103
    ↓
key = 103
    ↓
ProductCard


If Product 102 is deleted:

101 → still exists
102 → removed
103 → still exists


React can understand the change using the keys.


--------------------------------------------------

# 28. Interview Definition

If an interviewer asks:

"What is the key prop in React?"

You can say:

"The key prop is a special React prop used when rendering lists. It gives each list item a stable and unique identity, allowing React to efficiently identify which items have been added, removed, or changed."


--------------------------------------------------

# QUICK REVISION

KEY PROP
→ Gives each list item a unique identity.

WHY?
→ Helps React identify and track list items between renders.

WHERE?
→ Mainly used when rendering lists with map().

Example:

{users.map((user) => (
    <div key={user.id}>
        {user.name}
    </div>
))}


GOOD KEY:

key={user.id}


Avoid:

key={Math.random()}


Usually avoid using:

key={index}


when the list can change, reorder, add, or remove items.


IMPORTANT:

key is special to React.

It is NOT available as:

props.key


If your component needs the ID, pass it separately:

<ProductCard
    key={product.id}
    productId={product.id}
/>


MAIN IDEA:

List:

Laptop
Phone
Headphones


Keys:

101
102
103


React:

"101 = Laptop"
"102 = Phone"
"103 = Headphones"


If something changes:

React uses these keys to understand which item changed.


So remember:

key = stable identity of a list item.

And the most common industry pattern is:

array.map((item) => (
    <Component
        key={item.id}
        item={item}
    />
))


In one line:

"Key prop React ko batata hai ki list ke andar kaunsa item kaunsa hai, so React can correctly track and update the list."
*/