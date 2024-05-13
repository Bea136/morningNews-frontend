import styles from '../styles/Article.module.css';
// import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark,  faXmark } from '@fortawesome/free-solid-svg-icons';
import bookmarks from "../reducers/bookmarks";
import user from '../reducers/user';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkToStore, removeBookmarkToStore } from "../reducers/bookmarks";
import { Link } from "react-router-dom";
import React from 'react';
import { Button, notification, Modal } from 'antd';


function Article(props) {
    const connectedUser = useSelector((state) => state.user.value)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    // const showModal = () => {
    //     setIsModalOpen(true);
    // };
    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };
    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };
    const handleClickBookmark = (props) => {
        if (connectedUser.isConnected) {
            if (props.isBookmarked) {
                dispatch(removeBookmarkToStore(props))
            } else {
                dispatch(addBookmarkToStore(props))
            }
        } else {
            setIsModalOpen(true)
        }
    }
    const handleCloseNotification =() => {
        setIsModalOpen(!isModalOpen)
    }
    let contentNotification = ''
    if (isModalOpen) {
        // contentModal = <Modal className={styles.modale} title="Notification" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        //     <p>You must have an account to bookmark articles</p>
        // </Modal>
        contentNotification = 
        <div className={styles.modaleNotification} >
        <div className={styles.modale}>You must have an account to bookmark articles</div>
        <FontAwesomeIcon icon={faXmark} className={styles.crossIcon} onClick={handleCloseNotification} />
        </div>
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
