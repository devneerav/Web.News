import React from 'react';

export default function NewsItem({ title, description, src, url }) {
  const fallbackImg = "https://placehold.co/600x400/edf2f7/1a202c?text=News+Unavailable";
  
  return (
    <div className="news-card">
      <img src={src ? src : fallbackImg} className="card-img-top" alt="news thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description ? description : "No description available for this article."}</p>
        <a href={url} className="btn" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
}