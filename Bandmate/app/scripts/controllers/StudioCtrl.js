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

	var db = new Firebase('https://bandmate.firebaseio.com/');
	var userStudio = new Firebase('https://bandmate.firebaseio.com/' + $rootScope.currentUser.id + '/studio');

	$scope.studioUsers = $firebase(userStudio);

	$scope.addToStudio = function(user){
		console.log('add', user);

		// var user = $scope.studioUsers.$child(user.uid);

		for(var i=0; i<$scope.studioUsers.length; i++){
			if($scope.studioUsers[i].id != user.id){
				$scope.studioUsers.$add(user);
			}else{
				$scope.studioUsers.$remove($scope.studioUsers[i]);
			}
		}

	};

}]);
