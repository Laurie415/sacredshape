'use strict';

/**
 * @ngdoc function
 * @name threedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the threedApp
 */
angular.module('threedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
