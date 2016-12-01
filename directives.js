weatherApp.directive('weatherReport', function(){
	return {
		restrict: 'AE',
		templateUrl: 'directives/weatherReport.html',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToDate: "&"
		}
	};
});

weatherApp.directive('moreInfo', function(){
	return {
		restrict: 'AE',
		templateUrl: 'directives/moreInfo.html',
		replace: true,
		scope: {
			weatherDay: "=",
			showMaxAndMin: "&"
		}
	};
});

weatherApp.directive('test', function(){
	return {
		restrict: "AE",
		replace: true,
		templateUrl:"directives/test.html",
		scope: {
			weatherDay: "="
		}
	}
});
