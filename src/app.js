//Referenence to Firebase Auth SDK - Gives us methods to manage users within app.
const auth = firebase.auth();

//Grab HTML elements to interact with.
const userSignedIn = document.getElementById('userSignedIn');
const userSignedOut = document.getElementById('userSignedOut');
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const userDetails = document.getElementById('userDetails');

//For user to LOG IN with google
//
//Declare a provider instance
const googleProvider = new firebase.auth.GoogleuthProvider();
//Register click handler for sign in button, using provider as argument. 
signInBtn.onclick = () => auth.signInWithPopup(googleProvider);
//
//For users to LOG OUT
signOutBtn.onclick = () => auth.signOut();
 

//User Authentication can change multiple times, even after sign in/ signo out process.
//For app to react to UI changes listen for state changes.
auth.onAuthStateChanged(user =>{
    if (user){ //If user is signed in...
        whenSignedIn.hidden =  false;
        whenSignedOut.hidden = true;
        //Something for the user to see: userDetails.IndexHTML = 
    }
    else{//If user is signed out...
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        //Something for the user to see: userDetails.IndexHTML = ' ' (Empty/ no access to user details)
    }
});

//FIRESTROE
 
