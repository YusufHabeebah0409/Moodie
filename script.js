// Imports
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";


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
  