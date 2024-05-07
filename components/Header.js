import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


function Header() {

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const today = new Date().toLocaleDateString('en-GB', dateOptions)

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <h2 className={styles.date}>{today}</h2>
                    <h1 className={styles.title}>MORNING NEWS</h1>
                    <FontAwesomeIcon icon={faUser} className={styles.iconUser} />
                </div>
                <div className={styles.navContainer}>
                    <Link href='/' className={styles.navItem}>ARTICLES</Link>
                    <Link href='/bookmarks' className={styles.navItem}>BOOKMARKS</Link>
                </div>
            </header>
        </div >
    );
}

export default Header;