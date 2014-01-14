'use strict';

angular.module('jobboardApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/seeker/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/search', {
        templateUrl: 'views/seeker/search.html',
        controller: 'SignupCtrl'
      })
      .when('/jobs', {
        templateUrl: 'views/jobs.html',
        controller: 'MainCtrl'
      })
      .when('/seeker', {
        templateUrl: 'views/seeker/dashboard.html',
        controller: 'SeekerCtrl'
      })
      .when('/provider', {
        templateUrl: 'views/main.html',
        controller: 'ProviderCtrl'
      })
      .when('/organizer', {
        templateUrl: 'views/main.html',
        controller: 'OrganizerCtrl'
      })
      .when('/event', {
        templateUrl: 'views/main.html',
        controller: 'EventCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
