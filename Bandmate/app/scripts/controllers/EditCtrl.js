'use strict';

/*global App*/
/*global Firebase*/

App.controller('EditCtrl', ['$scope', '$rootScope', 'FireConn', '$firebase', '$routeParams', '$cookies', function ($scope, $rootScope, FireConn, $firebase, $routeParams, $cookies) {

	// set current user if it's been undefined
	if($rootScope.currentUser === undefined){
		$rootScope.currentUser ={
		'id': $cookies.id,
		'name': $cookies.name,
		'imgUrl': $cookies.imgUrl,
		};
	}

	// var db = new Firebase('https://bandmate.firebaseio.com/');
	// $scope.db = $firebase(db);
	var userObj = new Firebase('https://bandmate.firebaseio.com/' + $routeParams.id);
	$scope.user = $firebase(userObj);

	$scope.save = function(user){

		$scope.user.$save();

	};

}]);

