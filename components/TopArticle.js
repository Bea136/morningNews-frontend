import styles from '../styles/TopArticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkToStore, removeBookmarkToStore } from "../reducers/bookmarks";

function TopArticle(props) {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const dispatch = useDispatch();
    const connectedUser = useSelector((state) => state.user.value)

    const handleClickBookmark = (props) => {
        if (connectedUser.isConnected) {
            setIsNotificationOpen(false)
            if (props.isBookmarked) {
                dispatch(removeBookmarkToStore(props))
            } else {
                dispatch(addBookmarkToStore(props))
            }
        } else {
            setIsNotificationOpen(!isNotificationOpen)
        }
    }

    let contentNotification = ''
    if (isNotificationOpen) {
        contentNotification =
            <div className={styles.modaleNotification}>Sorry! You must have an account to bookmark articles</div>
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
                        <a href={props.url} target="_blank" className={styles.title}>{props.title}</a>
                        <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} onClick={() => handleClickBookmark(props)} style={bookmarkStyle} />
                    </div>
                    {contentNotification}
                    <div className={styles.author}>- {props.author}</div>
                    <a href={props.url} target="_blank" className={styles.description}>{props.description}</a>
                </div>
            </div>
        </div>
    );
}

export default TopArticle;