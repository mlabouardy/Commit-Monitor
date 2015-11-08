'use strict';

/**
 * @ngdoc service
 * @name commitMonitorApp.authenticationFactory
 * @description
 * # authenticationFactory
 * Factory in the commitMonitorApp.
 */
angular.module('commitMonitorApp')
  .factory('authenticationFactory', function ($http, $base64) {
    
    return {
      setCredentials: function (username, password) {
         var authdata = $base64.encode(username + ':' + password);
        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
      }
    };
  });
