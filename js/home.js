
//spawnPosts
var post_counter = 0;
var numPosts = 8; //random number for testing
var onPage = 0;
var loaded = 0; //becomes 1 after page 
var i = 0;
function spawnPosts() { 
	for (i= 0; i < 5 && (numPosts - post_counter) > 0; i++) {
		//clones post class
		var clone = document.querySelectorAll(".post")[0].cloneNode(true);
		//original class is hidden, so I remove that attribute when cloning
		clone.removeAttribute("hidden");
		clone.setAttribute("id", `new_post${post_counter}`);
		//appends the new instance of the class to feed
		document.querySelectorAll(".feed")[0].appendChild(clone);
		post_counter ++;
	}
	for (i= 5; i < numPosts; i++) {
		//clones post class
		var clone = document.querySelectorAll(".post")[0].cloneNode(true);
		//original class is hidden, so I remove that attribute when cloning
		//clone.removeAttribute("hidden");
		clone.setAttribute("id", `new_post${post_counter}`);
		//appends the new instance of the class to feed
		document.querySelectorAll(".feed")[0].appendChild(clone);
		post_counter ++;
	}
	post_counter = Math.min(5,numPosts);
}

//loadMorePosts
function loadMorePosts() {
	if ((numPosts - post_counter) < 1) {
		alert("No more posts to load");
	} else if (post_counter > 0) {
		for (i = 0; i < 5; i++) {
			document.getElementById(`new_post${i + post_counter - 5}`).setAttribute("hidden", true);
		}
		for (i= 0; i < 5 && i <(numPosts - post_counter); i++) {
			document.getElementById(`new_post${i + post_counter}`).removeAttribute("hidden");
		}
		post_counter += i;
	} else { //if post_counter = 0 (i.e. loading the first 5 posts again)
		for (i = 0; i < 5; i++) {
			document.getElementById(`new_post${i}`).setAttribute("hidden", true);
		}
		for (i= 0; i < 5 && i <(numPosts - post_counter); i++) {
			document.getElementById(`new_post${i + post_counter}`).removeAttribute("hidden");
		}
		post_counter += i;
	}
}

//loadLessPosts
function loadLessPosts() {
	onPage = post_counter%5;
	if (post_counter < 6) {
		alert("No more previous posts");
	} else if (onPage == 0) {
		for (i = 0; i < 5; i++) {
			document.getElementById(`new_post${i + post_counter - 5}`).setAttribute("hidden", true);
			document.getElementById(`new_post${i + post_counter - 10}`).removeAttribute("hidden");
		}
	} else {
		for (i = 0; i < 5 && i < onPage; i++) {
			//alert(`Current i is ${i}, current counter is ${post_counter}, and onPage is ${onPage}`);
			document.getElementById(`new_post${post_counter - i -1}`).setAttribute("hidden", true);
		}
	}
		post_counter -= 5 + onPage; 
		loadMorePosts();
}
	