/* initializing firebase */
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

/* upon pressing login button */
function login(){
    const username = document.getElementById("login-user").value.toLowerCase().trim();
    
    const password = document.getElementById("login-password").value;
    
    
    /* checking that both password and username are inputted */
    if(username==""){
        alert("No username entered");
    }else if(password==""){
        alert("No password entered");
    }else{
        sendLoginDetails(username, password);
    }
}
