import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Using import.meta.env to access the key from the .env file
    const url = `/api/news?category=${category}`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]); // Re-run whenever category changes

  return (
    <div className="news-board">
      <h2 className="board-title">
        Latest <span className="highlight">{category}</span> News
      </h2>
      
      {loading && <p className="status-text">Loading...</p>}
      {error && <p className="status-text error">{error}</p>}
      
      <div className="articles-container">
        {!loading && !error && articles.map((news, index) => (
          <NewsItem 
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
}