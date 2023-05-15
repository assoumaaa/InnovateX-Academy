import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';






export const signUp = async (fullName, email, password) => {

    try {
        const response = await axios.post('http://localhost:3001/signup', {
            fullName,
            email,
            password,
        });

        if (response.status !== 200) {
            console.log("user did NOT register!")
        }
    } catch (error) {
        return (error);
        console.error(error);
    }

};


export const logIn = async (email, password) => {


    try {           
        const response = await axios.post('http://localhost:3001/login', {
            email: email,
            password: password,
        });

        if (response.status !== 200) {
            console.log("login FAILED!")
        }

    } catch (error) {
        console.error(error);
    }

};



