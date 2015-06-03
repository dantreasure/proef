proef.controller('aboutCtrl', ['$scope','$timeout', function($scope, $timeout) {
	'use strict';
	$scope.articles = {
		whoWeAre: 'closed',
		leadership: 'closed',
		locations: 'closed',
		news: 'closed'
	};

	$scope.activeArticle = function(article){
		if($scope.articles[article] === 'open' || $scope.articles[article] === 'transition'){
			return true;
		} else if ($scope.articles[article]=== 'closed'){
			return false;
		}
	};

	$scope.articleToggle = function(article){
		var setToOpen = function(){
			$scope.articles[article] = 'open';
		};

		var setToClose = function(){
			$scope.articles[article] = 'closed';
		};

		if($scope.articles[article] === 'closed'){
			$scope.articles[article] = 'transition';
			$timeout(setToOpen, 1000);
		} else{
			$scope.articles[article] = 'transition';
			$timeout(setToClose, 1000);
		}

	};
}]);
