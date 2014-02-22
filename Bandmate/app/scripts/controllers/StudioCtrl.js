'use strict';

/*global App*/

App.controller('StudioCtrl', ['$scope', '$rootScope', 'FireConn', function ($scope, $rootScope, FireConn) {

	$scope.users = FireConn;
	console.log($scope.users);

	// console.log('get current user', $rootScope.loginObject);
	// var loginObjct = $rootScope.loginObject;
	// console.log(loginObjct.user)

	// var userId = $rootScope.loginObject.user.provider + $rootScope.loginObject.user.id;

	// console.log(userId);
}]);
