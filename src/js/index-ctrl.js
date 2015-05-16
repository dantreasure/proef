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


