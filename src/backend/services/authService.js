import { auth } from '../server';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";




class authService {

  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userID = userCredential.user.uid;
      window.localStorage.setItem("userID", userID);
      console.log(userID);
      return 'OK';
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      throw error;
    }
  }


  signUp(email, password) {
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

export default new authService();
