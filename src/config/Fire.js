import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyA8mqNoAn9kZTYoHQHhRXVRKDgyEMinIqo",
    authDomain: "burgerqueenmx.firebaseapp.com",
    databaseURL: "https://burgerqueenmx.firebaseio.com",
    projectId: "burgerqueenmx",
    storageBucket: "burgerqueenmx.appspot.com",
    messagingSenderId: "15052539216",
    appId: "1:15052539216:web:6e602a9424464ac4"
};
const fire = firebase.initializeApp(config);
export default fire;