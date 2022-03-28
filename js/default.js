//code that might be used from most pages
function confirmation() {
	if (confirm("Are you sure you want to log out?") == true) {
		window.location.replace('index.html');
	}
} 

//spawnFriends
var friend_counter = 0;
var number_of_friends = 13; //random # for testing
var friends_per_page = 10;
function spawnFriends() { 
	for (i= 0; i < friends_per_page && (number_of_friends - friend_counter) > 0; i++) {
		//clones friend class
		var clone = document.querySelectorAll(".friend_list_item")[0].cloneNode(true);
		//original class is hidden, so I remove that attribute when cloning
		clone.removeAttribute("hidden");
		clone.setAttribute("id", `new_friend${friend_counter}`);
		//appends the new instance of the class to feed
		document.querySelectorAll(".friend_list_aside")[0].appendChild(clone);
		friend_counter ++;
	}
	for (i= friends_per_page; i < number_of_friends; i++) {
		//clones friend class
		var clone = document.querySelectorAll(".friend_list_item")[0].cloneNode(true);
		//original class is hidden, so I remove that attribute when cloning
		//clone.removeAttribute("hidden");
		clone.setAttribute("id", `new_friend${friend_counter}`);
		//appends the new instance of the class to feed
		document.querySelectorAll(".friend_list_aside")[0].appendChild(clone);
		friend_counter ++;
	}
	friend_counter = Math.min(friends_per_page,number_of_friends);
}

function loadMoreFriends() {
	if ((number_of_friends - friend_counter) < 1) {
		alert("No more friends to load");
	} else if (friend_counter > 0) {
		for (i = 0; i < friends_per_page; i++) {
			document.getElementById(`new_friend${i + friend_counter - friends_per_page}`).setAttribute("hidden", true);
		}
		for (i= 0; i < friends_per_page && i <(number_of_friends - friend_counter); i++) {
			document.getElementById(`new_friend${i + friend_counter}`).removeAttribute("hidden");
		}
		friend_counter += i;
	} else { //if friend_counter = 0 (i.e. loading the first friends_per_page friends again)
		for (i = 0; i < friends_per_page; i++) {
			document.getElementById(`new_friend${i}`).setAttribute("hidden", true);
		}
		for (i= 0; i < friends_per_page && i <(number_of_friends - friend_counter); i++) {
			document.getElementById(`new_friend${i + friend_counter}`).removeAttribute("hidden");
		}
		friend_counter += i;
	}
}

function loadLessFriends() {
	onPage = friend_counter%friends_per_page;
	if (friend_counter < (number_of_friends + 1)) {
		alert("No more previous friends");
	} else if (onPage == 0) {
		for (i = 0; i < friends_per_page; i++) {
			document.getElementById(`new_friend${i + friend_counter - friends_per_page}`).setAttribute("hidden", true);
			document.getElementById(`new_friend${i + friend_counter - (friends_per_page*2)}`).removeAttribute("hidden");
		}
	} else {
		for (i = 0; i < friends_per_page && i < onPage; i++) {
			//alert(`Current i is ${i}, current counter is ${friend_counter}, and onPage is ${onPage}`);
			document.getElementById(`new_friend${friend_counter - i -1}`).setAttribute("hidden", true);
		}
	}
		friend_counter -= friends_per_page + onPage; 
		loadMoreFriends();
}