'use strict';

/**
 * @ngdoc service
 * @name commitMonitorApp.authenticationFactory
 * @description
 * # authenticationFactory
 * Factory in the commitMonitorApp.
 */
 angular.module('commitMonitorApp')
 .factory('authenticationFactory', function ($http, $cookieStore, $base64) {

  return {
    login: function () {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $cookieStore.get('globals'); 
  	},
  	setCredentials:function(username, password){
  		var authdata = $base64.encode(username + ':' + password);
  		$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; 
  	}
};
});
