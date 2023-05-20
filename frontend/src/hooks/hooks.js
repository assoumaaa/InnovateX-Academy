import axios from 'axios';




export const signUp = async (fullName, email, password) => {

    try {
        const response = await axios.post('http://localhost:3001/signup', {
            fullName,
            email,
            password,
        });

        if (response.status !== 200) {
            throw new Error('SignUp failed!');
        }

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};


export const logIn = async (email, password) => {

    try {
        const response = await axios.post('http://localhost:3001/login', {
            email: email,
            password: password,
        });

        if (response.status !== 200) {
            throw new Error('Login failed!');
        }

        return response.data.userID;


    } catch (error) {
        console.error(error);
        return null;
    }
};


export const getUserData = async () => {
    try {
        const userID = window.localStorage.getItem("userID");

        const response = await axios.get(`http://localhost:3001/user/${userID}`);

        if (response.status !== 200) {
            throw new Error('Failed to fetch user data!');
        }

        return response.data.userData;
        
    } catch (error) {
        console.error(error);
        return null;
    }
};

