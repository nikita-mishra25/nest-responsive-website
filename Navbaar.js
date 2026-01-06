import { useState } from "react";

// Dummy data for mega menu (heading wise)
const megaMenuData = {
  Deals: {
    columns: [
      { title: "Hot Deals", items: ["Deal 1", "Deal 2", "Deal 3"] },
      { title: "Discounts", items: ["Offer 1", "Offer 2", "Offer 3"] },
    ],
  },
  Home: {
    columns: [
      { title: "Fruit & Veg", items: ["Fresh Veg", "Exotic Fruits"] },
      { title: "Dairy & Breakfast", items: ["Milk", "Butter", "Eggs"] },
    ],
  },
  About: {
    columns: [
      { title: "Our Story", items: ["History", "Mission"] },
      { title: "Team", items: ["Founders", "Members"] },
    ],
  },
  Shop: {
    columns: [
      { title: "Categories", items: ["Clothing", "Electronics", "Toys"] },
      { title: "Brands", items: ["Brand A", "Brand B"] },
    ],
  },
  Vendors: {
    columns: [
      { title: "Top Vendors", items: ["Vendor 1", "Vendor 2"] },
      { title: "New Vendors", items: ["Vendor 3", "Vendor 4"] },
    ],
  },
  "Mega menu": {
    columns: [
      { title: "Category 1", items: ["Option 1", "Option 2"] },
      { title: "Category 2", items: ["Option 3", "Option 4"] },
    ],
    banner: {
      title: "Mega Deals",
      subtitle: "Check Out",
      btnText: "Shop Now",
    },
  },
  Blog: {
    columns: [
      { title: "Latest Posts", items: ["Post 1", "Post 2"] },
      { title: "Categories", items: ["News", "Tips"] },
    ],
  },
  Pages: {
    columns: [
      { title: "About Pages", items: ["Team", "Contact"] },
      { title: "Extra Pages", items: ["FAQ", "Support"] },
    ],
  },
  Contact: {
    columns: [
      { title: "Reach Us", items: ["Email", "Phone"] },
      { title: "Locate Us", items: ["Map", "Address"] },
    ],
  },
};

export default function Navbar() {
  const [showCategory, setShowCategory] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);

  const menuItems = Object.keys(megaMenuData);

  return (
    <nav className="main-navbar">
      {/* BROWSE ALL CATEGORIES */}
<div className="category-wrapper">
  <button
    className="category-btn"
    onClick={() => setShowCategory(!showCategory)}
  >
    ⬜ Browse All Categories <span className={`arrow ${showCategory ? "rotate" : ""}`}>▾</span>
  </button>

  {showCategory && (
    <div className="category-dropdown">
      <div className="category-grid">
        <div>🥛 Milks and Dairies</div>
        <div>🍷 Wines & Drinks</div>
        <div>👗 Clothing & Beauty</div>
        <div>🦐 Fresh Seafood</div>
        <div>🐶 Pet Foods & Toy</div>
        <div>🍔 Fast food</div>

        {showMore && (
          <>
            <div>🥖 Baking material</div>
            <div>🥦 Vegetables</div>
            <div>🍎 Fresh Fruit</div>
            <div>🍞 Bread and Juice</div>
          </>
        )}
      </div>

      <div className="show-more" onClick={() => setShowMore(!showMore)}>
        {showMore ? "− Show Less" : "+ Show More"} <span className={`arrow ${showMore ? "rotate" : ""}`}>▾</span>
      </div>
    </div>
  )}
</div>

      {/* MAIN NAV MENU */}
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li
            key={item}
            onMouseEnter={() => setHoverMenu(item)}
            onMouseLeave={() => setHoverMenu(null)}
          >
            {item} <span className="arrow">▾</span>

            {hoverMenu === item && (
              <div className="mega-menu">
                {item === "Mega menu" && megaMenuData[item].banner ? (
                  <>
                    <div className="mega-columns">
                      {megaMenuData[item].columns.map((col, idx) => (
                        <div key={idx}>
                          <h4>{col.title}</h4>
                          {col.items.map((it, i) => (
                            <p key={i}>{it}</p>
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className="mega-banner">
                      <h5>{megaMenuData[item].banner.title}</h5>
                      <h3>{megaMenuData[item].banner.subtitle}</h3>
                      <button>{megaMenuData[item].banner.btnText}</button>
                    </div>
                  </>
                ) : (
                  <div className="mega-columns single-column">
                    {megaMenuData[item].columns.map((col, idx) => (
                      <div key={idx}>
                        <h4>{col.title}</h4>
                        {col.items.map((it, i) => (
                          <p key={i}>{it}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* SUPPORT */}
      <div className="support">
        🎧 <strong>1900 - 888</strong>
        <span className="center">24/7 Support Center</span>
      </div>
    </nav>
  );
}
