/**
 * Created by nenroz on 19/04/17.
 */

app.service('Commandes', function ($http) {

  var url_base = 'http://79.137.83.73:3000/';

  this.getCommandes = function () {
    return $http.get(url_base + 'commandes');
  };

  this.getCommandeByIdCommande = function (id_commande) {
    return $http.get(url_base + 'commandes/' + id_commande)
  };

  this.getRepasCommande = function () {
    return $http.get(url_base + 'repas_commande');
  };

  this.getRepasCommandeByIdCommande = function (id_commande) {
    return $http.get(url_base + 'repas_commande/' + id_commande);
  };

});