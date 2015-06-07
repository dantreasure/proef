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

	$scope.locations = {
		sanfrancisco: 'closed',
		losangeles: 'closed',
		newyork: 'closed',
		saltlake: 'closed'
	};

	$scope.leadershipOpen = false;
	$scope.locationsOpen = false;

	$scope.toggleLeadership = function(){
		$scope.leadershipOpen ? $scope.leadershipOpen = false : $scope.leadershipOpen = true;
		$scope.articleToggle('leadership')
	}

	$scope.toggleLocation = function(){
		$scope.locationsOpen ? $scope.locationsOpen = false : $scope.locationsOpen = true;
		$scope.articleToggle('locations')
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

	$scope.locationToggle = function(location){
		var setToOpen = function(){
			$scope.locations[location] = 'open';
		};

		var setToClose = function(){
			$scope.locations[location] = 'closed';
		};

		if($scope.locations[location] === 'closed'){
			$scope.locations[location] = 'transition';
			$timeout(setToOpen, 1000);
		} else{
			$scope.locations[location] = 'transition';
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

	$scope.activeLocation = function(location){
		if($scope.locations[location] === 'open' || $scope.locations[location] === 'transition'){
			return true;
		} else if ($scope.locations[location]=== 'closed'){
			return false;
		}
	};

}]);
