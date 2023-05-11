let modalWrapper = document.getElementById("waitlist-wrapper");
let modal = document.getElementById("waitlist-modal");
// Get the button that opens the modal
let btn = document.getElementById("waitlist-modal-button");
let navBtn = document.getElementById("nav-waitlist-btn");
let closeBtn = document.getElementById("close-waitlist-modal");

// configure toast
toastr.options.positionClass = "toast-top-center";
toastr.options.progressBar = true;
toastr.options.showMethod = "slideDown";
toastr.options.hideMethod = "fadeOut";
toastr.options.timeOut = 6000;

// When the user clicks the button, open the modal
btn.onclick = function () {
	modalWrapper.classList.remove("hidden");
};
navBtn.onclick = function () {
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

// form submission

let form = document.getElementById("waitlist-form");
async function handleSubmit(event) {
	event.preventDefault();
	console.log(event.target);
	let data = new FormData(event.target);

	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => {
			if (response.ok) {
				toastr.success("Thanks for your submission!");
				toastr.info(
					"We'll never spam you, but look forward to a welcome email soon"
				);
				form.reset();
				modalWrapper.classList.add("hidden");
			} else {
				response.json().then((data) => {
					if (Object.hasOwn(data, "errors")) {
						data["errors"].map((error) => {
							console.log(`Error: ${error}`);
						});
					}
					toastr.error("Oops, something went wrong");
					toastr.info("Please shoot us a message at carevaulthealth@gmail.com");
				});
			}
		})
		.catch((error) => {
			console.log(error);
			toastr.error("Oops, something went wrong");
			toastr.info("Please shoot us a message at carevaulthealth@gmail.com");
		});
}
form.addEventListener("submit", handleSubmit);
