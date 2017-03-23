import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD8lxuXmhBPhlGJymG4JwX9wKDPPGdkdKw",
    authDomain: "ga-todo-list-24647.firebaseapp.com",
    databaseURL: "https://ga-todo-list-24647.firebaseio.com",
    storageBucket: "ga-todo-list-24647.appspot.com",
    messagingSenderId: "206038798567"
  };

export default firebase.initializeApp(config);
