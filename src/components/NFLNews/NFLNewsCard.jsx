function NFLNewsCard({ article }) {
    return (
      <a
        className="news-card"
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={article.urlToImage}
          alt={article.title}
        />
  
        <div className="news-content">
          <h3>{article.title}</h3>
  
          <p>{article.source.name}</p>
        </div>
      </a>
    );
  }
  
  export default NFLNewsCard;