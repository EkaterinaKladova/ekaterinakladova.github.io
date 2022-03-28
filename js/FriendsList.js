//here, "main friends" refers to the friends in the main list,on the aside list

//spawnFriends
var main_friend_counter = 0;
var number_of_main_friends = 17; //random # for testing
var main_friends_per_page = 10;
function spawnMainFriends() { 
	for (i= 0; i < main_friends_per_page && (number_of_main_friends - main_friend_counter) > 0; i++) {
		//clones friend class
		var clone = document.querySelectorAll(".friend")[0].cloneNode(true);
		//original class is hidden, so I remove that attribute when cloning
		clone.removeAttribute("hidden");
		clone.setAttribute("id", `main_friend${main_friend_counter}`);
		//appends the new instance of the class to feed
		document.querySelectorAll(".friends_list")[0].appendChild(clone);
		main_friend_counter ++;
	}
	for (i= main_friends_per_page; i < number_of_main_friends; i++) {
		//clones friend class
		var clone = document.querySelectorAll(".friend")[0].cloneNode(true);
		//original class is hidden, so I remove that attribute when cloning
		//clone.removeAttribute("hidden");
		clone.setAttribute("id", `main_friend${main_friend_counter}`);
		//appends the new instance of the class to feed
		document.querySelectorAll(".friends_list")[0].appendChild(clone);
		main_friend_counter ++;
	}
	main_friend_counter = Math.min(main_friends_per_page,number_of_main_friends);
}

function loadMoreMainFriends() {
	if ((number_of_main_friends - main_friend_counter) < 1) {
		alert("No more friends to load");
	} else if (main_friend_counter > 0) {
		for (i = 0; i < main_friends_per_page; i++) {
			document.getElementById(`main_friend${i + main_friend_counter - main_friends_per_page}`).setAttribute("hidden", true);
		}
		for (i= 0; i < main_friends_per_page && i <(number_of_main_friends - main_friend_counter); i++) {
			document.getElementById(`main_friend${i + main_friend_counter}`).removeAttribute("hidden");
		}
		main_friend_counter += i;
	} else { //if main_friend_counter = 0 (i.e. loading the first main_friends_per_page friends again)
		for (i = 0; i < main_friends_per_page; i++) {
			document.getElementById(`main_friend${i}`).setAttribute("hidden", true);
		}
		for (i= 0; i < main_friends_per_page && i <(number_of_main_friends - main_friend_counter); i++) {
			document.getElementById(`main_friend${i + main_friend_counter}`).removeAttribute("hidden");
		}
		main_friend_counter += i;
	}
}

function loadLessMainFriends() {
	var onMainPage = main_friend_counter%main_friends_per_page;
	if (main_friend_counter < (main_friends_per_page + 1)) {
		alert("No more previous friends");
	} else if (onMainPage == 0) {
		for (i = 0; i < main_friends_per_page; i++) {
			document.getElementById(`main_friend${i + main_friend_counter - main_friends_per_page}`).setAttribute("hidden", true);
			document.getElementById(`main_friend${i + main_friend_counter - (main_friends_per_page*2)}`).removeAttribute("hidden");
		}
	} else {
		for (i = 0; i < main_friends_per_page && i < onMainPage; i++) {
			//alert(`Current i is ${i}, current counter is ${main_friend_counter}, and onMainPage is ${onMainPage}`);
			document.getElementById(`main_friend${main_friend_counter - i -1}`).setAttribute("hidden", true);
		}
	}
		main_friend_counter -= main_friends_per_page + onMainPage; 
		loadMoreMainFriends();
}