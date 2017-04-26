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