const express = require('express');
const firebase = require('firebase/app');
require('firebase/auth');

// Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyAnVwd09ZECF1DVjn0y34Jiqxu9_obn7to",
    authDomain: "academy-x-87af5.firebaseapp.com",
    projectId: "academy-x-87af5",
    storageBucket: "academy-x-87af5.appspot.com",
    messagingSenderId: "753204352749",
    appId: "1:753204352749:web:8f29252ba235a3ea6b1ee4"
  };


firebase.initializeApp(firebaseConfig);

const app = express();
const port = 3000; 

// Middlewares
app.use(express.json());

// Routes


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Sign in with email and password using Firebase Authentication
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        // Retrieve user data from userCredential.user
        const user = userCredential.user;
        // Send appropriate response
        res.send(`Logged in successfully! User ID: ${user.uid}`);
      } catch (error) {
        // Handle error and send appropriate response
        res.status(500).send(`Login failed: ${error.message}`);
    }
});

// Route for sign up
app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Sign up with email and password using Firebase Authentication
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        // Retrieve user data from userCredential.user
        const user = userCredential.user;
        // Send appropriate response
        res.send(`Signed up successfully! User ID: ${user.uid}`);
      } catch (error) {
        // Handle error and send appropriate response
        res.status(500).send(`Signup failed: ${error.message}`);
    }
});

// Route for main page
app.get('/', (req, res) => {
  // Handle main page logic here
  // Render main page HTML, retrieve data from database, etc.
  // Send appropriate response
  res.send('Main page route');
});

// Start the app
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  console.log("firebase is up!")
});