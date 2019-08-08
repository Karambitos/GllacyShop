var search = document.querySelector(".JSsearch");
var search_popup = document.querySelector(".search-conteiner");


					// POPUP catalog

search.addEventListener ("mouseenter", function (evt) {
	evt.preventDefault();
	search_popup.classList.add("modal-show");
});

search_popup.addEventListener ("mouseleave", function (evt) {
	evt.preventDefault();
	search_popup.classList.remove("modal-show");
});