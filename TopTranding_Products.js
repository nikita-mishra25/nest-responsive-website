import React from "react";
import productsData from "../../Data/TopTranding_Products.json";

export default function TopTrendingProducts() {
  const sections = ["Top Selling", "Trending Products", "Recently Added", "Top Rated"];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= Math.floor(rating) ? "filled" : ""}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="top-trending-section">
      <div className="top-trending-grid">
        {sections.map((sec) => (
          <div className="top-column" key={sec}>
            <h3 className="column-title">{sec}</h3>
            <div className="title-line"></div>

            {productsData
              .filter((item) => item.section === sec)
              .map((item) => (
                <div className="top-product-row" key={item.id}>
                  <div className="img-box">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="product-info">
                    <h4>{item.title}</h4>

                    <div className="rating">
                      {renderStars(item.rating)}
                      <span>({item.rating.toFixed(1)})</span>
                    </div>

                    <div className="price-row">
                      <span className="price">${item.price}</span>
                      <span className="old">$33.8</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
