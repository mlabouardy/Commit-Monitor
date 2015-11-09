'use strict';

/**
 * @ngdoc function
 * @name commitMonitorApp.controller:MenuControllerCtrl
 * @description
 * # MenuControllerCtrl
 * Controller of the commitMonitorApp
 */
angular.module('commitMonitorApp')
  .controller('MenuControllerCtrl', function ($scope, $location) {
    	$scope.isActive = function (path) {
       		return $location.path() === path;
    	}
  });
