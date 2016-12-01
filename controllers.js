
weatherApp.controller('mainController', ['$scope', 'cityService', '$location',function($scope, cityService, $location){
	// this is bind to scope
	$scope.city = cityService.city;
	// this is bind to controller 
	this.test ="pass it";
	$scope.$watch('city',function(){
		cityService.city = $scope.city;
	});
	
	$scope.submit= function(){
		$location.path('/forcast');
	}
}]);

weatherApp.controller('forcastController', ['$scope', 'cityService', '$routeParams', 'weatherService',function($scope, cityService, $routeParams, weatherService){
	var YOURAPIKEY = "2ef05f7094049cec7f814dfb90c3b57a"
	$scope.city = cityService.city;
	$scope.day = $routeParams.days || 2;
	$scope.weatherResult= weatherService.getWeather($scope.city, $scope.day, YOURAPIKEY);
  // put into a service

	$scope.convertToDate = function(dt){
		return new Date(dt *1000).toLocaleDateString();
	};
	$scope.showMaxAndMin = function(weatherDay){
		return weatherDay.temp.max + " and "+ weatherDay.temp.min;
	};
}]);

weatherApp.controller('pc', [ function(){
	this.message="parent";

}]);

weatherApp.controller('cc', [ function(){
	this.message="child";

}]);