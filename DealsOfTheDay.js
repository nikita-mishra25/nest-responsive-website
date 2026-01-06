import React, { useEffect, useState } from "react";
import dealsData from "../../Data/DealsOfTheDay.json";

export default function DealsOfTheDay() {
  const [showAll, setShowAll] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = {};
      dealsData.forEach((item) => {
        const diff = new Date(item.endTime) - new Date();
        updated[item.id] = {
          days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
          hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
          mins: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
          secs: Math.max(Math.floor((diff / 1000) % 60), 0),
        };
      });
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const visibleDeals = showAll ? dealsData : dealsData.slice(0, 4);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= Math.floor(rating) ? "filled" : ""}`}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="deals-section">
      <div className="deals-header">
        <h2>Deals Of The Day</h2>
        <span className="all-deals" onClick={() => setShowAll(!showAll)}>
          All Deals →
        </span>
      </div>

      <div className="deals-grid">
        {visibleDeals.map((item) => (
          <div className="deal-card" key={item.id}>
            <img src={item.image} alt="" className="deal-img" />

            <div className="deal-overlay">
              <div className="timer">
                {["days", "hours", "mins", "secs"].map((t) => (
                  <div key={t}>
                    <h4>{timeLeft[item.id]?.[t] || "00"}</h4>
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div className="deal-content">
                <h4>{item.title}</h4>

                <div className="rating">
                  {renderStars(item.rating)}
                  <span>{item.rating.toFixed(1)}</span>
                </div>

                <p className="brand">
                  By <span>{item.brand}</span>
                </p>

                <div className="price-row">
                  <span className="price">${item.price}</span>
                  <span className="old">${item.oldPrice}</span>
                  <button>🛒 Add</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
