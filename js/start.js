// Initialize the FirebaseUI Widget using Firebase.
import {getAuth, getRedirectResult, GoogleAuthProvider} from "firebase/auth";
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
	firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    }
  ],
  // Other config options..
  // Other config options...
});
// This can also be done via:
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  ui.start('#firebaseui-auth-container', uiConfig);
}
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'start.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

//Trying to sign people in with Google
const provider = new GoogleAuthProvider();
const auth = getAuth();
signInWithRedirect(auth, provider);
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


function resetPass() {
	let username = prompt("Please enter your username");
	let sq = "What is your favorite color?"; /*placeholder*/
	let sq_answer = "Blue" /*placeholder*/
	if (username != null && username != "") {
		let answer = prompt(sq);
		if (answer == sq_answer && answer != null && answer != "") {
			let new_pass = prompt("What is your new password?");
			if (new_pass != null && new_pass != "") {
				alert ("Thank you " + username + ", your password has been reset");
			}
			else 
				alert("Blank password; reset aborted");
		}
		else 
			alert("Incorrect Answer");
	}
	else 
		alert("Please try again with a valid username");
}

function createform() { //In beta, not really working yet
	// Create element:
	const para = document.createElement("form");
	para.innerHTML = "Please enter your username";
	// Append to another element:
	document.getElementById("myDIV").appendChild(para);
	document.getElementById("myDIV").appendChild(document.createElement("input"));
	//document.getElementById("myDIV").appendChild(document.getElementById("register_box"));
}

function confirmation() {
	if (confirm("Are you sure you want to log out?") == true) {
		window.location.replace('start.html');
	}
} 