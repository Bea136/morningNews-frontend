import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react'
import Article from '/components/Article'

function Home() {
  const [articlesData, setArticlesData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/articles')
    .then(response => response.json())
    .then(data => {
      setArticlesData(data.articles);
  });
  },[])

  const article = articlesData.map((article, i) => {
    <Article key={i} />
  })

  return (
    <div>
      <main className={styles.main}>
Home
        
      </main>
    </div>
  );
}

export default Home;
