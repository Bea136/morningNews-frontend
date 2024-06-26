import styles from '../styles/Bookmark.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import bookmarks from "../reducers/bookmarks";
import { useSelector } from 'react-redux';
import { addBookmarkToStore, removeBookmarkToStore } from "../reducers/bookmarks";
import Article from './Article';
import TopArticle from './TopArticle';

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