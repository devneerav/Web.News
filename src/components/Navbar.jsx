import React from 'react';

export default function Navbar({ setCategory }) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Daily News</a>
      <div className="nav-links">
        <button className="nav-btn" onClick={() => setCategory("general")}>General</button>
        <button className="nav-btn" onClick={() => setCategory("technology")}>Technology</button>
        <button className="nav-btn" onClick={() => setCategory("health")}>Health</button>
        <button className="nav-btn" onClick={() => setCategory("sports")}>Sports</button>
        <button className="nav-btn highlight-btn" onClick={() => setCategory("Global Finance")}>Finance (Global)</button>
        <button className="nav-btn highlight-btn" onClick={() => setCategory("India Finance")}>Finance (India)</button>
        <button className="nav-btn highlight-btn" onClick={() => setCategory("Global Stocks")}>Stocks (Global)</button>
        <button className="nav-btn highlight-btn" onClick={() => setCategory("Indian Stock Market")}>Stocks (India)</button>
      </div>
    </nav>
  );
}