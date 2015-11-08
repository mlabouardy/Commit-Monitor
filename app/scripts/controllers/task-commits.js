'use strict';

/**
 * @ngdoc function
 * @name commitMonitorApp.controller:TaskCommitsCtrl
 * @description
 * # TaskCommitsCtrl
 * Controller of the commitMonitorApp
 */
angular.module('commitMonitorApp')
  .controller('TaskCommitsCtrl', function ($scope, $routeParams, repoFactory) {
    $scope.task=$routeParams.tag;

    repoFactory.getCommits($routeParams.user, $routeParams.repo).success(function(commits){
 			$scope.commits=[];
 			$scope.users=[];
 			for(var i=0;i<commits.length;i++){
 				var taskTag= commits[i].commit.message.substr(0, commits[i].commit.message.indexOf(':')); 
 				if(taskTag==$scope.task){
	 				$scope.commits.push({
		 				commiter:commits[i].commit.committer.name,
		 				email:commits[i].commit.committer.email,
		 				date:commits[i].commit.committer.date,
		 				message:commits[i].commit.message,
		 				files: "#/repository/"+$routeParams.user+'/'+$routeParams.repo+"/commits/"+commits[i].commit.tree.sha
	 				});
 				}
 			}
 		});
  });
