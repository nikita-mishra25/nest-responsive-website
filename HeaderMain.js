import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBalanceScale,
  FaSearch
} from "react-icons/fa";
import logo from "../Images/logo.svg";

export default function HeaderMain() {

  const [openCategory, setOpenCategory] = useState(false);

  const categoryRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target)
      ) {
        setOpenCategory(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="main-header">

        {/* LOGO */}
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Nest Logo" />
          </NavLink>
        </div>

        {/* SEARCH BOX */}
        <div className="search-box">

          {/* CATEGORY DROPDOWN */}
          <div className="category-dropdown" ref={categoryRef}>

            <div
              className="selected"
              onClick={() => setOpenCategory(!openCategory)}
            >
              <span>All Category</span>
              <span className={`arrow ${openCategory ? "rotate" : ""}`}>
                ▼
              </span>
            </div>

            {openCategory && (
              <div className="options">
                <div>Milks and Dairies</div>
                <div>Wine & Alcohol</div>
                <div>Clothing & Beauty</div>
                <div>Pet Foods & Toy</div>
                <div>Fast food</div>
                <div>Baking material</div>
                <div>Vegetables</div>
                <div>Fresh Seafood</div>
                <div>Noodles & Rice</div>
                <div>Ice cream</div>
              </div>
            )}

          </div>

          <span className="divider"></span>

          <input type="text" placeholder="Search for items..." />
          <FaSearch className="search-icon" />
        </div>

        {/* ICONS */}
        <div className="icons">

          <NavLink to="/compare" className="icon-link">
            <FaBalanceScale />
            <span>Compare</span>
          </NavLink>

          <NavLink to="/wishlist" className="icon-link">
            <FaHeart />
            <span>Wishlist</span>
          </NavLink>

          {/* CART */}
          <div className="icon-link cart-box">
            <FaShoppingCart />
            <span>Cart</span>

            <div className="cart-dropdown">
              <div className="cart-item">
                <img src="https://via.placeholder.com/50" alt="" />
                <div>
                  <p>Daisy Casual Bag</p>
                  <span>1 × ₹800</span>
                </div>
              </div>

              <div className="cart-item">
                <img src="https://via.placeholder.com/50" alt="" />
                <div>
                  <p>Corduroy Shirts</p>
                  <span>1 × ₹3200</span>
                </div>
              </div>

              <div className="cart-total">
                <strong>Total:</strong> ₹4000
              </div>

              <div className="cart-buttons">
                <button className="view">View Cart</button>
                <button className="checkout">Checkout</button>
              </div>
            </div>
          </div>

          {/* ACCOUNT */}
          <div className="icon-link account-box">
            <FaUser />
            <span>Account</span>

            <div className="account-dropdown">
              <p>My Account</p>
              <p>Order Tracking</p>
              <p>My Wishlist</p>
              <p>Settings</p>
              <p>Sign Out</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
