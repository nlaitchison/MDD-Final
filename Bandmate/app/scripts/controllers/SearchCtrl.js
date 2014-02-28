'use strict';

/*global App*/

App.controller('SearchCtrl', ['$scope', 'FireConn' ,'$routeParams', '$rootScope', '$firebase', 'FireStudio', '$filter', function ($scope, FireConn, $routeParams, $rootScope, $firebase, FireStudio, $filter) {

	// users will be filtered in the view using the keywords
	// set the scope keywords using the routeparams
	$scope.searchKeywords = $routeParams.keywords;
	// set the results to the firebase users db
	$scope.results = FireConn;

}]);