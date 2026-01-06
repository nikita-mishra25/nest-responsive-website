import React from "react";
import data from "../../Data/NestMart.json";

export default function NestMart() {
  return (
    <>
      {/* TOP BANNER */}
      <div className="nest-banner">
        <div className="banner-text">
          <h1>{data.banner.title}</h1>
          <p>
            {data.banner.subtitle.split("Nest Mart")[0]}
            <span>Nest Mart</span>
          </p>

          <div className="subscribe-box">
            <input placeholder={data.banner.placeholder} />
            <button>{data.banner.button}</button>
          </div>
        </div>

        <div className="banner-img">
          <img src={data.banner.image} alt="banner" />
        </div>
      </div>

      {/* BOTTOM FEATURES */}
      <div className="features-row">
        {data.features.map((item, index) => (
          <div className="feature" key={index}>
            <img src={item.icon} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
