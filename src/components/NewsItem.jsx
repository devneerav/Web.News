import React from 'react';

export default function NewsItem({ title, description, src, url }) {
  const fallbackImg = "https://placehold.co/600x450/1a202c/ffffff?text=India+Daily+News&font=Montserrat";
  
  let secureSrc = src;
  if (secureSrc && secureSrc.startsWith("http://")) {
    secureSrc = secureSrc.replace("http://", "https://");
  }

  // Check if URL exists and is valid (not just a removed article link)
  const isValidUrl = url && url !== "https://removed.com";

  return (
    <div className="news-card">
      <img 
        src={secureSrc || fallbackImg} 
        className="card-img-top" 
        alt="news thumbnail" 
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = fallbackImg;
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description ? description : "Click read more to see the full story."}</p>
        
        {/* 🔥 The Fix: Conditionally render the button based on URL validity */}
        {isValidUrl ? (
          <a href={url} className="btn" target="_blank" rel="noopener noreferrer">READ MORE</a>
        ) : (
          <button className="btn" disabled style={{ backgroundColor: '#718096', cursor: 'not-allowed' }}>
            UNAVAILABLE
          </button>
        )}
      </div>
    </div>
  );
}