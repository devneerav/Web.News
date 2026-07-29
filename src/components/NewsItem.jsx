import React from 'react';

export default function NewsItem({ title, description, src, url }) {
  // Guaranteed working professional fallback image
  const fallbackImg = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop";
  
  // 🚀 VERCEL SECURE FIX: Convert http:// to https://
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
          e.target.src = fallbackImg; // Load fallback if original link fails
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description ? description : "No description available for this article."}</p>
        <a href={url} className="btn" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
}