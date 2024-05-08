import styles from '../styles/Bookmark.module.css';
import bookmarks from "../reducers/bookmarks";
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkToStore } from "../reducers/bookmarks";

function Bookmark() {
  const bookmarks = useSelector((state) => state.bookmarks.value)

  console.log(bookmarks)

  return (
    <div>
      <main className={styles.main}>
      {bookmarks}
      </main>
    </div>
  );
}

export default Bookmark;