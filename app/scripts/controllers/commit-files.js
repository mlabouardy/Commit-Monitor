'use strict';

/**
 * @ngdoc function
 * @name commitMonitorApp.controller:CommitFilesCtrl
 * @description
 * # CommitFilesCtrl
 * Controller of the commitMonitorApp
 */
angular.module('commitMonitorApp')
  .controller('CommitFilesCtrl', function ($scope, $http, $routeParams) {
  		var baseurl='https://api.github.com/repos/';
  		var url=baseurl+$routeParams.user+'/'+$routeParams.repo+"/git/trees/"+$routeParams.sha;
 		$http.get(url).success(function(files){
 			$scope.files=[];
 			for(var i=0;i<files.tree.length;i++){
 				var tmp=files.tree[i].mode;
 				var modeDiv;
 				if(tmp==100644)
 					modeDiv='<a class="btn btn-success btn-xs">Updated</a>';
 				else
 					modeDiv='<a class="btn btn-primary btn-xs">Inserted</a>';
 				$scope.files.push({
					name:files.tree[i].path,
					mode: modeDiv,
					size:files.tree[i].size
				});
 			}
 		});
    	
  });
