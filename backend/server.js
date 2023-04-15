const express = require('express');
const firebase = require('firebase/app');
require('firebase/auth');

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

app.use(express.json());

app.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      res.send(`Logged in successfully! User ID: ${user.uid}`);
    } catch (error) {
      res.status(500).send(`Login failed: ${error.message}`);
  }
});

app.post('/signup', async (req, res) => {
  try {
      const { email, password } = req.body;
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      res.send(`Signed up successfully! User ID: ${user.uid}`);
    } catch (error) {
      res.status(500).send(`Signup failed: ${error.message}`);
  }
});

// Logout route
app.post('/logout', async (req, res) => {
  try {
    await firebase.auth().signOut();
    res.send('Logged out successfully!');
  } catch (error) {
    res.status(500).send(`Logout failed: ${error.message}`);
  }
});


app.post('/forgotpassword', async (req, res) => {
  try {
    const { email } = req.body;
    await firebase.auth().sendPasswordResetEmail(email);
    res.send(`Password reset email sent to ${email}`);
  } catch (error) {
    res.status(500).send(`Failed to send password reset email: ${error.message}`);
  }
});

app.get('/', (req, res) => {
  res.send('Main page route');
});

// Start the app
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});