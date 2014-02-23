'use strict';

/*global App*/

App.controller('SearchCtrl', ['$scope', 'FireConn', '$filter', '$rootScope', '$cookies','$firebase','$routeParams', function ($scope, FireConn, $filter, $rootScope, $cookies,$firebase,$routeParams) {


	// set current user if it's been undefined
	if($rootScope.currentUser === undefined){
		$rootScope.currentUser ={
		'id': $cookies.id,
		'name': $cookies.name,
		'imgUrl': $cookies.imgUrl,
		};
	}


	$scope.searchKeywords = $routeParams.keywords;

	var db = new Firebase('https://bandmate.firebaseio.com');
	$scope.results = $firebase(db);

}]);