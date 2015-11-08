'use strict';

/**
 * @ngdoc overview
 * @name commitMonitorApp
 * @description
 * # commitMonitorApp
 *
 * Main module of the application.
 */
angular
  .module('commitMonitorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/repository', {
        templateUrl: 'views/repository.html',
        controller: 'RepositoryCtrl'
      })
      .when('/repository/:user/:repo', {
        templateUrl: 'views/repository-info.html',
        controller: 'RepositoryInfoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
