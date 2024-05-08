import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from 'react';


function Header() {
    const [isModaleVisible, setIsModaleVisible] = useState(false)

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const today = new Date().toLocaleDateString('en-GB', dateOptions)
    const handleOpenModale = () => {
        setIsModaleVisible(!isModaleVisible)
    }
    if (isModaleVisible) {
        return (
            <div>
                <header className={styles.header}>
                    <div className={styles.logoContainer}>
                        <h2 className={styles.date}>{today}</h2>
                        <h1 className={styles.title}>MORNING NEWS</h1>
                        <FontAwesomeIcon icon={faXmark} className={styles.iconUser} onClick={handleOpenModale} />
                    </div>
                    <div className={styles.navContainer}>
                        <Link href='/' className={styles.navItem}>ARTICLES</Link>
                        <Link href='/bookmarks' className={styles.navItem}>BOOKMARKS</Link>
                    </div>
                    <div className={styles.modaleContainer}>
                        <div className={styles.signUpContainer}>
                            <div className={styles.signUpTitle}>SignUp</div>
                            <input className={styles.signUpUsername} name='signUpUsername' defaultValue='Username'></input>
                            <input className={styles.signUpPassword} name='signUpPassword' defaultValue='Password' type='password'></input>
                            <button className={styles.signUpBtn} type='submit' >Register</button>
                        </div>
                        <div className={styles.signInContainer}>
                            <div className={styles.signInTitle}>SignIn</div>
                            <input className={styles.signInUsername} name='signInUsername' defaultValue='Username'></input>
                            <input className={styles.signInPassword} name='signInPassword' defaultValue='Password' type='password'></input>
                            <button className={styles.signInBtn} type='submit' >Connect</button>
                        </div>
                    </div>
                </header>


            </div>
        )
    }





    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <h2 className={styles.date}>{today}</h2>
                    <h1 className={styles.title}>MORNING NEWS</h1>
                    <FontAwesomeIcon icon={faUser} className={styles.iconUser} onClick={handleOpenModale} />
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