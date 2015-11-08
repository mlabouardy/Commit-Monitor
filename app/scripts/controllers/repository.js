'use strict';

/**
 * @ngdoc function
 * @name commitMonitorApp.controller:RepositoryCtrl
 * @description
 * # RepositoryCtrl
 * Controller of the commitMonitorApp
 */
 angular.module('commitMonitorApp')
 .controller('RepositoryCtrl', function ($scope, $location, $http) {
 	$scope.getInfo=function(){
 		$http.get('https://api.github.com/repos/'+$scope.repository).success(function(data){
 			$location.path('repository/'+$scope.repository);
 		});
 	};
 });
