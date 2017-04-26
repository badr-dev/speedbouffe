/**
 * Created by nenroz on 22/03/17.
 */

app.controller('commandesCtrl', function ($scope, Commandes) {

  $scope.isCollapsed = false;

  // $scope.status = null;
  $scope.commandesList = {};
	$scope.repasCommandeList = [];

  commandes();

  /**
	 * Retourne les commandes
   */
  function commandes() {
    Commandes.getCommandes()
      .then(function (response) {
        $scope.commandesList = response.data;
      }, function (error) {
				console.log(error);
      });
  }

  /**
	 * Retourne les repas rattachés à une commande
	 *
   * @param id_commande
   */
  $scope.repasCommande = function (id_commande) {
		Commandes.getRepasCommandeByIdCommande(id_commande)
			.then(function (response) {
        $scope.repasCommandeList.push(response.data);
				console.log(JSON.stringify($scope.repasCommandeList));
      }, function (error) {
				console.log(error);
      })
  }

});

app.controller('detailCommandeCtrl', function ($scope, $route, $routeParams, Commandes) {

	$scope.commandeId = $routeParams.id;

	$scope.commande = {};

	getCommande($routeParams.id);

	function getCommande(id_commande) {
    Commandes.getCommandeByIdCommande(id_commande)
      .then(function (response) {
        $scope.commande = response.data;
        console.log(JSON.stringify($scope.commande));
      }, function (error) {
        console.log(error);
      });
  }

});

app.controller('statsCtrl', function ($scope) {

  $scope.data = [
    { y: "2006", a: 100 },
    { y: "2007", a: 75 },
    { y: "2008", a: 50 },
    { y: "2009", a: 75 },
    { y: "2010", a: 50 },
    { y: "2011", a: 75 },
    { y: "2012", a: 100 }
  ];
  $scope.xaxis = 'y';
  $scope.yaxis = '["a"]';

});
