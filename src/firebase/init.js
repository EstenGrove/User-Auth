import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyA19ZzMqKX_UFcXG61BLMfLMus-VfGznC0",
  authDomain: "user-auth-be0ac.firebaseapp.com",
  databaseURL: "https://user-auth-be0ac.firebaseio.com",
  projectId: "user-auth-be0ac",
  storageBucket: "user-auth-be0ac.appspot.com",
  messagingSenderId: "837271612110"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
