import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import HomeImg1 from "../Images/img1.jpg";
import HomeImg2 from "../Images/img2.webp";
import Categories from "./Categories";
import Popular from "./Popular_products";
import DailyBestSells from "./DailyBestSells";
import DealsOfTheDay from "./DealsOfTheDay";
import TopProducts from "./TopTranding_Products";
import NestMart from "./NestMart";


function Home() {

  const images = [
    { src: HomeImg1, dotColor: "#ceae96ff" },
    { src: HomeImg2, dotColor: "#3bb77e" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* ================= SLIDER SECTION ================= */}
      <div className="slider-container">

        {images.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt="slider"
            className={`slider-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}

        <div className="slider-arrow left" onClick={prevSlide}>❮</div>
        <div className="slider-arrow right" onClick={nextSlide}>❯</div>

        <div className="slider-dots">
          {images.map((item, index) => (
            <span
              key={index}
              className="dot"
              style={{
                backgroundColor:
                  index === currentIndex ? item.dotColor : "#ddd",
                borderColor: item.dotColor
              }}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* ================= HOME SECTIONS ROUTES ================= */}
      <Routes>
        {/* Home default */}
        <Route
          path="/"
          element={
            <>
              <Categories />
        <Popular />
        <DailyBestSells/>
        <DealsOfTheDay/>
        <TopProducts/>
        <NestMart/>
            </>
          }
        />

        {/* Individual section routes */}
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Popular" element={<Popular />} />

      </Routes>
    </>
  );
}

export default Home;
