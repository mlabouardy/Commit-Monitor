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
 	var baseurl='https://api.github.com/repos/';
 	var url=baseurl+$routeParams.user+'/'+$routeParams.repo;
 	$http.get(url).success(function(data){
 		$scope.owner={
 			login:data.owner.login,
 			avatar:data.owner.avatar_url,
 			url:data.owner.html_url
 		};

 		var url="https://api.github.com/users/"+$routeParams.user+"/followers";
 		$http.get(url).success(function(followers){
 			$scope.owner.followers=followers.length;
 		});

 		var url="https://api.github.com/users/"+$routeParams.user+"/following";
 		$http.get(url).success(function(following){
 			$scope.owner.following=following.length;
 		});

 		$scope.repo={
 			private_repo:data.private,
 			url:data.html_url,
 			description:data.description,
 			created_at:data.created_at,
 			updated_at:data.updated_at,
 			language:data.language,
 			clone:data.clone_url
 		};

 		if($scope.repo.private_repo){
 			$scope.repo.private_repo="Private";
 		}else{
 			$scope.repo.private_repo="Public";
 		}
 	});
 });
