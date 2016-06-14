'use strict';

/**
 * @ngdoc function
 * @name pompApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the pompApp
 */
angular.module('pompApp')
    .controller('WorkCtrl', function ($scope) {
        $(document).ready(function () {
            $('.carousel').carousel({padding: 50});
        });
    });
