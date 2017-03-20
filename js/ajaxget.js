/**
 * Ajax GET methods
 */
$(document).ready(function () {
	$.get("../data/generateur_speedbouffe/script.php", function(data) {
		console.log(data);
	});
});