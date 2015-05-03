(function(window, document, undefined) {
'use strict';
var proef = angular.module('proef', ['ui.router']);

proef.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../partials/home.html",
      controller: "homeCtrl"
    })
    .state('approach', {
      url: "/approach",
      templateUrl: "../partials/approach.html",
      controller: "approachCtrl"
    })
    .state('about', {
      url: "/about",
      templateUrl: "../partials/about.html",
      controller: "aboutCtrl"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "../partials/contact.html",
      controller: "contactCtrl"
    })
}]);

proef.controller('aboutCtrl', ['$scope', function($scope) {
	$scope.message = 'this is the about page';
}]);

proef.controller('approachCtrl', ['$scope', function($scope) {
	$scope.message = 'this is the approach page';
}]);

proef.controller('contactCtrl', ['$scope', function($scope) {
  $scope.message = 'this is the contact page';
}]);

proef.controller('homeCtrl', ['$scope', function($scope) {
  $scope.message = 'this is the homiest page';

  // $scope.currentBackground = 1;

  // $scope.previousQuote = function(){
  // 	if ($scope.currentBackground !== 1){
  // 		$scope.currentBackground--;
  // 	}
  // };

  // $scope.nextQuote = function(){
  // 	if ($scope.currentBackground !== 5){
  // 		$scope.currentBackground++;
  // 	}
  // };

}]);

proef.controller('indexCtrl', ['$scope', function($scope) {
  $scope.mouseDirection = 'left';

  $scope.updateMouse = function(evt){
    var x = evt.x;
    var halfScreen = document.body.clientWidth/ 2;
    if (x < halfScreen){
      $scope.mouseDirection = 'left'
    } else{
      $scope.mouseDirection = 'right'
    }
  };

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

})(window, document);
