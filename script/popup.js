var iceCreamSale = document.querySelector(".best-product-list");
var iceCreamSalepopup = document.querySelector(".best-product-list-hidden");


					// POPUP HIT SALE

iceCreamSale.addEventListener ("hover", function (evt) {
	evt.preventDefault();
	iceCreamSalepopup.classList.add("best-product-list-show");

});

// close.addEventListener ("click", function (evt) {
// 	evt.preventDefault();
// 	popup.classList.remove("modal-show");
// 	popup.classList.remove("modal-error");
// });

// form.addEventListener ("submit", function (evt) {
// 	if (!login.value || !password.value) {
// 	evt.preventDefault();
// 	popup.classList.add("modal-error");
// 	}// else {
// 	// localStorege.setItem("login",login.velue);
// 	// }
// });


























