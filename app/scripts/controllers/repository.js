'use strict';

/**
 * @ngdoc function
 * @name commitMonitorApp.controller:RepositoryCtrl
 * @description
 * # RepositoryCtrl
 * Controller of the commitMonitorApp
 */
 angular.module('commitMonitorApp')
 .controller('RepositoryCtrl', function ($scope, $location, $base64, $http, authenticationFactory, $cookieStore, $rootScope) {
 	$scope.getInfo=function(){
 		var visibility=$scope.visibility;
 		if(visibility!='Public' && visibility!='Private'){
 			$scope.errorVisibility="Choose visibility of repository";
 		}else{
 			$cookieStore.put('visibility', visibility);
 			if(visibility=="Private"){
 				var authdata = $base64.encode($scope.username + ':' + $scope.password);
 				$cookieStore.put('globals', authdata);
 				authenticationFactory.login();
 			}
 			$http.get('https://api.github.com/repos/'+$scope.repository)
 			.success(function(data){
 				$location.path('repository/'+$scope.repository);
 			})
 			.error(function(){
 				$scope.error="Not found or private repository ";
 			});
 		}
 	};

 	$scope.getTasks=function(){
 		var visibility=$scope.visibility;
 		if(visibility!='Public' && visibility!='Private'){
 			$scope.errorVisibility="Choose visibility of repository";
 		}else{
 			$location.path('tasks/'+$scope.repository);
 		}
 	}
 });
