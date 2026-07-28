import React from 'react';

export default function Navbar({ setCategory }) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">🇮🇳 India Daily News</a>
      
      <div className="nav-links">
        <button className="nav-btn" onClick={() => setCategory("India")}>Top Stories</button>
        <button className="nav-btn" onClick={() => setCategory("India Politics")}>Politics</button>
        <button className="nav-btn highlight-btn" onClick={() => setCategory("India Business")}>Business</button>
        <button className="nav-btn highlight-btn" onClick={() => setCategory("Indian Stock Market")}>Stock Market</button>
        <button className="nav-btn" onClick={() => setCategory("India Technology")}>Technology</button>
        <button className="nav-btn" onClick={() => setCategory("India Sports")}>Sports</button>
        <button className="nav-btn" onClick={() => setCategory("Bollywood")}>Bollywood</button>
      </div>
    </nav>
  );
}