import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark,  faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkToStore, removeBookmarkToStore } from "../reducers/bookmarks";
import React from 'react';

function Article(props) {
    const connectedUser = useSelector((state) => state.user.value)
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const dispatch = useDispatch();

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
            <div className={styles.articleContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.titleContainer}>
                        <a href={props.url} target="_blank" className={styles.title}>{props.title}</a>
                        <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} onClick={() => handleClickBookmark(props)} style={bookmarkStyle} />
                        </div>
                        {contentNotification}
                    <div className={styles.author}>- {props.author}</div>
                </div>
                <a href={props.url} target="_blank"><img src={props.urlToImage} alt={props.title} className={styles.articleImg} /></a>
                <a href={props.url} target="_blank" className={styles.description}>{props.description}</a>
            </div>
        </div >
    );
}

export default Article;
