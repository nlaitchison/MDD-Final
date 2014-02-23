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

		// var addedUser = {
		// 	'age' : user.age,
		// 	'email' : user.email,
		// 	'facebook' : user.facebook,
		// 	'genre' : user.genre,
		// 	'id' : user.id,
		// 	'imgUrl' : user.imgUrl,
		// 	'location' : user.location,
		// 	'name' : user.name,
		// 	'phone' : user.phone,
		// 	'skills' : user.skills,
		// 	'soundcloud' : user.soundcloud,
		// 	'twitter' : user.twitter,
		// 	'youtube' : user.youtube
		// };

		console.log('add', user);

		$scope.studioUsers.$add(user);
		// userStudio.child(addedUser.id).set(addedUser);
		// userStudio.child(user);

	}

}]);
