import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react'
import Article from './Article'

function Home() {
  const [articlesData, setArticlesData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/articles')
    .then(response => response.json())
    .then(data => {
      setArticlesData(data.articles);
  });
  },[])

  const articles = articlesData.map((article, i) => { 
   return <Article key={i} title={article.title} author={article.author} urlToImage={article.urlToImage} description={article.description} url={article.url} />
  })

  return (
    <div>
      <main className={styles.main}>
        {articles}
      </main>
    </div>
  );
}

export default Home;
