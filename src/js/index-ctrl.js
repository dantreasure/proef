proef.controller('indexCtrl', ['$scope', 'background', '$location', function($scope, background, $state) {
  $scope.mouseDirection = 'left';

  $scope.state = $state;

  console.log($scope.state.current)

  $scope.activeNav = 'home'

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


