'use strict';

/**
 * @ngdoc function
 * @name commitMonitorApp.controller:RepositoryCreateCtrl
 * @description
 * # RepositoryCreateCtrl
 * Controller of the commitMonitorApp
 */
angular.module('commitMonitorApp')
  .controller('RepositoryCreateCtrl', function ($scope, authenticationFactory, $http) {
   	$scope.createRepo=function(){
   		authenticationFactory.setCredentials($scope.username, $scope.password);
   		var data={name:$scope.repo,description:$scope.description};
   		$http.post("https://api.github.com/user/repos", data)
   		.success(function(){
   			$scope.success="Repository successfully created !";
   		})
   		.error(function(){
   			$scope.error="Error, try again !";
   		});
   	}
  });
