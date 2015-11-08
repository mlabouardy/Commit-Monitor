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


 		function getRandomColor() {
 			var letters = '0123456789ABCDEF'.split('');
 			var color = '#';
 			for (var i = 0; i < 6; i++ ) {
 				color += letters[Math.floor(Math.random() * 16)];
 			}
 			return color;
 		}

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


 		var url=baseurl+$routeParams.user+'/'+$routeParams.repo+"/contributors";
 		$http.get(url).success(function(contributors){
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
 			var context = document.getElementById('commitChart').getContext('2d');
 			var skillsChart = new Chart(context).Pie($scope.data);
 		});

 		

 		var url=baseurl+$routeParams.user+'/'+$routeParams.repo+"/languages";
 		$http.get(url).success(function(languages){
 			$scope.data=[];
 			var keys=Object.keys(languages);
 			keys.forEach(function(key){
 				$scope.data.push({
 					value: languages[key],
 					label: key,
 					color: getRandomColor()
 				});
 			});
 			var context = document.getElementById('languagesChart').getContext('2d');
 			var skillsChart = new Chart(context).Pie($scope.data);
 		});


 		var url=baseurl+$routeParams.user+'/'+$routeParams.repo+"/contents";
 		$http.get(url).success(function(contents){
 			$scope.contents=[];
 			for(var i=0;i<contents.length;i++){
 				$scope.contents.push({
 					name:contents[i].name,
 					size: Math.round( ((contents[i].size /1000)) * 10 ) / 10,
 					download:contents[i].download_url
 				});
 			}
 		});

 		var url=baseurl+$routeParams.user+'/'+$routeParams.repo+"/commits";
 		$http.get(url).success(function(commits){
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
