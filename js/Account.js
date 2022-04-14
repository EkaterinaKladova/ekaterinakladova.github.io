// account settings functions
const form1 = document.querySelector('#account_form');
const form2 = document.querySelector('#funfacts_form');
var AccInfoRef = db.collection("Users").doc("sejV3H0i3YQxwjL31GgqJhXFEOu2");
var funFactsRef = AccInfoRef.collection("funFacts").doc('1234');

//var test = getAccInfo();
		
// account info
form1.addEventListener('submit', (e) => {
	e.preventDefault();
	AccInfoRef.set({
		location: form1.location.value,
		age: form1.age.value,
		nickname: form1.nickname.value,
		type: form1.type.value
	}, {merge : true});
	form1.reset();
	setTimeout( function() { update(); }, 1000);
});

// fun facts
form2.addEventListener('submit', (e) => {
	e.preventDefault();
	funFactsRef.set({
		activities: form2.fav_activities.value,
		isSocial: form2.social.value,
		findFriends: form2.friends.value
		}, {merge : true})
	form2.reset();
	setTimeout( function() { update(); }, 1000);
});


function getAccInfo(){
	var aData;
	AccInfoRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
		aData = doc.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
	});
	return aData;
}

function getFunFacts(){
	var bData;
	funFactsRef.get().then((doc) => {
		if (doc.exists) {
			console.log("Document data:", doc.data());
			bData = doc.data();
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
		});
	return bData;
}


//Changing Front-End Based on Pulled Data
function update() {
	AccInfoRef.get().then((doc) => {
		if (doc.exists) {
			console.log("Account Data:", doc.data());
			document.getElementById("name").setAttribute("value", doc.data().nickname);
			document.getElementById("location").setAttribute("value", doc.data().location);
			document.getElementById("age").setAttribute("value", doc.data().age);
			document.getElementById("type").setAttribute("value", doc.data().type);
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	});
	funFactsRef.get().then((doc) => {
		if (doc.exists) {
			console.log("Fun Facts Data:", doc.data());
			document.getElementById("fav_activities").value = doc.data().activities;
			//Updates activities
			var socialtmp = doc.data().isSocial;
			//Updates Socialness
			switch (socialtmp) {
				case "Social":
					document.getElementById("social").checked = true;
					break;
				case "Solitary":
					document.getElementById("solitary").checked = true;
					break;
				case "Shy":
					document.getElementById("shy").checked = true;
					break;
			}
			//Updates Friendliness
			var friendtmp = doc.data().findFriends;
			switch (friendtmp) {
				case "Friendly":
					document.getElementById("friend_yes").checked = true;
					break;
				case "Not so friendly":
					document.getElementById("friend_no").checked = true;
					break;
				case "Not interested at the moment":
					document.getElementById("friend_notrn").checked = true;
					break;
			}
			
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
			
		}
	});
}
document.onload = update();
//setInterval( function() { update(); }, 10000);

