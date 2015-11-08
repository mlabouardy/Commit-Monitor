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
    'ngTouch',
    'base64',
    'ngCookies'
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
      .when('/repository/:user/:repo/commits/:sha', {
        templateUrl: 'views/commit-files.html',
        controller: 'CommitFilesCtrl'
      })
      .when('/repository-create', {
        templateUrl: 'views/repository-create.html',
        controller: 'RepositoryCreateCtrl'
      })
      .when('/tasks/:user/:repo', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/tasks/:user/:repo/task/:tag', {
        templateUrl: 'views/task-commits.html',
        controller: 'TaskCommitsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
