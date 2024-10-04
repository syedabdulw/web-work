

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { 
    getAuth, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB8jL6aVIyQSB9v1qhUQ5Z4Amw4nw0IkxQ",
    authDomain: "project-1-da74a.firebaseapp.com",
    projectId: "project-1-da74a",
    storageBucket: "project-1-da74a.appspot.com",
    messagingSenderId: "812465196917",
    appId: "1:812465196917:web:dac5b9221eaf54d5274d3c",
    measurementId: "G-ZM1MM0S6HP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  //console.log("app=>",app);
  const auth = getAuth(app);
  //console.log("auth=>",auth);

  const signup_email = document.getElementById('signup_email');
  const signup_password = document.getElementById('signup_password');
  const signup_btn = document.getElementById('signup_btn');


  const auth_container = document.getElementById('auth_container');
  const user_container = document.getElementById('user_container');


  const signin_email = document.getElementById('signin_email');
  const signin_password = document.getElementById('signin_password');
  const signin_btn = document.getElementById('signin_btn');

  const user_email = document.getElementById('user_email');
  const logout_btn = document.getElementById('logout_btn');
  


  signup_btn.addEventListener('click', createUserAccount);
  signin_btn.addEventListener('click', signIn);
  logout_btn.addEventListener('click', logout);

  





  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is logged in");

      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      auth_container.style.display ="none";
      user_container.style.display ="block";
      user_email.innerText = user_email;
      // ...
    } else {
      console.log("user is not logged in");
      auth_container.style.display ="block";
      user_container.style.display ="none";
      //user_email.innerText = user_email;

      // User is signed out
      // ...
    }
  });


  function createUserAccount() {
    //   console.log("email=>", signup_email.value);
    //   console.log("password=>", signup_password.value);
    createUserWithEmailAndPassword(
      auth, 
      signup_email.value, 
      signup_password.value
    )
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("User=>",user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });

  }

    function signIn() {
         //console.log("email=>", signin_email.value);
         //console.log("password=>", signin_password.value);

  signInWithEmailAndPassword(
    auth, 
    signin_email.value,
    signin_password.value,
  )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

    };

  function logout (){
      signOut(auth)
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      
    }
  
  
