var second = document.querySelector(".radio-indicator");
var picture1 = document.querySelector(".background-picture-list");
var picture2 = document.querySelector(".background-picture-list2");
					// POPUP SWIPE

second.addEventListener ("click", function (evt) {
	evt.preventDefault();
	picture2.classList.add("background-picture-list2-show");
	picture1.classList.add("visually-hidden");
});

























