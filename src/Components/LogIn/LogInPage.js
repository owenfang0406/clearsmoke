import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from '../firebase-config'
import { signInWithEmailAndPassword } from "firebase/auth";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import styles from "./LoginPage.module.css";

function SignIn() {
    const [showSignUp, setShowSignUp] = useState(false);
    const [email, setEmail] = useState("test1005@gmail.com");
    const [password, setPassword] = useState("123456789");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (email === userCredential.user.email){
                    navigate("/")
                }
            }).catch(error => {
                setError(error.message)
            })
        }

  return (
    <>
    <NavBar></NavBar>
        <div className={styles.pageContainer}>
            <div className={styles.formText}>
                <h1 className={styles.h1}>Sign in to your account</h1>
                <div className={styles.SignupSlogn}>
                    Don't have an account ?<span className={styles.signupLink}><Link to="/signup">Sign up.</Link></span>
                </div>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.emailContainer}>
                    <label className={styles.email}>Email Address</label>
                    <input className={styles.emailInput} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email"></input>
                </div>
                <div>
                    <label className={styles.password}>Password</label>
                    <input className={styles.emailInput} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" value={password}></input>
                </div>
                <div className={styles.btnCon}>
                    <button className={styles.signupBtn} type='submit'>Sign In</button>
                </div>
                <div className={styles.signinOptions}>
                    {/* <div className={styles.google}>
                        <img className={styles.icon} src={require('./google.png')}></img><span>Sign in with Google</span>
                    </div>
                    <div className={styles.google}>
                    <img className={styles.icon} src={require('./facebook.png')}></img><span>Sign in with FaceBook</span>
                    </div>
                    <div className={styles.google}>
                    <img className={styles.icon} src={require('./twitter.png')}></img><span>Sign in with Twitter</span>
                    </div> */}
                </div>
                <div id='errormsg' className={styles.err}>
                    {error && <div>{error}</div>} 
                </div>
            </form>
        </div>
    <Footer></Footer>
    </>
  )
}

export default SignIn