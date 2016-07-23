'use strict';

/**
 * @ngdoc function
 * @name pompApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the pompApp
 */
angular.module('pompApp')
    //    .config(function ($mdIconProvider) {
    //        $mdIconProvider.iconSet("avatar", 'icons/avatar-icons.svg', 128);
    //    })

.controller('WorkCtrl', function ($scope, $firebaseArray, $timeout, $rootScope) {

    // To Edit File Paths and Add New
    $scope.editing = false;

     // To Rearrange and Resize Tiles
    $scope.canDragResize = false;



    $scope.loadingItems = 0;
    $scope.new = {
        "photoPath": "images/.jpg",
        "sizeX": 2,
        "sizeY": 2,
        "row": 0,
        "col": 0,
        "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio."
    };
    $scope.submitNew = function () {
        $scope.photosArray.$add($scope.new);
        console.log('done');
    }

      $scope.submitNewExt = function () {
        $scope.photosExtArray.$add($scope.new);
        console.log('done');
    }

    $scope.$watch('photosArray', function (newVal) {
        //        console.log(newVal);
    }, true);

    $scope.$watch('loadingItems', function (newVal) {
        if (newVal === 2 && !$scope.canDragResize) {
             $rootScope.loadFooter = true;
            $timeout(function () {

                $('.materialboxed').materialbox();
            }, 1000);
        }
    });

    var ref = new Firebase("https://pomp-9a862.firebaseio.com/photos");
    $scope.photosArray = $firebaseArray(ref);
    $scope.photosArray.$loaded(function () {
        $scope.loaded = true;
        $scope.loadingItems++;
    });

    var ref = new Firebase("https://pomp-9a862.firebaseio.com/photosExt");
    $scope.photosExtArray = $firebaseArray(ref);
    $scope.photosExtArray.$loaded(function () {
        $scope.loadedExt = true;
        $scope.loadingItems++;
    });

    // Grid Options
    $scope.gridsterOpts = {
        columns: 12,
        resizable: {
            enabled: $scope.canDragResize,
            stop: function (event, $element, widget) {
                    $scope.save();
                } // optional callback fired when item is finished resizing
        },
        draggable: {
            enabled: $scope.canDragResize, // whether dragging items is supported
            stop: function (event, $element, widget) {
                    $scope.save();
                } // optional callback fired when item is finished dragging
        }
    };

    $scope.gridsterOptsExt = {
        columns: 12,
        resizable: {
            enabled: $scope.canDragResize,
            stop: function (event, $element, widget) {
                    $scope.saveExt();
                } // optional callback fired when item is finished resizing
        },
        draggable: {
            enabled: $scope.canDragResize, // whether dragging items is supported
            stop: function (event, $element, widget) {
                    $scope.saveExt();
                } // optional callback fired when item is finished dragging
        }
    };


    // Save Galleries
    $scope.save = function () {
        $scope.photosArray.forEach(function (photo) {
            console.log(photo);
            var photoHandle = $scope.photosArray.$getRecord(photo.$id);

            $scope.photosArray.$save(photoHandle).then(function () {
                console.log('saved');
            });
        });
    }

     $scope.saveExt = function () {
        $scope.photosExtArray.forEach(function (photo) {
            console.log(photo);
            var photoHandle = $scope.photosExtArray.$getRecord(photo.$id);

            $scope.photosExtArray.$save(photoHandle).then(function () {
                console.log('saved');
            });
        });
    }

    //
    //    this.tiles = buildGridModel({
    //        title: "Svg-",
    //        background: ""
    //    });
    //
    //    function buildGridModel(tileTmpl) {
    //        var it, results = [];
    //        for (var j = 0; j < 40; j++) {
    //            it = angular.extend({}, tileTmpl);
    //            it.title = it.title + (j + 1);
    //            it.span = {
    //                row: 1,
    //                col: 1
    //            };
    //            switch (j + 1) {
    //            case 1:
    //                it.background = "red";
    //                it.span.row = it.span.col = 2;
    //                break;
    //            case 2:
    //                it.background = "green";
    //                break;
    //            case 3:
    //                it.background = "darkBlue";
    //                break;
    //            case 4:
    //                it.background = "blue";
    //                it.span.col = 2;
    //                break;
    //            case 5:
    //                it.background = "yellow";
    //                it.span.row = it.span.col = 2;
    //                break;
    //            case 6:
    //                it.background = "pink";
    //                break;
    //            case 7:
    //                it.background = "darkBlue";
    //                break;
    //            case 8:
    //                it.background = "purple";
    //                break;
    //            case 9:
    //                it.background = "deepBlue";
    //                break;
    //            case 10:
    //                it.background = "lightPurple";
    //                break;
    //            case 11:
    //                it.background = "yellow";
    //                break;
    //            }
    //            results.push(it);
    //        }
    //        return results;
    //    }
    //
    //    this.colorTiles = (function () {
    //        var tiles = [];
    //        for (var i = 0; i < 46; i++) {
    //            tiles.push({
    //                color: randomColor(),
    //                colspan: randomSpan(),
    //                rowspan: randomSpan()
    //            });
    //        }
    //        return tiles;
    //    })();
    //
    //    function randomColor() {
    //        return COLORS[Math.floor(Math.random() * COLORS.length)];
    //    }
    //
    //    function randomSpan() {
    //        var r = Math.random();
    //        if (r < 0.8) {
    //            return 1;
    //        } else if (r < 0.9) {
    //            return 2;
    //        } else {
    //            return 3;
    //        }
    //    }
    //

});
