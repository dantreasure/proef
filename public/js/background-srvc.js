proef.factory('background', function(){
	var factory = {};

	var backgroundId = 1;

	factory.getBackground = function(){
		return backgroundId;
	}

	factory.decrementBackground = function(){
		if (backgroundId !== 1){
  		backgroundId--;
  	}
	}

	factory.incrementBackground = function(){
		if (backgroundId !== 5){
  		backgroundId++;
  	}
	}

	return factory
});
