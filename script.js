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

// Trigger sign up dunction with Enter button 
document.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    signUp();
  }
});


// sign Up function 
const signUp = () => {
  const userName = signupUsername.value.trim()
  const email = signupEmail.value.trim()
  const password = signupPassword.value.trim()

  if (userName === "" || email === "" || password === "") {

    toast("Please fill in all fields correctly", "red", "white");

  } else {

    const userObj = { userName, email, password }
    console.log(userObj);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast("Account created successfully", "green", "white")
        setTimeout(() => {
          window.location.href = "signIn.html";
        }, 2000);

      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);

        if (errorCode === "auth/password-does-not-meet-requirements") {
          toast("Password must be at least 8 characters long and include uppercase and lowercase letters, a number, and a special character.", "Red", "white");
        }
        if (errorCode === "auth/email-already-in-use") {
          toast("Email is already in use.", "orange", "white");
        }
        if (errorCode === "auth/invalid-email") {
          toast("Invalid email address.", "red", "white");
        }
        if (errorCode === "auth/operation-not-allowed") {
          toast("Sign up is currently disabled.", "gray", "white");
        }
        if (errorCode === "auth/network-request-failed") {
          toast("Network error. Please try again.", "purple", "white");
        }
        if (errorCode === "auth/user-disabled") {
          toast("This user account has been disabled.", "gray", "white");
        }
        if (
          errorCode !== "auth/password-does-not-meet-requirements" &&
          errorCode !== "auth/email-already-in-use" &&
          errorCode !== "auth/invalid-email" &&
          errorCode !== "auth/operation-not-allowed" &&
          errorCode !== "auth/network-request-failed" &&
          errorCode !== "auth/user-disabled"
        ) {
          toast("An error occurred: " + error.message, "red", "white");
        }

      });
  }
}
window.signUp = signUp


// Toastify Function 
const toast = (text, background, color) => {
  Toastify({
    text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background,
      color,
    },
    onClick: function () { }
  }).showToast();
}

