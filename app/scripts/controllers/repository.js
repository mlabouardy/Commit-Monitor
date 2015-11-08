'use strict';

/**
 * @ngdoc function
 * @name commitMonitorApp.controller:RepositoryCtrl
 * @description
 * # RepositoryCtrl
 * Controller of the commitMonitorApp
 */
 angular.module('commitMonitorApp')
 .controller('RepositoryCtrl', function ($scope, $location, $http, $base64) {
 	$scope.getInfo=function(){
 		 var authdata = $base64.encode("mlabouardy" + ':' + "sinworm66125");

 console.log(authdata);
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
 		$http.get('https://api.github.com/repos/'+$scope.repository).success(function(data){
 			$location.path('repository/'+$scope.repository);
 		});
 	};

 	$scope.getTasks=function(){
 		$location.path('tasks/'+$scope.repository);
 	}
 });
