(function(window, document, undefined) {
'use strict';
var proef = angular.module('proef', ['ui.router']);

proef.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      abstract: true,
      templateUrl: "../partials/home.html",
      controller: "homeCtrl"
    })
      .state('home.1',{
        url: '',
        controller: "homeCtrl",
        templateUrl: "../partials/home/1.html"
      })
      .state('home.2',{
        url: '',
        controller: "homeCtrl",
        templateUrl: "../partials/home/2.html"
      })
      .state('home.3',{
        url: '',
        controller: "homeCtrl",
        templateUrl: "../partials/home/3.html"
      })
      .state('home.4',{
        url: '',
        controller: "homeCtrl",
        templateUrl: "../partials/home/4.html"
      })
      .state('home.5',{
        url: '',
        controller: "homeCtrl",
        templateUrl: "../partials/home/5.html"
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

proef.run(["$rootScope", "$state", function($rootScope, $state){
  $rootScope.$state = $state;
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

proef.controller('homeCtrl', ['$scope','$state', function($scope, $state) {
  $scope.quote = 1;

  $scope.previousQuote = function(){
    if ($scope.quote !== 1){
      $scope.quote--;
    }
    $state.go('home.'+$scope.quote)
  };

  $scope.nextQuote = function(){
    if ($scope.quote !== 5){
      $scope.quote++;
    }
    $state.go('home.'+$scope.quote)
  };

}]);

proef.controller('indexCtrl', ['$scope', 'background', '$location', function($scope, background) {
  $scope.mouseDirection = 'left';
  $scope.toRotate = false;

  $scope.rotate = function () {
    if($scope.toRotate === false){
      $scope.toRotate = true;
    } else{
      $scope.toRotate = false;
    }

  }

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
