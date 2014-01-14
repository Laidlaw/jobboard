'use strict';

angular.module('jobboardApp')
  .controller('OrganizerCtrl', function ($scope, $http) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    $scope.url = 'jobs.json';
    $scope.jobs = [];

    $scope.fetchJobs = function() {
      $http.get($scope.url).then(function(result){
        $scope.jobs = result.data;
      });
    };
    $scope.fetchJobs();


  });
