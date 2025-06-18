// Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";


// Firebase setup
const firebaseConfig = {
  apiKey: "AIzaSyDZT_tQMjE86hCoSRIaMxlYiV1lBe-zHC8",
  authDomain: "moodie-802c2.firebaseapp.com",
  projectId: "moodie-802c2",
  storageBucket: "moodie-802c2.firebasestorage.app",
  // messagingSenderId: "316295030861",
  // appId: "1:316295030861:web:945089aa0bd9cdcbbad404"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// sign Up function 
const signUp = () => {
  // const auth = getAuth();
  const email = signupEmail.value.trim()
  const password = signupPassword.value.trim()
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      
    });
}
window.signUp = signUp