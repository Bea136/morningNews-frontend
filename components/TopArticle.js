import styles from '../styles/TopArticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addBookmarkToStore, removeBookmarkToStore } from "../reducers/bookmarks";

function TopArticle(props) {
    const dispatch = useDispatch();
    const handleClickBookmark = (props) => {
        if (props.isBookmarked) {
            dispatch(removeBookmarkToStore(props))
        } else {
            dispatch(addBookmarkToStore(props))
        }
    }
    let bookmarkStyle = {}
    if (props.isBookmarked) {
        bookmarkStyle = { 'color': '#E9BE59' }
    }

    return (
        <div>
            <div className={styles.topArticleContainer}>
                <img src={props.urlToImage} alt={props.title} className={styles.articleImg} />
                <div className={styles.topContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>{props.title}</div>
                        <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} onClick={() => handleClickBookmark(props)} style={bookmarkStyle} />
                    </div>
                    <div className={styles.author}>- {props.author}</div>
                    <div className={styles.description}>{props.description}</div>
                </div>

                {/* <div className={styles.author}>{props.url}</div> */}

            </div>
        </div>
    );
}

export default TopArticle;