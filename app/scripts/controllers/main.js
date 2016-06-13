'use strict';

/**
 * @ngdoc function
 * @name pompApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pompApp
 */
angular.module('pompApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
