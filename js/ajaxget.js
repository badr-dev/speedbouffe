/**
 * Created by rmazouz on 20/03/2017.
 */
/**
 * Ajax GET methods
 */
$(function () {

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