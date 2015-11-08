'use strict';

/**
 * @ngdoc function
 * @name commitMonitorApp.controller:RepositoryInfoCtrl
 * @description
 * # RepositoryInfoCtrl
 * Controller of the commitMonitorApp
 */
 angular.module('commitMonitorApp')
 .controller('RepositoryInfoCtrl', function ($scope, $http, $routeParams, repoFactory, userFactory) {

 	repoFactory.getInfo($routeParams.user, $routeParams.repo).success(function(data){
 		$scope.owner={
 			login:data.owner.login,
 			avatar:data.owner.avatar_url,
 			url:data.owner.html_url
 		};

 		userFactory.getFollowers($routeParams.user).success(function(followers){
 			$scope.owner.followers=followers.length;
 		});

 		userFactory.getFollowing($routeParams.user).success(function(following){
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

 		repoFactory.getContributors($routeParams.user, $routeParams.repo).success(function(contributors){
 			$scope.contributors=[];
 			$scope.data=[];
 			for(var i=0;i<contributors.length;i++){
 				$scope.contributors.push({
 					login:contributors[i].login,
 					avatar:contributors[i].avatar_url,
 					contributions:contributors[i].contributions
 				});

 				$scope.data.push({
 					value: contributors[i].contributions,
 					label: contributors[i].login,
 					color: getRandomColor()
 				});
 			}
 			draw('commitChart', $scope.data);
 		});

 		repoFactory.getLanguages($routeParams.user, $routeParams.repo).success(function(languages){
 			$scope.data=[];
 			var keys=Object.keys(languages);
 			keys.forEach(function(key){
 				$scope.data.push({
 					value: languages[key],
 					label: key,
 					color: getRandomColor()
 				});
 			});
 			draw('languagesChart', $scope.data);
 		});


 		repoFactory.getContents($routeParams.user, $routeParams.repo).success(function(contents){
 			$scope.contents=[];
 			for(var i=0;i<contents.length;i++){
 				$scope.contents.push({
 					name:contents[i].name,
 					size: Math.round( ((contents[i].size /1000)) * 10 ) / 10,
 					download:contents[i].download_url
 				});
 			}
 		});

 		repoFactory.getCommits($routeParams.user, $routeParams.repo).success(function(commits){
 			$scope.commits=[];
 			$scope.users=[];
 			for(var i=0;i<commits.length;i++){
 				$scope.commits.push({
	 				commiter:commits[i].commit.committer.name,
	 				email:commits[i].commit.committer.email,
	 				date:commits[i].commit.committer.date,
	 				message:commits[i].commit.message,
	 				files: "#/repository/"+$routeParams.user+'/'+$routeParams.repo+"/commits/"+commits[i].commit.tree.sha
 				});
 			}
 		});

 	});
});
