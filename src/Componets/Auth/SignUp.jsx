import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./SignUp.module.css";


const SignUp = ({setIsClick}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // ==========================SignUp=================
  const signUp = (e) => {
    e.preventDefault();
  
    // Check if the password meets the minimum length requirement
    if (password.length < 6) {
      alert("Password must be 6 letters long")
      return; // Exit early if the password is too short
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((err) => {
        console.log(err);
      });

      setEmail('');
      setPassword('')
  };
  

  
  return (
    <div className={styles.signUpContainer}>
     <form onSubmit={signUp} className={styles.signUpForm}>
        <h1>Create an Account</h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.signUpButton}>
          Sign Up
        </button>
        <button onClick={()=>setIsClick(true)} className={styles.signUpButton}>Already a user? Log in!!</button>
      </form>
    </div>
  );
};

export default SignUp;
