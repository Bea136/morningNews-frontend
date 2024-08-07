import styles from '../styles/Bookmark.module.css';
import { useSelector } from 'react-redux';
import Article from './Article';


function Bookmark(props) {
  const bookmarks = useSelector((state) => state.bookmarks.value)
  // console.log(bookmarks)

  const connectedUser = useSelector((state) => state.user.value)
  // console.log('connectedUser', connectedUser)

  let bookmarkedArticles = ''
  if (!connectedUser.isConnected) {
    bookmarkedArticles = <p className={styles.emptyContent}>Sorry! You must be connected to view your bookmarked articles </p>
  } else {
    bookmarkedArticles = <p className={styles.emptyContent}>No bookmarked article </p>
    if (bookmarks.length > 0) {
      bookmarkedArticles = bookmarks.map((bookmark, i) => {
        return <Article key={i} {...bookmark} isBookmarked />
      })
    }
  }
  return (
    <div>
      <div className={styles.main}>
        <h2 className={styles.title}>BOOKMARKS</h2>
        <div className={styles.bookmarkedArticles}>{bookmarkedArticles}</div>
      </div>
    </div>
  );
}

export default Bookmark;