var iceCreamSale = document.querySelector(".best-product-list");
var iceCreamSalepopup = document.querySelector(".best-product-list-hidden");


					// POPUP HIT SALE

iceCreamSale.addEventListener ("mouseenter", function (evt) {
	evt.preventDefault();
	iceCreamSalepopup.classList.add("modal-show");

});
iceCreamSale.addEventListener ("mouseleave", function (evt) {
	evt.preventDefault();
	iceCreamSalepopup.classList.remove("modal-show");
});
























