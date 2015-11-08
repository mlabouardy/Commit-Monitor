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
 				var message=commits[i].commit.message;
 				var taskTag= message.substr(0, message.indexOf(':')); 
 				var currentMessage=message.substr(message.indexOf(":") + 1); 
 				if(taskTag==$scope.task){
	 				$scope.commits.push({
		 				commiter:commits[i].commit.committer.name,
		 				email:commits[i].commit.committer.email,
		 				date:commits[i].commit.committer.date,
		 				message:currentMessage,
		 				files: "#/repository/"+$routeParams.user+'/'+$routeParams.repo+"/commits/"+commits[i].commit.tree.sha
	 				});
 				}
 			}
 		});
  });
