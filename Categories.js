import React, { useState, useRef } from "react";
import data from "../../Data/Categories.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Categories() {
  const [activeTab, setActiveTab] = useState("Pet Foods");
  const swiperRef = useRef(null);

  const filteredCategories = data.categories.filter((cat) =>
    cat.title.toLowerCase().includes(activeTab.split(" ")[0].toLowerCase())
  );

  // slides ko repeat kiya loop ke liye, taki move krne pr slider ruke na 
  const swiperCategories =
    filteredCategories.length >= 10
      ? [...filteredCategories, ...filteredCategories]
      : [...filteredCategories, ...data.categories, ...data.categories];

  return (
    <div className="featured-wrapper">
      <div className="fc-header">
        <h2>Featured Categories</h2>

        <ul className="fc-tabs">
          {data.tabs.map((tab, i) => (
            <li
              key={i}
              className={tab === activeTab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="fc-arrows">
          <div className="fc-prev">←</div>
          <div className="fc-next">→</div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={10}
        spaceBetween={25}
        slidesPerGroup={2}              
        loop={true}                     
        loopFillGroupWithBlank={true}   
        speed={800}                     
        grabCursor={true}
        navigation={{
          prevEl: ".fc-prev",
          nextEl: ".fc-next",
        }}
        className="fc-swiper"
      >
        {swiperCategories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="fc-card" style={{ backgroundColor: item.bg }}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <span>{item.items}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
            <div className="fc-banners">
              {data.categories.slice(0, 3).map((item, i) => (
                <div key={i} className="fc-banner" style={{ backgroundColor: item.bg }}>
                  <div className="banner-text">
                    <h3>{item.title}</h3>
                    <button>Shop Now →</button>
                  </div>
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </div>
      
          </div>
      
  );
}
