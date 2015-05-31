proef.controller('approachCtrl', ['$scope','$timeout', function($scope, $timeout) {
	'use strict';
	$scope.articles = {
		whatWeDo: 'closed',
		howWeWork: 'closed',
		whatWeOffer: 'closed',
		aesthetics: 'closed',
		clients: 'closed'
	};

	$scope.whatWeDo = {
		market: false,
		technical: false,
		cultural: false
	};
	$scope.howWeWork = {
		dynamic: false,
		team: false,
		strategy: false
	};
	$scope.whatWeOffer = {
		style: false
	};

	$scope.toggleFootnote = function(section, footNote){
		if ($scope[section][footNote] === false){
			$scope[section][footNote] = true;
		} else{
			$scope[section][footNote] = false;
		}
	};

	$scope.footNoteOpen = function(section){
		for(var key in $scope[section]){
			if($scope[section][key] === true){
				return true;
			}
		}
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

		for(var key in $scope[article]){
			$scope[article][key] = false;
		}

		if($scope.articles[article] === 'closed'){
			$scope.articles[article] = 'transition';
			$timeout(setToOpen, 1000);
		} else{
			$scope.articles[article] = 'transition';
			$timeout(setToClose, 1000);
		}

	};
	var closeImage = function(){
		$scope.showImage = false;
	}
	$scope.showImage = false;
	$scope.launchImage = function(){
		console.log('launch')
		$scope.showImage = true;
		$timeout(closeImage, 3000);
	}

}]);
