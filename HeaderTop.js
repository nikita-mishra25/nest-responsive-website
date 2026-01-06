import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const texts = [
  "Trendy silver jewelry, save up 35% off today",
  "Free delivery on orders above $50",
  "Best grocery deals everyday"
];

export default function HeaderTop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-header">

      <div className="top-left">
        <NavLink to="/about">About Us</NavLink>
        <span className="line">|</span>

        <NavLink to="/account">My Account</NavLink>
        <span className="line">|</span>

        <NavLink to="/wishlist">Wishlist</NavLink>
        <span className="line">|</span>

        <NavLink to="/order-tracking">Order Tracking</NavLink>
      </div>

      <div className="top-center">
        {texts[index]}
      </div>

      <div className="top-right">
        <span className="help-text">Need help? Call Us:</span>
        <strong className="phone">+1800 900</strong>

        <div className="dropdown">
          <select>
            <option>English</option>
            <option>Hindi</option>
            <option>Tamil</option>
            <option>Telugu</option>
            <option>French</option>
          </select>
        </div>

        {/* CURRENCY */}
        <div className="dropdown">
          <select>
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
          </select>
        </div>
      </div>

    </div>
  );
}
