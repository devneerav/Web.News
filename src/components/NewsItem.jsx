import React from 'react';

export default function NewsItem({ title, description, src, url }) {
  // Clean, sleek dark background fallback instead of repeating newspaper
  const fallbackImg = "https://placehold.co/600x450/1a202c/ffffff?text=India+Daily+News&font=Montserrat";
  
  // VERCEL SECURE FIX: Convert http:// to https://
  let secureSrc = src;
  if (secureSrc && secureSrc.startsWith("http://")) {
    secureSrc = secureSrc.replace("http://", "https://");
  }

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
        <a href={url} className="btn" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
}