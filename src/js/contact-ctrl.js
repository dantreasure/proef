proef.controller('contactCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  	'use strict';
	$scope.sections = {
		contact: 'closed',
		newsletter: 'closed'
	};

	$scope.activeSection = function(section){
		if($scope.sections[section] === 'open' || $scope.sections[section] === 'transition'){
			return true;
		} else if ($scope.sections[section]=== 'closed'){
			return false;
		}
	};

	$scope.sectionToggle = function(section){
		var setToOpen = function(){
			$scope.sections[section] = 'open';
		};

		var setToClose = function(){
			$scope.sections[section] = 'closed';
		};

		for(var key in $scope[section]){
			$scope[section][key] = false;
		}

		if($scope.sections[section] === 'closed'){
			$scope.sections[section] = 'transition';
			$timeout(setToOpen, 1000);
		} else{
			$scope.sections[section] = 'transition';
			$timeout(setToClose, 1000);
		}

	};

}]);
