var catalog = document.querySelector(".catalog");
var catalog_popup = document.querySelector(".modal-catalog");


					// POPUP catalog

catalog.addEventListener ("click", function (evt) {
	evt.preventDefault();
	catalog_popup.add("modal-show");
});

catalog_popup.addEventListener ("mouseleave", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});








// var close = popup.querySelector(".JSclose");
// var form = popup.querySelector(".form");
// var login = popup.querySelector("[name=login]");
// var password = popup.querySelector("[name=password]");



link.addEventListener ("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

close.addEventListener ("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener ("submit", function (evt) {
	if (!login.value || !password.value) {
	evt.preventDefault();
	popup.classList.add("modal-error");
	} 

});























