'use strict';

/**
 * @ngdoc service
 * @name commitMonitorApp.userFactory
 * @description
 * # userFactory
 * Factory in the commitMonitorApp.
 */
angular.module('commitMonitorApp')
  .factory('userFactory', function ($http) {
     var baseUrl="https://api.github.com/users/";


    // Public API here
    return {
      getFollowers: function(user){
        return $http.get(baseUrl+user+'/followers');
      },
      getFollowing: function (user) {
        return $http.get(baseUrl+user+'/following');
      }
    };
  });
