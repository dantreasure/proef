proef.controller('indexCtrl', ['$scope', function($scope, $document) {

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
