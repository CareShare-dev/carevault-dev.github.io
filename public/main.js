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

particlesJS("particles-js", {
	particles: {
		number: { value: 80, density: { enable: true, value_area: 800 } },
		color: { value: "#ffffff" },
		shape: {
			type: "circle",
			stroke: { width: 0, color: "#000000" },
			polygon: { nb_sides: 5 },
			image: { src: "img/github.svg", width: 100, height: 100 },
		},
		opacity: {
			value: 0.125,
			random: false,
			anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
		},
		size: {
			value: 5,
			random: true,
			anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: "#ffffff",
			opacity: 0.2,
			width: 1,
		},
		move: {
			enable: true,
			speed: 6,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 },
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: true, mode: "repulse" },
			onclick: { enable: true, mode: "push" },
			resize: true,
		},
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 },
		},
	},
	retina_detect: true,
});
