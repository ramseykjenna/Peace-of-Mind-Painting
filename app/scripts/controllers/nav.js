'use strict';

/**
 * @ngdoc function
 * @name pompApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the pompApp
 */
angular.module('pompApp')
    .controller('NavCtrl', function ($scope) {


        // Jquery for main page
        $(document).ready(function () {
            console.log('worked');

            $('.button-collapse').sideNav({
                closeOnClick: true
            });


        });
    });
