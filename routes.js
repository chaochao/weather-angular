weatherApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController as main'
	})
	.when('/forcast', {
		templateUrl: 'pages/forcast.html',
		controller: 'forcastController'
	})
	.when('/forcast/:days', {
		templateUrl: 'pages/forcast.html',
		controller: 'forcastController'
	});
});
