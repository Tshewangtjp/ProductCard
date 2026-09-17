# 🛍️ Shoply — Product Card Component

A modern and responsive React e-commerce product card application created for **Question 3 — Product Card Component**.

The project demonstrates the core React concepts of **Components, Props, JSX, and Reusability** by creating one reusable `ProductCard` component and using it to display multiple products.

---

## 📌 Assignment

### Question 3 — Product Card Component

Create a reusable `ProductCard` component for an e-commerce website.

Each product card should display:

* Product image or placeholder
* Product Name
* Category
* Price
* Short description
* "View Product" button

At least four product cards must be created using the same component.

---

## ✨ Features

* 🎨 Modern e-commerce UI/UX
* 📱 Fully responsive design
* 🧩 Reusable `ProductCard` component
* 📦 Product information passed through props
* 🖼️ Product image with fallback placeholder
* 🏷️ Product category badge
* 💰 Product price display
* 📝 Short product description
* 🔍 Product search functionality
* ❤️ Favorite button UI
* 🛒 Shopping cart button UI
* 👆 Interactive "View Product" button
* ✨ Hover animations and transitions
* 📐 Responsive product grid
* ⚛️ Built with React and JSX

---

## 🛠️ Technologies Used

* **React**
* **JavaScript**
* **JSX**
* **CSS3**
* **Vite**
* **HTML5**

---

## 📂 Project Structure

```text
product-card-app/
│
├── public/
│   └── products/
│       ├── speaker.jpg
│       ├── headphones.jpg
│       ├── watch.jpg
│       └── backpack.jpg
│
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   └── ProductCard.css
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Create the React project

```bash
npm create vite@latest product-card-app -- --template react
```

### 2. Navigate into the project

```bash
cd product-card-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL shown in the terminal.

---

## 🧩 ProductCard Component

The main component of this project is:

```text
src/components/ProductCard.jsx
```

The component receives product information through **props**.

Example:

```jsx
<ProductCard
  name="Bluetooth Speaker"
  category="Electronics"
  price="₹1,999"
  description="Portable wireless speaker with rich sound and deep bass."
  image="speaker.jpg"
/>
```

The component receives the values using:

```jsx
function ProductCard({
  name,
  category,
  price,
  description,
  image,
}) {
  // Component UI
}
```

---

## 🔄 Reusability

The same `ProductCard` component is used for multiple products.

For example:

```jsx
<ProductCard
  name="Bluetooth Speaker"
  category="Electronics"
  price="₹1,999"
  description="Portable wireless speaker with rich sound and deep bass."
/>

<ProductCard
  name="Wireless Headphones"
  category="Audio"
  price="₹2,499"
  description="Comfortable wireless headphones with immersive sound."
/>

<ProductCard
  name="Smart Watch"
  category="Wearables"
  price="₹3,999"
  description="Modern smartwatch with fitness tracking and notifications."
/>

<ProductCard
  name="Travel Backpack"
  category="Accessories"
  price="₹1,499"
  description="Durable everyday backpack with multiple storage compartments."
/>
```

Instead of creating four separate components, one reusable component handles all products.

---

## 📦 Product Data

Product information is stored separately in:

```text
src/data/products.js
```

Example:

```javascript
const products = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: "₹1,999",
    description: "Portable wireless speaker with rich sound and deep bass.",
    image: "speaker.jpg",
  },
];
```

This makes the application easier to maintain and allows additional products to be added without modifying the `ProductCard` component.

---

## 🔁 Rendering Products

The products are rendered dynamically using JavaScript's `.map()` method:

```jsx
{products.map((product) => (
  <ProductCard
    key={product.id}
    name={product.name}
    category={product.category}
    price={product.price}
    description={product.description}
    image={product.image}
  />
))}
```

This is another example of component reusability.

---

## 🔍 Search Functionality

The application also includes a simple product search.

Users can search by:

* Product name
* Product category

Example:

```text
Search products...
```

The displayed products are filtered based on the search text.

---

## 🎨 UI/UX Design

The application includes a modern storefront design with:

* Sticky navigation bar
* Hero section
* Product collection section
* Responsive product cards
* Product images
* Category badges
* Price hierarchy
* Hover effects
* Responsive layout
* Mobile-friendly navigation
* Empty search state
* Modern spacing and typography

The layout automatically adapts to different screen sizes.

---

## 📱 Responsive Design

The product grid changes based on screen size.

### Desktop

```text
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│ Product │ │ Product │ │ Product │ │ Product │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
```

### Tablet

```text
┌─────────┐ ┌─────────┐
│ Product │ │ Product │
└─────────┘ └─────────┘

┌─────────┐ ┌─────────┐
│ Product │ │ Product │
└─────────┘ └─────────┘
```

### Mobile

```text
┌───────────────┐
│    Product    │
└───────────────┘

┌───────────────┐
│    Product    │
└───────────────┘

┌───────────────┐
│    Product    │
└───────────────┘
```

---

## 🧠 React Concepts Demonstrated

| Concept               | Implementation                    |
| --------------------- | --------------------------------- |
| Components            | `ProductCard.jsx`                 |
| Props                 | Product information               |
| JSX                   | Component UI                      |
| Reusability           | Same ProductCard for all products |
| `.map()`              | Rendering product list            |
| Event Handling        | View Product button               |
| Conditional Rendering | Image placeholder                 |
| State                 | Search input                      |
| CSS                   | UI and responsive design          |

---

## 📋 Assignment Requirements

| Requirement                 | Status |
| --------------------------- | ------ |
| Product image / placeholder | ✅      |
| Product name                | ✅      |
| Category                    | ✅      |
| Price                       | ✅      |
| Short description           | ✅      |
| View Product button         | ✅      |
| At least 4 products         | ✅      |
| Reusable component          | ✅      |
| Product data through props  | ✅      |
| Components                  | ✅      |
| JSX                         | ✅      |
| Props                       | ✅      |
| Reusability                 | ✅      |

---

## 🛒 Sample Products

### 1. Bluetooth Speaker

**Category:** Electronics
**Price:** ₹1,999

Portable wireless speaker with rich sound and deep bass.

### 2. Wireless Headphones

**Category:** Audio
**Price:** ₹2,499

Comfortable wireless headphones with immersive sound.

### 3. Smart Watch

**Category:** Wearables
**Price:** ₹3,999

Modern smartwatch with fitness tracking and notifications.

### 4. Travel Backpack

**Category:** Accessories
**Price:** ₹1,499

Durable everyday backpack with multiple storage compartments.

---

## 📸 Application Preview

The application contains:

* Modern navigation
* Featured collection hero section
* Search bar
* Four reusable product cards
* Product images
* Categories
* Prices
* Descriptions
* View Product buttons
* Responsive layout

---

## 🔧 Available Commands

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 🎯 Learning Objective

The main purpose of this project is to understand how React components can be created once and reused with different data.

Instead of writing separate HTML structures for every product, the application uses:

```jsx
<ProductCard />
```

and supplies different information through props.

This approach makes React applications:

* Easier to maintain
* Easier to scale
* More organized
* More reusable
* More consistent

---

## 👨‍💻 Assignment Submission

**Project:** Product Card Component
**Technology:** React
**Build Tool:** Vite
**Concepts:** Components, Props, JSX, Reusability

---

## 📄 License

This project was created for educational and academic purposes.
