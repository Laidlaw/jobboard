'use strict';

var app = angular.module('jobboardApp');

app.controller('SeekerCtrl', function ($scope, $http) {
  // $scope.awesomeThings = [
  //   'HTML5 Boilerplate',
  //   'AngularJS',
  //   'Karma'
  // ];

  $scope.url = 'content/jobs.json';
  $scope.jobs = [];

  $scope.fetchJobs = function() {
    $http.get($scope.url).then(function(result){
      $scope.jobs = result.data;
    });
  };
  $scope.fetchJobs();
});



app.controller('SearchCtrl', function ($scope, $http) {

  // $scope.joblist = Joblist;

  $scope.url = 'content/jobs.json';
  $scope.jobs = [];


  $scope.fetchJobs = function() {
    $http.get($scope.url).then(function(result){
      $scope.jobs = result.data;
    });
  };

  $scope.fetchJobs();
$('#job-titles').selectize({
      maxItems: null,
      valueField: 'id',
      labelField: 'title',
      searchField: 'title',
      options: $scope.jobs,
      create: false
    });


});
