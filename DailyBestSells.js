  import React, { useState, useEffect, useRef } from "react";
  import data from "../../Data/DailyBestSells.json";

  export default function DailyBestSells() {
    const visibleSlides = 4;
    const [activeCat, setActiveCat] = useState("Featured");
    const [index, setIndex] = useState(visibleSlides);
    const [transition, setTransition] = useState(true);

    const trackRef = useRef();

    const products = data.products.filter(
      (p) => p.category === activeCat
    );

    const total = products.length;

    /* ---- CLONES ---- */
    const slides = [
      ...products.slice(total - visibleSlides),
      ...products,
      ...products.slice(0, visibleSlides),
    ];

    /* ---- AUTO SLIDE ---- */
    useEffect(() => {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(timer);
    }, [index, activeCat]);

    /* ---- TRANSITION END ---- */
    useEffect(() => {
      const track = trackRef.current;

      const handleTransitionEnd = () => {
        if (index >= total + visibleSlides) {
          setTransition(false);
          setIndex(visibleSlides);
        }

        if (index < visibleSlides) {
          setTransition(false);
          setIndex(total + visibleSlides - 1);
        }
      };

      track.addEventListener("transitionend", handleTransitionEnd);
      return () =>
        track.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
    }, [index, total]);

    useEffect(() => {
      if (!transition) {
        requestAnimationFrame(() => setTransition(true));
      }
    }, [transition]);

    /* ---- NEXT / PREV ---- */
    const nextSlide = () => {
      setIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
      setIndex((prev) => prev - 1);
    };

    return (
      <div className="daily-best">
        <div className="daily-header">
          <h2>Daily Best Sells</h2>

          <div className="daily-tabs">
            {data.categories.map((cat) => (
              <span
                key={cat}
                className={activeCat === cat ? "active" : ""}
                onClick={() => {
                  setActiveCat(cat);
                  setIndex(visibleSlides);
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="daily-row">
          {/* LEFT BANNER */}
          <div className="daily-banner">
            <div className="banner-content">
              <h3>{data.banner.title}</h3>
              <button>{data.banner.buttonText} →</button>
            </div>
            <img src={data.banner.image} alt="banner" />
          </div>

          {/* SLIDER */}
          <div className="daily-slider">
            <button className="slider-arrow prev" onClick={prevSlide}>
              ‹
            </button>

            <div className="slider-window">
              <div
                ref={trackRef}
                className="slider-track"
                style={{
                  transform: `translateX(-${
                    index * (100 / visibleSlides)
                  }%)`,
                  transition: transition
                    ? "transform 0.5s ease"
                    : "none",
                }}
              >
                {slides.map((p, i) => (
                  <div className="slide" key={i}>
                    <div className="daily-card">
                      <span className="daily-badge">{p.badge}</span>




<div className="img-box">
  <img src={p.image} alt={p.title} />

                        {/* HOVER ICONS */}
                        <div className="hover-icons">
                          <div className="icon-item">
                            👁
                            <span className="tooltip">Quick View</span>
                          </div>

                          <div className="icon-item">
                            ❤
                            <span className="tooltip">Add To Wishlist</span>
                          </div>

                          <div className="icon-item">
                            ⇄
                            <span className="tooltip">Compare</span>
                          </div>
                        </div>
                      </div>
                      <p className="brand">{p.brand}</p>
                      <h4>{p.title}</h4>

                      <div className="price">
                        ${p.price} <span>${p.oldPrice}</span>
                      </div>

                      <button className="cart-btn">
                        🛒 Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="slider-arrow next" onClick={nextSlide}>
              ›
            </button>
          </div>
        </div>
      </div>
    );
  }
