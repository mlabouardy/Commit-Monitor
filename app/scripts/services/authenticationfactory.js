'use strict';

/**
 * @ngdoc service
 * @name commitMonitorApp.authenticationFactory
 * @description
 * # authenticationFactory
 * Factory in the commitMonitorApp.
 */
 angular.module('commitMonitorApp')
 .factory('authenticationFactory', function ($http, $cookieStore) {

  return {
    login: function () {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $cookieStore.get('globals'); 
  }
};
});
