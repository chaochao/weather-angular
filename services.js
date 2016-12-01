
weatherApp.service('cityService', function(){
	this.city ="new york";
});

weatherApp.service('weatherService', ['$resource', function($resource){

	this.getWeather = function(city, day, YOURAPIKEY){
		var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',{callback: 'JSON_CALLBACK'},{get: {method: 'JSONP'}});
		return weatherAPI.get({ units: 'metric', q: city, cnt: day, appid: YOURAPIKEY });
	};

}]);

// weatherApp.factory('FilmFactory', ['$http', function($http){

//     return {
//       getAllFilms:getAllFilms,
//       getOneWeather: function(city, day, YOURAPIKEY){
//         return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&cnt='+day+'&appid='+YOURAPIKEY)
//       }
//     }

// }]);

// function  getAllFilms(){
//   return "getAllFilms";
// }