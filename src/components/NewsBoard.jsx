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
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  return (
    <div className="news-board">
      <h2 className="board-title">Latest <span className="highlight">{category}</span> News</h2>
      {loading ? <p style={{textAlign:'center'}}>Loading...</p> : (
        <div className="articles-grid">
          {articles.map((news, index) => (
            <NewsItem 
              key={index} 
              title={news.title} 
              description={news.description} 
              src={news.urlToImage} 
              url={news.url} 
            />
          ))}
        </div>
      )}
    </div>
  );
}