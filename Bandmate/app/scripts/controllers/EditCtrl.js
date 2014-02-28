'use strict';

/*global App*/
/*global Firebase*/

App.controller('EditCtrl', ['$scope','$firebase', '$routeParams', function ($scope, $firebase, $routeParams) {

	var userObj = new Firebase('https://bandmate.firebaseio.com/' + $routeParams.id);
	$scope.user = $firebase(userObj);

	$scope.save = function(user){

		$scope.user.$save();

	};

}]);

