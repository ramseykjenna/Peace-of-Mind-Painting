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
   $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
  });
