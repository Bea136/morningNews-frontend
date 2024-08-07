import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import { removeAllBookmarksToStore } from '../reducers/bookmarks';


function Header() {
    const [isModaleVisible, setIsModaleVisible] = useState(false)
    const [signUpUsername, setSignUpUsername] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signInUsername, setSignInUsername] = useState('')
    const [signInPassword, setSignInPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const connectedUser = useSelector((state) => state.user.value)
    //console.log('connectedUser', connectedUser)
    const dispatch = useDispatch()

    //Formate date
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const today = new Date().toLocaleDateString('en-GB', dateOptions)

    const handleOpenModale = () => {
        setIsModaleVisible(!isModaleVisible)
        setErrorMsg('')
    }

    //Add a new user in DB
    const handleSignUp = () => {
        fetch('https://morning-news-backend-jade.vercel.app/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signUpUsername, password: signUpPassword })
        })
            .then(response => response.json())
            .then(data => {
                if (data.result) {
                    console.log('User successfully registered')
                    dispatch(login(signUpUsername))
                    setSignUpUsername('')
                    setSignUpPassword('')
                    setErrorMsg('')
                } else {
                    setErrorMsg(data.error)
                    setSignUpUsername('')
                    setSignUpPassword('')
                }
            })
    }
    // Login
    const handleSignIn = () => {
        fetch('https://morning-news-backend-jade.vercel.app/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: signInUsername,
                password: signInPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.result) {
                    //console.log('User succesfully connected')
                    //console.log(data)
                    dispatch(login(signInUsername))
                    setSignInUsername('')
                    setSignInPassword('')
                    setIsModaleVisible(false)
                    setErrorMsg('')
                } else {
                    setErrorMsg(data.error)
                    setSignInUsername('')
                    setSignInPassword('')
                }
            })
    }
    //Logout
    const handleLogout = () => {
        dispatch(logout())
        dispatch(removeAllBookmarksToStore())
    }
    //console.log(connectedUser)
    //Content when user is login
    let userConnectedContent = ''
    if (connectedUser.isConnected) {
        userConnectedContent =
            <div className={styles.userConnectedContent}>
                <p className={styles.welcomeText}>Welcome {connectedUser.username} !</p>
                <button className={styles.logoutBtn} type='submit' onClick={handleLogout} >Logout</button>
            </div>
    }
    //Content when signup/signin modale is open
    let modaleContent = ''
    let userIcon = <FontAwesomeIcon icon={faUser} className={styles.iconUser} onClick={handleOpenModale} />
    if (isModaleVisible) {
        modaleContent =
            <div className={styles.modaleContainer}>
                <div className={styles.signUpContainer}>
                    <div className={styles.signUpTitle}>Sign up</div>
                    <input className={styles.signUpInput} name='signUpUsername' placeholder='Username' onChange={(e) => { setSignUpUsername(e.target.value) }} value={signUpUsername}></input>
                    <input className={styles.signUpInput} name='signUpPassword' placeholder='Password' type='password' onChange={(e) => { setSignUpPassword(e.target.value) }} value={signUpPassword}></input>
                    <button className={styles.signUpBtn} type='submit' onClick={handleSignUp} >Register</button>
                </div>
                <div className={styles.signInContainer}>
                    <div className={styles.signInTitle}>Sign in</div>
                    <input className={styles.signInInput} name='signInUsername' placeholder='Username' onChange={(e) => { setSignInUsername(e.target.value) }} value={signInUsername}></input>
                    <input className={styles.signInInput} name='signInPassword' placeholder='Password' type='password' onChange={(e) => { setSignInPassword(e.target.value) }} value={signInPassword}></input>
                    <button className={styles.signInBtn} type='submit' onClick={handleSignIn}  >Connect</button>
                </div>
            </div>
        userIcon = <FontAwesomeIcon icon={faXmark} className={styles.iconUser} onClick={handleOpenModale} />
    }
   


    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <h2 className={styles.date}>{today}</h2>
                    <h1 className={styles.title}>MORNING NEWS</h1>
                    <div className={styles.userContainer} >
                        {userIcon}
                        {userConnectedContent}
                    </div>
                </div>
                <div className={styles.navContainer}>
                    <Link href='/'><span className={styles.navItem}>ARTICLES</span></Link>
                    <Link href='/bookmarks'><span className={styles.navItem}>BOOKMARKS</span></Link>
                </div>
                {modaleContent}
                <div>{errorMsg}</div>
            </header>
        </div >
    );
}

export default Header;