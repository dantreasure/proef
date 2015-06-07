proef.controller('aboutCtrl', ['$scope','$timeout', function($scope, $timeout) {
	'use strict';
	$scope.articles = {
		whoWeAre: 'closed',
		leadership: 'closed',
		locations: 'closed',
		news: 'closed'
	};
	$scope.leaders = {
		marieke: 'closed',
		julie: 'closed',
		sydel: 'closed'
	};

	$scope.leadershipOpen = false;

	$scope.toggleLeadership = function(){
		$scope.leadershipOpen ? $scope.leadershipOpen = false : $scope.leadershipOpen = true;
		$scope.articleToggle('leadership')
	}

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
	$scope.leaderToggle = function(leader){
		var setToOpen = function(){
			$scope.leaders[leader] = 'open';
		};

		var setToClose = function(){
			$scope.leaders[leader] = 'closed';
		};

		if($scope.leaders[leader] === 'closed'){
			$scope.leaders[leader] = 'transition';
			$timeout(setToOpen, 1000);
		} else{
			$scope.leaders[leader] = 'transition';
			$timeout(setToClose, 1000);
		}
	};
	$scope.activeLeader = function(leader){
		if($scope.leaders[leader] === 'open' || $scope.leaders[leader] === 'transition'){
			return true;
		} else if ($scope.leaders[leader]=== 'closed'){
			return false;
		}
	};
}]);
