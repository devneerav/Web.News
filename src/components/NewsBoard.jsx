import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

export default function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/news?category=${category}`)
      .then(res => res.json())
      .then(data => {
        // Fallback to empty array if data.articles is undefined
        setArticles(data.articles || []); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="news-board">
      <h2 className="board-title">Latest <span className="highlight">{category}</span> News</h2>
      
      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="articles-grid">
          {articles.length > 0 ? (
            articles.map((news, index) => (
              <NewsItem 
                key={index} 
                title={news.title} 
                description={news.description} 
                src={news.urlToImage} 
                url={news.url} 
              />
            ))
          ) : (
            <p className="status-text">No news found for this category at the moment.</p>
          )}
        </div>
      )}
    </div>
  );
}