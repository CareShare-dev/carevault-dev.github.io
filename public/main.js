var modalWrapper = document.getElementById("waitlist-wrapper");
let modal = document.getElementById("waitlist-modal");
console.log("here");
// Get the button that opens the modal
var btn = document.getElementById("waitlist-modal-button");
var closeBtn = document.getElementById("close-waitlist-modal");

// When the user clicks the button, open the modal
btn.onclick = function () {
	modalWrapper.classList.remove("hidden");
};

closeBtn.onclick = function () {
	console.log("clicked");
	modalWrapper.classList.add("hidden");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modalWrapper.classList.add("hidden");
	}
};
