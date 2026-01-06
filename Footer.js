import React from "react";

import logo from "../Images/logo.svg";
import appStore from "../Images/appstore.jpg";
import playStore from "../Images/playstore.jpg";
import visa from "../Images/visa.png";

export default function Footer() {

  // Scroll To Top - "practice karni hai aabhi"
  const scrollToTop = () => {
    let position = window.pageYOffset;
    const interval = setInterval(() => {
      if (position > 0) {
        position -= Math.max(10, position / 10);
        window.scrollTo(0, position);
      } else {
        clearInterval(interval);
      }
    }, 16);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-top">

          {/* LEFT */}
          <div className="footer-col">
            <img src={logo} className="logo" alt="logo" />
            <p className="desc">Awesome grocery store website template</p>

            <ul className="footer-info">
              <li>
                <span className="icon">📍</span>
                <span><b>Address:</b> 5171 W Campbell Ave, Kent, Utah 53127 United States</span>
              </li>

              <li>
                <span className="icon">📞</span>
                <span><b>Call Us:</b> (+91) - 540-025-124553</span>
              </li>

              <li>
                <span className="icon">✉</span>
                <span><b>Email:</b> sale@Nest.com</span>
              </li>

              <li>
                <span className="icon">⏰</span>
                <span><b>Hours:</b> 10:00 - 18:00, Mon - Sat</span>
              </li>
            </ul>

            <h4>Install App</h4>
            <p>From App Store or Google Play</p>

            <div className="apps">
              <img src={appStore} alt="App Store" />
              <img src={playStore} alt="Play Store" />
            </div>

            <p className="secure">Secured Payment Gateways</p>
            <div className="payments">
              <img src={visa} alt="Payment Methods" />
            </div>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Support Center</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* ACCOUNT */}
          <div className="footer-col">
            <h3>Account</h3>
            <ul>
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help Ticket</li>
              <li>Shipping Details</li>
              <li>Compare products</li>
            </ul>
          </div>

          {/* CORPORATE */}
          <div className="footer-col">
            <h3>Corporate</h3>
            <ul>
              <li>Become a Vendor</li>
              <li>Affiliate Program</li>
              <li>Farm Business</li>
              <li>Farm Careers</li>
              <li>Our Suppliers</li>
              <li>Accessibility</li>
              <li>Promotions</li>
            </ul>
          </div>

          {/* POPULAR */}
          <div className="footer-col">
            <h3>Popular</h3>
            <ul>
              <li>Milk & Flavoured Milk</li>
              <li>Butter and Margarine</li>
              <li>Eggs Substitutes</li>
              <li>Marmalades</li>
              <li>Sour Cream and Dips</li>
              <li>Tea & Kombucha</li>
              <li>Cheese</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2024 <span>Nest</span> - HTML Ecommerce Template. All rights reserved</p>
            <div className="phones">
            <div>
                <span style={{ fontSize: "40px", lineHeight: "1" }}>📞</span>
                <b>1900 - 6666</b>
                <span>Working 8:00 - 22:00</span>
            </div>
            <div>
                <span style={{ fontSize: "40px", lineHeight: "1" }}>📞</span>
                <b>1900 - 8888</b>
                <span>24/7 Support Center</span>
            </div>
            </div>


          <div className="social">
            <p className="follow-title">Follow Us</p>
            <div className="icons">
              <span>f</span>
              <span>t</span>
              <span>i</span>
              <span>p</span>
              <span>y</span>
            </div>
            <p className="discount-text">
              Up to 15% discount on your first subscribe
            </p>
          </div>
        </div>
      </footer>

      <div className="scroll-top" onClick={scrollToTop}>↑</div>
    </>
  );
}
