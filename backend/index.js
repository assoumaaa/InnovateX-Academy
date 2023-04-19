
const userRouter = require('./src/routes/userRouter')
const express = require('express');
const cors = require("cors");
const firebase = require('firebase');

const User = require("./src/configs/db.config");


const app = express();
const port = 3000; 

//middlewares
app.use(express.json());
app.use(cors());


// const userService = new UserService()
// const authService = new AuthService(userService)
// app.use(JWTAuth(authService, userService))

const v1 = express.Router()
app.use("/api", v1)

// v1.use("/cars", carRouter())
// v1.use("/categories", categoryRouter())
// v1.use("/distributors", distributorRouter())
// v1.use("/cart", cartRouter())
// v1.use("/wishlist",wishlistRouter())
v1.use("/users", userRouter())
// v1.use("/auth", authRouter())
// v1.use("/orders", orderRouter())



// app.post('/login', async (req, res) => {
//   try {
//       const { email, password } = req.body;
//       const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
//       const user = userCredential.user;
//       res.send(`Logged in successfully! User ID: ${user.uid}`);
//     } catch (error) {
//       res.status(500).send(`Login failed: ${error.message}`);
//   }
// });

// app.post('/signup', async (req, res) => {
//   try {
//       const { email, password } = req.body;
//       const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
//       const user = userCredential.user;
//       module_access = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
//       const data = {email, module_access}
//       await User.add({ data});
//       res.send(`Signed up successfully! User ID: ${user.uid}`);
//     } catch (error) {
//       res.status(500).send(`Signup failed: ${error.message}`);
//   }
// });

// // Logout route
// app.post('/logout', async (req, res) => {
//   try {
//     await firebase.auth().signOut();
//     req.session.destroy();
//     res.send('Logged out successfully!');
//   } catch (error) {
//     res.status(500).send(`Logout failed: ${error.message}`);
//   }
// });

// if signed in, when directed to modules get modules
app.get('')


app.get('/', (req, res) => {
  res.send('Welcome to the main page!');
});

// Start the app
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});