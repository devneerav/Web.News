export default function NewsItem({ title, description, src, url }) {
  // Fallback image if the article has no image
  const defaultImage = "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&q=80";

  return (
    <div className="news-card">
      <img src={src ? src : defaultImage} alt="news thumbnail" className="news-image" />
      <div className="news-content">
        <h3 className="news-title">{title}</h3>
        <p className="news-description">
          {description ? description.slice(0, 90) + "..." : "Click read more to see the full details of this article."}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="read-btn">
          Read More
        </a>
      </div>
    </div>
  );
}