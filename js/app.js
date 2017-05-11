/**
 * Created by nenroz on 22/03/17.
 */

'use strict';

var app = angular.module('app', [
  'ngRoute',
  'ui.bootstrap',
  'angular.morris'
]);

/* ---------------------------------- */
// FILTERS
/* ---------------------------------- */

app.filter('civilite', function () {
  return function (input) {
    switch (input) {
      case 1:
        return 'Madame';
      case 2:
        return 'Monsieur';
      default:
        return 'Undefined';
    }
  }
});

app.filter('paiement_type', function () {
  return function (input) {
    switch (input) {
      case 1:
        return 'Espèce';
      case 2:
        return 'Carte bancaire';
      default:
        return 'Undefined';
    }
  }
});

app.filter('tarif_type', function () {
  return function (input) {
    switch (input) {
      case 1:
        return 'Etudiant';
      case 2:
        return 'Senior';
      default:
        return 'Undefined';
    }
  }
});

app.filter('repas', function () {
  return function (input) {
    switch (input) {
      case 1:
        return 'Les trois petits cochons';
      case 2:
        return 'Flageollet fatal';
      case 3:
        return 'Fruits défendus';
      case 4:
        return 'Les délicatesses de la mer';
      case 5:
        return 'Pot-au-feu glacial';
      case 6:
        return 'Soupe nature';
      case 7:
        return 'Amuse-gueules pas drôles';
      case 8:
        return 'Pâtes au beurre du pauvre';
      case 9:
        return 'Stinking plateau de fromages';
      default:
        return 'Undefined';
    }
  }
});