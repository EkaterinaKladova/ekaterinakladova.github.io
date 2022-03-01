//Create Firebase app to store Firebase configuration.
import { initializeApp } from 'firebase/app';
//Moniter Authentication State, utilize firebase service. App must be initialized before calling a service function.
import { getAuth, onAuthStateChanged } from 'firebase/auth'

//Initialize firebase app.
const OurUniverse = initializeApp({
    apiKey: "AIzaSyCfTkra5djZesE-OTSqIzB6lgx3X09oZZg",
    authDomain: "ouruniverse-29e79.firebaseapp.com",
    databaseURL: "https://ouruniverse-29e79-default-rtdb.firebaseio.com",
    projectId: "ouruniverse-29e79",
    storageBucket: "ouruniverse-29e79.appspot.com",
    messagingSenderId: "1073119494568",
    appId: "1:1073119494568:web:5fbaf4f853b73181101d9d",
    measurementId: "G-HE3C6RGH4E"
  });

//
const auth = getAuth(OurUniverse);

//Check authorization state.
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('Logged in');
    } 
    else{
        console.log('No user');
    }
});

