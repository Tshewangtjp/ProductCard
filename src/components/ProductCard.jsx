import "./ProductCard.css";

function ProductCard({
  name,
  category,
  price,
  description,
  image,
  onViewProduct,
}) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        {image ? (
          <img
            src={image}
            alt={name}
            className="product-image"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
        ) : null}

        <div
          className="image-placeholder"
          style={{ display: image ? "none" : "flex" }}
        >
          <span>📦</span>
          <p>No Image</p>
        </div>

        <span className="category-badge">{category}</span>

        <button
          className="favorite-button"
          aria-label={`Add ${name} to favorites`}
        >
          ♡
        </button>
      </div>

      <div className="product-content">
        <p className="product-category">{category}</p>

        <h2 className="product-name">{name}</h2>

        <p className="product-description">{description}</p>

        <div className="product-footer">
          <div>
            <span className="price-label">Price</span>
            <p className="product-price">{price}</p>
          </div>

          <button
            className="view-button"
            onClick={() => onViewProduct?.(name)}
          >
            View Product
            <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;