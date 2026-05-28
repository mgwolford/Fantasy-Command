import { useEffect, useState } from "react";
import { fetchNFLNews } from "../../services/NFLNewsAPI";

import "./NFLNews.css";

function NFLNews() {
    const [loading, setLoading] = useState(true);

    async function loadNews() {
        const news = await fetchNFLNews();
      
        setArticles(news);
      
        setLoading(false);
      }

  useEffect(() => {
    async function loadNews() {
      const news = await fetchNFLNews();

      setArticles(news);
    }

    loadNews();
  }, []);

  if (loading) {
    return <p>Loading NFL News...</p>;
  }
  return (
    <section className="news-section">
      <h2>Latest NFL News</h2>

      <div className="news-grid">
        {articles.map((article, index) => (
          <a
            key={index}
            className="news-card"
            href={article.link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={article.image}
              alt={article.title}
            />

            <div className="news-content">
              <h3>{article.title}</h3>

              <p>{article.source}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default NFLNews;