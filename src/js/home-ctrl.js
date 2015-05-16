proef.controller('homeCtrl', ['$scope', 'background','$timeout', function($scope, background, $timeout) {
  $scope.messages = [
    '-(n) dutch: to try out, test, experiment.',
    'Each answer is measured, each project is its own',
    'this is the third quote',
    'this is the fourth quote',
    'this is the fifth quote'
  ]
  $scope.message = 0;

  $scope.previousQuote = function(){
    if ($scope.message !== 0){
      $scope.message--;
    }
    background.decrementBackground();
  };

  $scope.nextQuote = function(){
    if ($scope.message !== 4){
      $scope.message++;
    }
    background.incrementBackground();
  };

  var sweep = function(){
    var italicize = 'dutch';

    var rgx = new RegExp('\\b('+italicize+')\\b', 'ig');

    jQuery('.quote').contents().filter(function() {
        return this.nodeType === 3;
    }).each(function() {
        jQuery(this).replaceWith(jQuery(this).text().replace(rgx, '<span class="emphasize">$1</span>'));
    });
  };

  $timeout(sweep, 500);


}]);
