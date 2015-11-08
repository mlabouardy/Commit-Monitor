'use strict';

/**
 * @ngdoc service
 * @name commitMonitorApp.userFactory
 * @description
 * # userFactory
 * Factory in the commitMonitorApp.
 */
angular.module('commitMonitorApp')
  .factory('userFactory', function ($http, authenticationFactory) {
     var baseUrl="https://api.github.com/users/";
     authenticationFactory.login();
    
    return {
      getFollowers: function(user){
        return $http.get(baseUrl+user+'/followers');
      },
      getFollowing: function (user) {
        return $http.get(baseUrl+user+'/following');
      }
    };
  });
