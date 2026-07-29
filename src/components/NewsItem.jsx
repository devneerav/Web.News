import React from 'react';

export default function NewsItem({ title, description, src, url }) {
  const fallbackImg = "https://placehold.co/600x450/1a202c/ffffff?text=India+Daily+News&font=Montserrat";
  
  // 1. Image URL Sanitization
  let secureSrc = src;
  if (secureSrc && secureSrc.startsWith("http://")) {
    secureSrc = secureSrc.replace("http://", "https://");
  }

  // 2. Strict Article URL Sanitization (Fixes about:blank#blocked)
  const getValidArticleUrl = (link) => {
    if (!link || typeof link !== 'string') return null;
    
    let cleaned = link.trim();
    
    // Catch edge cases where API returns invalid string representations
    if (cleaned === "" || cleaned === "null" || cleaned === "undefined" || cleaned === "https://removed.com") {
      return null;
    }

    // Chrome blocks http links on https hosted apps (Vercel) -> Force https
    if (cleaned.startsWith("http://")) {
      cleaned = cleaned.replace("http://", "https://");
    }

    // Ensure it's a valid web URL
    if (!cleaned.startsWith("https://")) {
      return null;
    }

    return cleaned;
  };

  const validUrl = getValidArticleUrl(url);

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
        
        {/* Render clean HTTPS link or disabled button */}
        {validUrl ? (
          <a href={validUrl} className="btn" target="_blank" rel="noopener noreferrer">
            READ MORE
          </a>
        ) : (
          <button className="btn" disabled style={{ backgroundColor: '#718096', cursor: 'not-allowed' }}>
            UNAVAILABLE
          </button>
        )}
      </div>
    </div>
  );
}