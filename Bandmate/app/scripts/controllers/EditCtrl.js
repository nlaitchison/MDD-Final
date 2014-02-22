'use strict';

/*global App*/

App.controller('EditCtrl', ['$scope', '$rootScope', 'FireConn', function ($scope, $rootScope, FireConn) {

	$scope.user = $rootScope.currentUser;

	console.log($rootScope.currentUser);

}]);

