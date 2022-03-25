//code that might be used from most pages
function confirmation() {
	if (confirm("Are you sure you want to log out?") == true) {
		window.location.replace('index.html');
	}
} 

//spawnFriends
var friend_counter = 0;
var number_of_friends = 13; //random # for testing
function spawnFriends() { 
	for (var i = 0; i < 10 && (number_of_friends - friend_counter) > 0 ; i++) {
		//clones post class
		var clone = document.querySelectorAll(".friend_list_item")[0].cloneNode(true);
		//original class is hidden, so I remove that attribute when cloning
		clone.removeAttribute("hidden");
		clone.setAttribute("id", `new_friend${friend_counter}`);
		//appends the new instance of the class to feed
		document.querySelectorAll(".friend_list_aside")[0].appendChild(clone);
		friend_counter ++;
	}
}

function loadMoreFriends() {
	if ((number_of_friends - friend_counter) < 1) {
		alert("No more friends to load");
	} else {
		for (var i = 0; i < 10; i++) {
			document.getElementById(`new_friend${i + friend_counter - 10}`).setAttribute("hidden", true);
		}
		spawnFriends();
	}
}