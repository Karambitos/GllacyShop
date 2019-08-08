var login = document.querySelector(".JSlogin");
var login_popup = document.querySelector(".action-privat");


					// POPUP catalog

login.addEventListener ("click", function (evt) {
	evt.preventDefault();
	login_popup.classList.add("modal-show");
});

login_popup.addEventListener ("mouseleave", function (evt) {
	evt.preventDefault();
	login_popup.classList.remove("modal-show");
});
