'use strict';

/**
 * @ngdoc service
 * @name commitMonitorApp.repoFactory
 * @description
 * # repoFactory
 * Factory in the commitMonitorApp.
 */
angular.module('commitMonitorApp')
  .factory('repoFactory', function ($http) {
    var baseUrl="https://api.github.com/repos/";


    // Public API here
    return {
      getInfo: function(user, repo){
      	return $http.get(baseUrl+user+'/'+repo);
      },
      getContributors: function (user, repo) {
        return $http.get(baseUrl+user+'/'+repo+'/contributors');
      },
      getLanguages:function(user, repo){
      	return $http.get(baseUrl+user+'/'+repo+'/languages');
      },
      getContents:function(user, repo){
      	return $http.get(baseUrl+user+'/'+repo+'/contents');
      },
      getCommits:function(user, repo){
      	return $http.get(baseUrl+user+'/'+repo+'/commits');
      }
    };
  });