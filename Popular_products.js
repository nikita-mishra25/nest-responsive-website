import React, { useState, useEffect } from "react";
import productsData from "../../Data/Popular_products.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Popular() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [mixedProducts, setMixedProducts] = useState([]);

  const badges = ["Hot", "Sale", "New", "-14%", "-15%"];

  useEffect(() => {
    setCategories(productsData.categories || []);

    const fixedProducts = productsData.products.map((p) => ({
      ...p,
      fixedBadge:
        p.badge && p.badge.trim() !== ""
          ? p.badge
          : badges[Math.floor(Math.random() * badges.length)],
    }));

    setAllProducts(fixedProducts);

    const shuffled = [...fixedProducts];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setMixedProducts(shuffled);
  }, []);

  const filteredProducts = () => {
    let filtered =
      activeCategory === "All"
        ? mixedProducts
        : allProducts.filter((p) => p.category === activeCategory);

    while (filtered.length < 10 && filtered.length > 0) {
      filtered = [...filtered, ...filtered];
    }

    return filtered.slice(0, 10);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <span key={i} className="star full">★</span>
        );
      } else if (rating + 0.5 >= i) {
        stars.push(
          <span key={i} className="star half">★</span>
        );
      } else {
        stars.push(
          <span key={i} className="star">★</span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="popular-section">

      {/* INNER CONTAINER */}
      <div className="popular-container">

        {/* HEADER */}
        <div className="popular-header d-flex justify-content-between align-items-center mb-3">
          <h2>Popular Products</h2>

          <div className="categories d-flex gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn btn-sm ${
                  activeCategory === cat
                    ? "btn-success"
                    : "btn-outline-success"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="row gx-3 gy-4">
          {filteredProducts().map((product, index) => {
            const badge = product.fixedBadge;
            let badgeClass = badge.toLowerCase();
            if (badge === "-14%") badgeClass = "discount14";
            if (badge === "-15%") badgeClass = "discount15";

            return (
              <div
                key={product.id + "-" + index}
                className="col-6 col-md-2"
                style={{ flex: "0 0 20%", maxWidth: "20%" }}
              >
                <div className="product-card h-100 position-relative">

                  <div className={`badge ${badgeClass}`}>{badge}</div>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid mb-2"
                  />

                  {/* hover icons */}
                  <div className="hover-actions">
                    <div className="action-item">
                      ❤
                      <span className="tooltip-text">Add to Wishlist</span>
                    </div>
                    <div className="action-item">
                      ⇄
                      <span className="tooltip-text">Compare</span>
                    </div>
                    <div className="action-item">
                      👁
                      <span className="tooltip-text">Quick View</span>
                    </div>
                  </div>
                  {/* Hover icon end code */}

                  <p className="category">{product.category}</p>
                  <h3 className="h6">{product.title}</h3>
                  <p className="brand">By {product.brand}</p>

                  <div className="rating">{renderStars(product.rating)}</div>

                  <div className="price-add-row">
                    <div className="price">
                      <span>${product.price}</span>
                      {product.oldPrice && (
                        <span className="old">${product.oldPrice}</span>
                      )}
                    </div>

                    <button className="add-btn">
                      🛒 Add
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
