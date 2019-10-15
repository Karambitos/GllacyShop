var iceCreamSaleAll = document.querySelectorAll(".best-product-list");
var iceCreamSalepopup = document.querySelector(".best-product-list-hidden");


					// POPUP HIT SALE

var updateCards = function (products){

for (var i = 0; i<products.length; i++){

	var iceCreamSale = products[i];

	iceCreamSale.addEventListener ("mouseenter", function (evt) {
	evt.preventDefault();
	iceCreamSalepopup.classList.add("modal-show");

	});
	iceCreamSale.addEventListener ("mouseleave", function (evt) {
		evt.preventDefault();
		iceCreamSalepopup.classList.remove("modal-show");
	});
}
}
updateCards(iceCreamSaleAll);

// const addFavoriteHandler = taskDom => {
// 	const starDom = document.querySelector('.star');
// 	starDom.onclick = () => {
// 		starDom.classList.toggle('selected');
// 	};
// };

// const addCompleteHandler = taskDom => {
// 	const checkboxDom = taskDom.querySelector('.checkbox');
// 	checkboxDom.onclick = () => {
// 		checkboxDom.classList.toggle('selected');
// 		taskDom.classList.toggle('completed');
// 	};
// };



// var assortmentData = [
// 	{
// 	  inStock: true,
// 	  isHit: false
// 	},
// 	{
// 	  inStock: false,
// 	  isHit: false
// 	},
// 	{
// 	  inStock: true,
// 	  isHit: true
// 	},
// 	{
// 	  inStock: true,
// 	  isHit: false
// 	}
//   ];

//   var updateCards = function (products) {
// 	var elements = document.querySelectorAll('.good')
// 	for (var i = 0; i<elements.length; i++){
// 	  var element = elements[i];
	  
// 	  var product = products[i];
	  
// 	  if (!product.inStock){
// 		element.classList.add('good--unavailable');
// 		} else {
// 		element.classList.add('good--available');
// 		}
		
// 	  if (product.isHit){
// 		element.classList.add('good--hit');
// 		}
		
// 	  }
// 	console.log(element);
// 	console.log(product);
	
	
	
// 	}
	
//   updateCards(assortmentData);
























