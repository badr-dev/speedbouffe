/**
 * Created by nenroz on 22/03/17.
 */

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/commandes', {
        templateUrl: 'pages/index.html',
        controller: 'commandesCtrl'
      })
      .when('/commandes/:id', {
        templateUrl: 'pages/detail_commande.html',
        controller: 'detailCommandeCtrl'
      })
      .when('/statistiques', {
        templateUrl: 'pages/stats.html',
        controller: 'statsCtrl'
      })
      .otherwise({
        redirectTo:'/commandes'
      });
  }
]);
