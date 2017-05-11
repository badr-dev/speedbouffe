/**
 * Created by nenroz on 22/03/17.
 */

app.controller('commandesCtrl', function ($scope, Commandes) {

  $scope.isCollapsed = false;

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
	$scope.repasCommande = {};

	getCommande($routeParams.id);
	getRepasCommande($routeParams.id);

	function getCommande(id_commande) {
    Commandes.getCommandeByIdCommande(id_commande)
      .then(function (response) {
        $scope.commande = response.data;
        console.log(JSON.stringify($scope.commande));
      }, function (error) {
        console.log(error);
      });
  }

  function getRepasCommande(id_commande) {
    Commandes.getRepasCommandeByIdCommande(id_commande)
      .then(function (response) {
        $scope.repasCommande = response.data;
        console.log(JSON.stringify($scope.repasCommande));
      }, function (error) {
        console.log(error);
      });
  }

});

app.controller('statsCtrl', function ($scope, Commandes) {

  var repasCommande = {};
  var joursCommande = {};

  var dataRepasCommande = [
    { id: 1, label: "Les trois petits cochons", value: 0 },
    { id: 2, label: "Flageollet fatal", value: 0 },
    { id: 3, label: "Fruits défendus", value: 0 },
    { id: 4, label: "Les délicatesses de la mer", value: 0 },
    { id: 5, label: "Pot-au-feu glacial", value: 0 },
    { id: 6, label: "Soupe nature", value: 0 },
    { id: 7, label: "Amuse-gueules pas drôles", value: 0 },
    { id: 8, label: "Pâtes au beurre du pauvre", value: 0 },
    { id: 9, label: "Stinking plateau de fromages", value: 0 }
  ];

  var dataJoursCommande = [];

  getRepasCommandeListe();
  getCommandeListe();

  function getRepasCommandeListe() {
    Commandes.getRepasCommande()
      .then(function (response) {
        repasCommande = response.data;

        var menu_id;

        for (var i = 0; i < repasCommande.length; i++) {
          menu_id = repasCommande[i]['menu_id'];

          for (var j = 0; j < dataRepasCommande.length; j++) {
            if (dataRepasCommande[j]['id'] == menu_id) {
              dataRepasCommande[j]['value'] += 1;
            }
          }
        }

        Morris.Donut({
          element: 'morris-donut-chart',
          data: dataRepasCommande,
          resize: true,
          parseTime:false
        });

      }, function (error) {
        console.log(error);
      });
  }

  function getCommandeListe() {
    Commandes.getCommandes()
      .then(function (response) {
        joursCommande = response.data;

        for (var i = 0; i < joursCommande.length; i++) {
          var d = new Date(joursCommande[i]['jour_commande']);
          console.log(d.getHours() + d.getDate());
          dataJoursCommande.push({ date: d.getHours() });
        }

        console.log(JSON.stringify(dataJoursCommande));

        Morris.Area({
          element: 'morris-area-chart',
          data: dataJoursCommande,
          resize: true,
          parseTime: false,
          xkey: 'date'
        });

      }, function (error) {
        console.log(error);
      });
  }

});

app.controller('SearchCtrl', function ($scope) {

  $scope.searchCommande = function () {

  }
});