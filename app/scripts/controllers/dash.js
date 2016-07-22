'use strict';

/**
 * @ngdoc function
 * @name pompApp.controller:DashCtrl
 * @description
 * # DashCtrl
 * Controller of the pompApp
 */
angular.module('pompApp')
    .controller('DashCtrl', function ($scope, $firebaseArray) {

        var ref = new Firebase("https://pomp-9a862.firebaseio.com/photos");
        $scope.photosArray = $firebaseArray(ref);

        $scope.photosArray = $scope.imagesArray.$getRecord(mixin.$id);

        $scope.image = {
            imagePath: '',
            type: 'interior',
            order: 1
        };

        $scope.saveImage = saveImage;

        function saveImage() {
            if ($scope.image.imagePath.length) {
                $scope.photosArray.push($scope.image)
                    Materialize.toast('Saved! and yo hot..', 3000, 'rounded')

            }

        }

        var mixinHandle = $scope.mixinsArray.$getRecord(mixin.$id);
            mixinHandle.comments.push(comment);
            mixinHandle.comment.text = '';
            $scope.photosArray.$save(photosHandle).then(function () {
                console.log('saved');
            });


    });
