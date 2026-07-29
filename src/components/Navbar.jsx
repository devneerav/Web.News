import React, { useState } from 'react';

export default function Navbar({ setCategory }) {
  const [isOpen, setIsOpen] = useState(false); // Burger menu state

  // Yeh function category change karega aur mobile menu band kar dega
  const handleCategoryClick = (category) => {
    setCategory(category);
    setIsOpen(false); 
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">🇮🇳 India Daily News</a>
      
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Nav Links (Dropdown on mobile) */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <button className="nav-btn" onClick={() => handleCategoryClick("general")}>Top Stories</button>
        <button className="nav-btn" onClick={() => handleCategoryClick("politics")}>Politics</button>
        <button className="nav-btn highlight-btn" onClick={() => handleCategoryClick("business")}>Business</button>
        <button className="nav-btn highlight-btn" onClick={() => handleCategoryClick("stocks")}>Stock Market</button>
        <button className="nav-btn" onClick={() => handleCategoryClick("technology")}>Technology</button>
        <button className="nav-btn" onClick={() => handleCategoryClick("sports")}>Sports</button>
        <button className="nav-btn" onClick={() => handleCategoryClick("Bollywood")}>Bollywood</button>
      </div>
    </nav>
  );
}