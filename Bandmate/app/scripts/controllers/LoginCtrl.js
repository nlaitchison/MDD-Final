'use strict';

/*global App*/

App.controller('LoginCtrl', ['$scope', '$rootScope', 'FireConn', '$window', function ($scope, $rootScope, FireConn, $window) {

	$scope.loginUser = function(){
		$rootScope.loginObject.$login('twitter')
			.then(function(user){
				console.log(user);
			})
	}
}]);