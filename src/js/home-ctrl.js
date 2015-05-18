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
