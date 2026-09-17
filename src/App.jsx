import { useState } from "react";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    );
  });

  const handleViewProduct = (name) => {
    alert(`You selected: ${name}`);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">T</div>

          <div>
            <h1>Tshewang.com</h1>
            <span>Modern Store</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </div>

        <button className="cart-button">
          🛒
          <span>Cart</span>
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="hero-label">✨ Featured Collection</span>

            <h2>
              Discover products
              <br />
              <span>you'll love.</span>
            </h2>

            <p>
              Explore our carefully selected collection of modern,
              practical and stylish products.
            </p>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-header">
            <div>
              <span className="section-label">OUR COLLECTION</span>

              <h2>Featured Products</h2>

              <p>
                Simple products. Great quality. Designed for everyday life.
              </p>
            </div>

            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                  onViewProduct={handleViewProduct}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div>🔎</div>
              <h3>No products found</h3>
              <p>Try searching for another product or category.</p>
            </div>
          )}
        </section>
      </main>

      <footer>
        <div>
          <strong>Tshewang.com</strong>
          <p>Simple shopping for modern living.</p>
        </div>

        <p>© 2026 Tshewang. Product Card Component Demo.</p>
      </footer>
    </div>
  );
}

export default App;