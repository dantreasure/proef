(function(window, document, undefined) {
'use strict';
var proef = angular.module('proef', ['ui.router']);

proef.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
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

    $locationProvider.html5Mode({enabled: true, requireBase: false})
}]);

proef.controller('aboutCtrl', ['$scope', function($scope) {
	$scope.message = 'this is the about page';
}]);

proef.controller('approachCtrl', ['$scope', function($scope) {
	$scope.message = 'this is the approach page';
}]);

proef.factory('background', function(){
	var factory = {};

	var backgroundId = 1;

	factory.getBackground = function(){
		return backgroundId;
	}

	factory.decrementBackground = function(){
		if (backgroundId !== 1){
  		backgroundId--;
  	}
	}

	factory.incrementBackground = function(){
		if (backgroundId !== 5){
  		backgroundId++;
  	}
	}

	return factory
});

proef.controller('contactCtrl', ['$scope', function($scope) {
  $scope.message = 'this is the contact page';
}]);

proef.controller('homeCtrl', ['$scope', 'background', function($scope, background) {
  $scope.messages = [
    '-(n) dutch: to try out, test, experiment',
    'Each answer is measured, each project is its own',
    'this is the third quote',
    'this is the fourth quote',
    'this is the fifth quote'
  ]
  $scope.message = 0;

  $scope.previousQuote = function(){
    if ($scope.message !== 0){
      $scope.message--;
    }
    background.decrementBackground();
  };

  $scope.nextQuote = function(){
    if ($scope.message !== 4){
      $scope.message++;
    }
    background.incrementBackground();
  };

}]);

proef.controller('indexCtrl', ['$scope', 'background', '$location', function($scope, background) {
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

  $scope.currentBackground = function(){
    return background.getBackground();
  }

}]);

})(window, document);
