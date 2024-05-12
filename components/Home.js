import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react'
import Article from './Article'
import TopArticle from './TopArticle';
import Header from './Header'
import bookmarks from '../reducers/bookmarks';
import { useSelector } from 'react-redux';

function Home() {
  const [articlesData, setArticlesData] = useState([])
  const [topArticle, setTopArticle] = useState({})

  const bookmarks = useSelector((state) => state.bookmarks.value)
  console.log(bookmarks)

  const connectedUser = useSelector((state) => state.user.value)
  console.log('connectedUser', connectedUser )

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(data => {
        if (data.articles.length > 0) {
          setTopArticle(data.articles[0]);
          setArticlesData(data.articles.slice(1));
        }
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, [])

  const topArticleToDisplay = () => {
    const isBookmarked = bookmarks.find(bookmarkedArticle => bookmarkedArticle.title === topArticle.title)
    return <TopArticle title={topArticle.title} author={topArticle.author} urlToImage={topArticle.urlToImage} description={topArticle.description} url={topArticle.url} isBookmarked={isBookmarked} />
  }
  const articles = articlesData.map((article, i) => {
    const isBookmarked = bookmarks.find(bookmark => bookmark.title === article.title)
    return <Article key={i} title={article.title} author={article.author} urlToImage={article.urlToImage} description={article.description} url={article.url} isBookmarked={isBookmarked} />
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
