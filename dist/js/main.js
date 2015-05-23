(function(window, document, undefined) {
'use strict';
var proef = angular.module('proef', ['ui.router', 'angularSlideables']);

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

proef.controller('approachCtrl', ['$scope','$timeout', function($scope, $timeout) {
	$scope.articles = {
		whatWeDo: 'closed',
		howWeWork: 'closed',
		whatWeOffer: 'closed',
		aesthetics: 'closed',
		clients: 'closed'
	};

	$scope.footNotes = {
		market: false,
		technical: false,
		cultural: false
	}

	$scope.toggleFootnote = function(footNote){
		$scope.footNotes[footNote] = !$scope.footNotes[footNote]
	}

	$scope.activeArticle = function(article){
		if($scope.articles[article] === 'open' || $scope.articles[article] === 'transition'){
			return true
		} else if ($scope.articles[article]=== 'closed'){
			return false
		}
	}

	$scope.articleToggle = function(article){
		var setToOpen = function(){
			$scope.articles[article] = 'open';
		};

		var setToClose = function(){
			$scope.articles[article] = 'closed';
		}

		if($scope.articles[article] === 'closed'){
			$scope.articles[article] = 'transition';
			$timeout(setToOpen, 1000);
		} else{
			$scope.articles[article] = 'transition';
			$timeout(setToClose, 1000);
		}
	}
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

angular.module('angularSlideables', [])
.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target, content;

            attrs.expanded = false;

            element.bind('click', function() {
                if (!target) target = document.querySelector(attrs.slideToggle);
                if (!content) content = target.querySelector('.slideable_content');

                if(!attrs.expanded) {
                    content.style.border = '1px solid black';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});

})(window, document);
