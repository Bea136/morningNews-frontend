import styles from '../styles/Article.module.css';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Article(props) {



    return (
        <div>
            <div className={styles.articleContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>{props.title}</div>
                        <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} />
                    </div>
                    <div className={styles.author}>- {props.author}</div>
                </div>
                <span className={styles.line}></span>
                <Image src={props.urlToImage} alt={props.title} width={600} height={314} className={styles.articleImg} />
                <div className={styles.description}>{props.description}</div>
                {/* <div className={styles.author}>{props.url}</div> */}

            </div>
        </div>
    );
}

export default Article;
