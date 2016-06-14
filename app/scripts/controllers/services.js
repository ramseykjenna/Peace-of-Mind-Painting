'use strict';

/**
 * @ngdoc function
 * @name pompApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the pompApp
 */
angular.module('pompApp')
  .controller('ServicesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
