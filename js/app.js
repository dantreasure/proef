var proef = angular.module('proef', ['ui.router']);

proef.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../views/home.html"
    })
    .state('approach', {
      url: "/approach",
      templateUrl: "../views/approach.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "../views/about.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "../views/contact.html"
    })
});

proef.controller('mainCtrl', ['$scope', function($scope) {
  $scope.currentBackground = 1;

  $scope.previousQuote = function(){
  	if ($scope.currentBackground !== 1){
  		$scope.currentBackground--;
  	}
  };

  $scope.nextQuote = function(){
  	if ($scope.currentBackground !== 5){
  		$scope.currentBackground++;
  	}
  };

}]);
