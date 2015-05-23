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
