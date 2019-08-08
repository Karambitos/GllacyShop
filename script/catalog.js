var catalog = document.querySelector(".JScatalog");
var catalog_popup = document.querySelector(".modal-catalog-list");


					// POPUP catalog

catalog.addEventListener ("mouseenter", function (evt) {
	evt.preventDefault();
	catalog_popup.classList.add("modal-show");
});

catalog_popup.addEventListener ("mouseleave", function (evt) {
	evt.preventDefault();
	catalog_popup.classList.remove("modal-show");
});


// var catalog = document.querySelector(".JScatalog");
// catalog.addEventListener ("click", function (evt) {
// 	console.log ("клик");
// });


// var close = popup.querySelector(".JSclose");
// var form = popup.querySelector(".form");
// var login = popup.querySelector("[name=login]");
// var password = popup.querySelector("[name=password]");



// link.addEventListener ("click", function (evt) {
// 	evt.preventDefault();
// 	popup.classList.add("modal-show");
// });

// close.addEventListener ("click", function (evt) {
// 	evt.preventDefault();
// 	popup.classList.remove("modal-show");
// 	popup.classList.remove("modal-error");
// });

// form.addEventListener ("submit", function (evt) {
// 	if (!login.value || !password.value) {
// 	evt.preventDefault();
// 	popup.classList.add("modal-error");
// 	} 

// });





	

















