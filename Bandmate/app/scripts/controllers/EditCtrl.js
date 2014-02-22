'use strict';

/*global App*/
/*global Firebase*/

App.controller('EditCtrl', ['$scope', '$rootScope', 'FireConn', '$firebase', '$routeParams', function ($scope, $rootScope, FireConn, $firebase, $routeParams) {

	// $scope.user = $rootScope.currentUser;

	// console.log($rootScope.currentUser);

	var db = new Firebase('https://bandmate.firebaseio.com/' + $routeParams.id);
	$scope.user = $firebase(db);

	$scope.save = function(){

		if($scope.user.name !== null){
			db.update({'name' : $scope.user.name});
		}
		if($scope.user.age !== null){
			db.update({'age' : $scope.user.age});
		}
		if($scope.user.location !== null){
			db.update({'location' : $scope.user.location});
		}
		if($scope.user.email !== null){
			db.update({'email' : $scope.user.email});
		}
		if($scope.user.phone !== null){
			db.update({'phone' : $scope.user.phone});
		}
		if($scope.user.skills !== null){
			db.update({'skills' : $scope.user.skills});
		}
		if($scope.user.genre !== null){
			db.update({'genre' : $scope.user.genre});
		}
		if($scope.user.facebook !== null){
			db.update({'facebook' : $scope.user.facebook});
		}
		if($scope.user.twitter !== null){
			db.update({'twitter' : $scope.user.twitter});
		}
		if($scope.user.soundcloud !== null){
			db.update({'soundcloud' : $scope.user.soundcloud});
		}
		if($scope.user.youtube !== null){
			db.update({'youtube' : $scope.user.youtube});
		}


		// db.update({
		// 	'name' : $scope.user.name,
		// 	'age' : $scope.user.age,
		// 	'location' : $scope.user.location,
		// 	'email' : $scope.user.email,
		// 	'phone' : $scope.user.phone,
		// 	'skills' : $scope.user.skills,
		// 	'genre' : $scope.user.genre,
		// 	'facebook' :  $scope.user.facebook,
		// 	'twitter' : $scope.user.twitter,
		// 	'soundcloud' : $scope.user.soundcloud,
		// 	'youtube' : $scope.user.youtube
		// });

		console.log('saved');
	};

}]);

