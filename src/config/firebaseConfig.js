import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBWg-jlYDnAr0CvySsVqhLLaB-ZXsK03Ko",
    authDomain: "simple-planner-d40d0.firebaseapp.com",
    databaseURL: "https://simple-planner-d40d0.firebaseio.com",
    projectId: "simple-planner-d40d0",
    storageBucket: "simple-planner-d40d0.appspot.com",
    messagingSenderId: "395762562283"
};


firebase.initializeApp(config);
firebase.firestore()

export default firebase;