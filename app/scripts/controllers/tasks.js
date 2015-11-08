'use strict';

/**
 * @ngdoc function
 * @name commitMonitorApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the commitMonitorApp
 */
angular.module('commitMonitorApp')
  .controller('TasksCtrl', function ($scope, $routeParams, repoFactory) {
  		var baseUrl="#/tasks/"+$routeParams.user+'/'+$routeParams.repo+'/task/';

    	$scope.tasks=[
    		{
    			name:"Model",
    			tag:"T1",
    			developer:"Mohamed",
    			priority:4,
    			commits:baseUrl+"T1"
    		},
    		{
    			name:"View",
    			tag:"T2",
    			developer:"Yazid",
    			priority:3,
    			commits:baseUrl+"T2"
    		},
    		{
    			name:"BD",
    			tag:"T3",
    			developer:"Pierre",
    			priority:2,
    			commits:baseUrl+"T3"
    		}
    	];

    
    	$scope.newTask=function(){
    		$scope.tasks.push($scope.task);
    		$scope.task=[];
    	}
  });
