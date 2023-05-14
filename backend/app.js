const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors package
const firebase = require('firebase');
const firebaseConfig = require('./firebase-config');

app.use(express.json()); // Add this line to parse JSON request bodies
app.use(cors());

firebase.initializeApp(firebaseConfig);

app.post('/signup', (req, res) => {
  const { fullName, email, password } = req.body;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User sign-up successful

      // Get the user ID
      const userId = userCredential.user.uid;

      // Create the user object
      const user = {
        fullName: fullName,
        email: email,
        module: [true, false, false, false, false, false, false, false, false, false, false, false, false, false]
      };
      // Add user to the "users" collection
      firebase
        .firestore()
        .collection('users')
        .doc(userId)
        .set(user)
        .then(() => {
          res.json({ success: true, message: 'Sign-up successful' });
        })
        .catch((error) => {
          res.status(500).json({ success: false, message: 'Error signing up' });
        });
    })
    .catch((error) => {
      // Handle sign-up errors
      res.status(500).json({ success: false, message: 'Error signing up' });
    });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User login successful
      res.json({ success: true, message: 'Login successful' });
    })
    .catch((error) => {
      // Handle login errors
      res.status(500).json({ success: false, message: 'Error logging in' });
    });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
