'use strict';

angular.module('jobboardApp')
  .controller('MainCtrl', function ($scope, $http) {
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
