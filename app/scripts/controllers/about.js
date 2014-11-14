'use strict';

/**
 * @ngdoc function
 * @name mockeryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mockeryApp
 */
angular.module('mockeryApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
