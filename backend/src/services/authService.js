const UsersCollection = require("../configs/db.config")
const User = require("../models/user")
const express = require("express")
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



class AuthService {

    const auth = getAuth();

    
    static async login(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userID = userCredential.user.uid;
                window.localStorage.setItem("userID", userID);
                navigate('/modules');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    static async signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("I JUST REGISTERED A USER!!!!!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage)
            });
    }
}

module.exports = AuthService