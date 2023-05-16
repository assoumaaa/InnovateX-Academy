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



