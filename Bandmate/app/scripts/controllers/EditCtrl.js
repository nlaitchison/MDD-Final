'use strict';

/*global App*/
/*global Firebase*/

App.controller('EditCtrl', ['$scope', 'FireConn', '$firebase', '$routeParams', function ($scope, FireConn, $firebase, $routeParams) {

	var userObj = new Firebase('https://bandmate.firebaseio.com/' + $routeParams.id);
	$scope.user = $firebase(userObj);

	$scope.save = function(user){

		$scope.user.$save();

	};

}]);

