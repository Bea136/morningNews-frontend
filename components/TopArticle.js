import styles from '../styles/TopArticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function TopArticle(props) {



    return (
        <div>
            <div className={styles.topArticleContainer}>
                <img src={props.urlToImage} alt={props.title} className={styles.articleImg} />
                <div className={styles.topContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>{props.title}</div>
                        <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} />
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