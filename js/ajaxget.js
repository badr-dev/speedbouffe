/**
 * Ajax GET methods
 */
$(document).ready(function () {

	/**
	 * Orders from generateur_speedbouffe
	 */
	$.get(
		'../data/generateur_speedbouffe/script.php',
		'false',
		'getAllOrders',
		'json'
	);

	function getAllOrders(data){
		console.log("TEST");
		console.log(data);
	}

});