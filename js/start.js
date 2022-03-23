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

function spawnPosts() { 
	// Create element:
	for (var i=0; i < 5; i++) {
		var clone = document.querySelectorAll(".post")[0].cloneNode(true);
		clone.removeAttribute("hidden");
		document.querySelectorAll(".feed")[0].appendChild(clone);
	}
}

function confirmation() {
	if (confirm("Are you sure you want to log out?") == true) {
		window.location.replace('start.html');
	}
} 
