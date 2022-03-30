const form1 = document.querySelector('#account_form');
const form2 = document.querySelector('#funfacts_form');
var AccInfoRef = db.collection("Users").doc("sejV3H0i3YQxwjL31GgqJhXFEOu2");
var funFactsRef = AccInfoRef.collection("funFacts").doc('1234');

var test = getAccInfo();
		
form1.addEventListener('submit', (e) => {
	e.preventDefault();
	AccInfoRef.set({
		location: form1.location.value,
		age: form1.age.value,
		nickname: form1.nickname.value,
		type: form1.type.value
	}, {merge : true});
	form1.reset();
});


form2.addEventListener('submit', (e) => {
	e.preventDefault();
	funFactsRef.set({
		activities: form2.fav_activities.value,
		isSocial: form2.social.value,
		findFriends: form2.friends.value
		}, {merge : true})
	form2.reset();
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