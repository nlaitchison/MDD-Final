'use strict';

/*global App*/

App.controller('StudioCtrl', ['$scope', '$rootScope', 'FireConn', '$cookies', function ($scope, $rootScope, FireConn, $cookies) {


	// set current user if it's been undefined
	if($rootScope.currentUser === undefined){
		$rootScope.currentUser ={
		'id': $cookies.id,
		'name': $cookies.name,
		'imgUrl': $cookies.imgUrl,
		};
	}

	$scope.users = FireConn;

	$scope.addToStudio = function(userId){

		var userStudio = new Firebase('https://bandmate.firebaseio.com/' + $rootScope.currentUser.id + '/studio');
		userStudio.push(userId);
		console.log('add', userId);
	}

	// console.log('get current user', $rootScope.loginObject);
	// var loginObjct = $rootScope.loginObject;
	// console.log(loginObjct.user)

	// var userId = $rootScope.loginObject.user.provider + $rootScope.loginObject.user.id;

	// console.log(userId);
}]);
