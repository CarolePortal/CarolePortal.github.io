// menu background active
let menus = document.getElementById("Link");
let navBtns = menus.getElementsByClassName("navBtn");
for (let i = 0; i < navBtns.length; i++) {
	navBtns[i].addEventListener("click", function () {
		let a = document.getElementsByClassName("navActive");
		a[0].className = a[0].className.replace(" navActive", "");
		this.className += " navActive";
	});
}

// open menu
let burgerMenu = document.querySelector(".navLinkMobile");
let navLink = document.querySelector(".navLink");
burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("open");
	navLink.classList.toggle("block");
});

// année copyright
const year = new Date().getFullYear();
document.getElementById("copy").innerHTML = year;

// Back to top
let basicScrollTop = function () {
	// The button
	let btnTop = document.querySelector("#goTop");
	// Reveal the button
	let btnReveal = function () {
		if (window.scrollY >= 300) {
			btnTop.classList.add("is-visible");
		} else {
			btnTop.classList.remove("is-visible");
		}
	};
	// Smooth scroll top
	// Thanks to => http://stackoverflow.com/a/22610562
	let TopscrollTo = function () {
		if (window.scrollY != 0) {
			setTimeout(function () {
				window.scrollTo(0, window.scrollY - 30);
				TopscrollTo();
			}, 5);
		}
	};
	// Listeners
	window.addEventListener("scroll", btnReveal);
	btnTop.addEventListener("click", TopscrollTo);
};
basicScrollTop();
