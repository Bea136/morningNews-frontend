import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react'
import Article from './Article'
import TopArticle from './TopArticle';

function Home() {
  const [articlesData, setArticlesData] = useState([])
  const [topArticle, setTopArticle] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(data => {
        if(data.articles.length > 0){
        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.slice(1));
        }
      })
      .catch(error => console.error('Error fetching articles:', error));
  
}, [])
console.log('topArticle', topArticle)

const topArticleToDisplay = () => {
  return <TopArticle title={topArticle.title} author={topArticle.author} urlToImage={topArticle.urlToImage} description={topArticle.description} url={topArticle.url} />
}
const articles = articlesData.map((article, i) => {
  return <Article key={i} title={article.title} author={article.author} urlToImage={article.urlToImage} description={article.description} url={article.url} />
})

return (
  <div>
    <main className={styles.main}>
      <div className={styles.topArticle}>
        {topArticleToDisplay()}
      </div>
      <div className={styles.articles}>
        {articles}
      </div>
    </main>
  </div>
);
}

export default Home;
