'use strict';

/*global App*/

App.controller('StudioCtrl', ['$scope', '$rootScope', 'FireConn', '$cookies', '$filter','$firebase', function ($scope, $rootScope, FireConn, $cookies, $filter,$firebase) {

	// set current user if it's been undefined
	if($rootScope.currentUser === undefined){
		$rootScope.currentUser ={
		'id': $cookies.id,
		'name': $cookies.name,
		'imgUrl': $cookies.imgUrl,
		};
	}

	var userStudio = new Firebase('https://bandmate.firebaseio.com/' + $rootScope.currentUser.id + '/studio');

	$scope.studioUsers = $firebase(userStudio);

	$scope.addToStudio = function(user){
		// console.log('add', user);

		var selectedUser = new Firebase('https://bandmate.firebaseio.com/' + $rootScope.currentUser.id + '/studio/' + user.id);
		$scope.usersSelected = $firebase(selectedUser);
		// var selectedUser = $scope.studioUsers.$child(user.id);

		console.log('user.id', user.id);
		console.log('selected user', $scope.usersSelected);

		// if(selectedUser != null){
		// 	$scope.studioUsers.$remove(user.uid);
		// }else{
			// $scope.studioUsers.$child(user.id).$set(user);
			$scope.studioUsers.$add(user);

		// }

	};

}]);
