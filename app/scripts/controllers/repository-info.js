'use strict';

/**
 * @ngdoc function
 * @name commitMonitorApp.controller:RepositoryInfoCtrl
 * @description
 * # RepositoryInfoCtrl
 * Controller of the commitMonitorApp
 */
angular.module('commitMonitorApp')
  .controller('RepositoryInfoCtrl', function ($scope, $http, $routeParams) {
  	 var url='https://api.github.com/repos/'+$routeParams.user+'/'+$routeParams.repo;
  	 $http.get(url).success(function(data){
  	 	$scope.owner={
 				login:data.owner.login,
 				avatar:data.owner.avatar_url,
 				url:data.owner.html_url
 		};
  	 });
  });
