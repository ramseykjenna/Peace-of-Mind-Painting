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

.controller('WorkCtrl', function ($scope, $firebaseArray, $timeout, $rootScope, $log) {

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
        //
        //    $scope.$watch('photosArray', function (newVal) {
        //        //        console.log(newVal);
        //    }, true);
        //
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
        $log.log(angular.toJson($scope.photosExtArray));
        //        $scope.photosExtArray.forEach(function(element){
        //            $log.log(element);
        //        });
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
        maxRows: 200,
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


    $scope.fuck = function () {
        $log.log(angular.toJson($scope.extArray));
    }



    $scope.extArray = [{
        "col": 0,
        "photoPath": "images/exterior-1.jpg",
        "row": 8,
        "sizeX": 4,
        "sizeY": 5,
        "$id": "0",
        "$priority": null
    }, {
        "col": 4,
        "photoPath": "images/exterior-2.jpg",
        "row": 8,
        "sizeX": 8,
        "sizeY": 5,
        "$id": "1",
        "$priority": null
    }, {
        "col": 6,
        "photoPath": "images/exterior-3.jpg",
        "row": 53,
        "sizeX": 6,
        "sizeY": 7,
        "$id": "2",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/exterior-5.jpg",
        "row": 35,
        "sizeX": 5,
        "sizeY": 4,
        "$id": "4",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/exterior-6.jpg",
        "row": 31,
        "sizeX": 5,
        "sizeY": 4,
        "$id": "5",
        "$priority": null
    }, {
        "col": 5,
        "photoPath": "images/exterior-7.jpg",
        "row": 30,
        "sizeX": 7,
        "sizeY": 8,
        "$id": "6",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/fence-1.jpg",
        "row": 13,
        "sizeX": 6,
        "sizeY": 4,
        "$id": "7",
        "$priority": null
    }, {
        "col": 6,
        "photoPath": "images/fence-2.jpg",
        "row": 13,
        "sizeX": 6,
        "sizeY": 4,
        "$id": "8",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/fence-4.jpg",
        "row": 17,
        "sizeX": 6,
        "sizeY": 4,
        "$id": "9",
        "$priority": null
    }, {
        "col": 6,
        "photoPath": "images/fence-3.jpg",
        "row": 17,
        "sizeX": 6,
        "sizeY": 4,
        "$id": "-KNFXAFSyp9expS5eJSd",
        "$priority": null
    }, {
        "col": 4,
        "photoPath": "images/deck-before1.jpg",
        "row": 60,
        "sizeX": 8,
        "sizeY": 5,
        "$id": "-KNFXEyaOmKU3DOO3BEO",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/deck-before2.jpg",
        "row": 39,
        "sizeX": 5,
        "sizeY": 6,
        "$id": "-KNFXINBfKBk95GGHWAe",
        "$priority": null
    }, {
        "col": 5,
        "photoPath": "images/deck-before3.jpg",
        "row": 38,
        "sizeX": 7,
        "sizeY": 7,
        "$id": "-KNFXKaCp9ODjJgexcvk",
        "$priority": null
    }, {
        "col": 6,
        "photoPath": "images/deck-after1.jpg",
        "row": 45,
        "sizeX": 6,
        "sizeY": 4,
        "$id": "-KNFXMvHFK1IlJV_nrt0",
        "$priority": null
    }, {
        "col": 6,
        "photoPath": "images/deck-after2.jpg",
        "row": 49,
        "sizeX": 6,
        "sizeY": 4,
        "$id": "-KNFadwjbuhcBurdHRAc",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/deck-stain.jpg",
        "row": 45,
        "sizeX": 6,
        "sizeY": 6,
        "$id": "-KNFapp3rnFwotNy1o00",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/deck6-stain.jpg",
        "row": 51,
        "sizeX": 6,
        "sizeY": 6,
        "$id": "-KNFb4LoYBGlc2X53C4h",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/door-stain-after.jpg",
        "row": 6,
        "sizeX": 3,
        "sizeY": 2,
        "$id": "-KNFb9D8S7PXkpE0OFc1",
        "$priority": null
    }, {
        "col": 5,
        "photoPath": "images/door-stain-before1.jpg",
        "row": 0,
        "sizeX": 7,
        "sizeY": 8,
        "$id": "-KNFbBKVGRlvCzTYCHW8",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/door-stain-before2.jpg",
        "row": 0,
        "sizeX": 5,
        "sizeY": 6,
        "$id": "-KNFbDkiTiHC9WUPgZbN",
        "$priority": null
    }, {
        "col": 3,
        "photoPath": "images/door-stain-before3.jpg",
        "row": 6,
        "sizeX": 2,
        "sizeY": 2,
        "$id": "-KNFbEjaAXfmMLE1werx",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/pool-after1.jpg",
        "row": 72,
        "sizeX": 12,
        "sizeY": 8,
        "$id": "-KNFbM3H6Rb-C-pZnIds",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/pool-after2.jpg",
        "row": 65,
        "sizeX": 6,
        "sizeY": 7,
        "$id": "-KNFbNG33YCfP8Tl6YmI",
        "$priority": null
    }, {
        "col": 6,
        "photoPath": "images/pool-after3.jpg",
        "row": 65,
        "sizeX": 6,
        "sizeY": 7,
        "$id": "-KNFbOWZpNdm4lAIbB_x",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/pool-before.jpg",
        "row": 60,
        "sizeX": 4,
        "sizeY": 5,
        "$id": "-KNFbRSXhMuT01-rzigx",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/power-wash.jpg",
        "row": 57,
        "sizeX": 6,
        "sizeY": 3,
        "$id": "-KNFbU-5iBIkBeOgdtV-",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/red-door-beforeandafter.jpg",
        "row": 26,
        "sizeX": 5,
        "sizeY": 5,
        "$id": "-KNFb_vzDohFuOhePAGe",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/stain-door-before.jpg",
        "row": 21,
        "sizeX": 5,
        "sizeY": 5,
        "$id": "-KNFbeL5DLi1QKz4fiO8",
        "$priority": null
    }, {
        "col": 5,
        "photoPath": "images/stain-door-after.jpg",
        "row": 21,
        "sizeX": 7,
        "sizeY": 9,
        "$id": "-KNFbfwiWylSNxdrHnHj",
        "$priority": null
    }, {
        "col": 0,
        "photoPath": "images/stain-job-1.jpg",
        "row": 80,
        "sizeX": 6,
        "sizeY": 6,
        "$id": "-KNFbiqcqbisXt3I3Rvk",
        "$priority": null
    }, {
        "col": 6,
        "photoPath": "images/stain-job-2.jpg",
        "row": 80,
        "sizeX": 6,
        "sizeY": 6,
        "$id": "-KNFbk7ywBkdqFp_ylJJ",
        "$priority": null
    }];

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
