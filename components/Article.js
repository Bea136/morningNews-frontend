import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import bookmarks from "../reducers/bookmarks";
import user from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkToStore, removeBookmarkToStore } from "../reducers/bookmarks";
import { Link } from "react-router-dom";


function Article(props) {
    const connectedUser = useSelector((state) => state.user.value)
    const dispatch = useDispatch();

    const handleClickBookmark = (props) => {
        if (connectedUser.isConnected) {
            if (props.isBookmarked) {
                dispatch(removeBookmarkToStore(props))
            } else {
                dispatch(addBookmarkToStore(props))
            }
        }
    }

    let bookmarkStyle = {}
    if (props.isBookmarked) {
        bookmarkStyle = { 'color': '#E9BE59' }
    }

    return (
        <div>
            <div className={styles.articleContainer}>
            <div className={styles.articleContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.titleContainer}>
                        <a href ={props.url} target="_blank" className={styles.title}>{props.title}</a>
                        <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} onClick={() => handleClickBookmark(props)} style={bookmarkStyle} />
                    </div>
                    <div className={styles.author}>- {props.author}</div>
                </div>
                <a href ={props.url} target="_blank"><img src={props.urlToImage} alt={props.title} className={styles.articleImg} /></a>
                <a href ={props.url} target="_blank" className={styles.description}>{props.description}</a>
                </div>
            </div>
        </div >

    );
}

export default Article;
