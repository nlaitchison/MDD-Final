'use strict';

/*global App*/

App.controller('StudioCtrl', ['$scope','$routeParams', '$firebase', function ($scope, $routeParams, $firebase) {

	// reference to the current user's studio in firebae
	var userStudio = new Firebase('https://bandmate.firebaseio.com/' + $routeParams.id + '/studio');
	// set the scope
	$scope.studioUsers = $firebase(userStudio);

	$scope.addToStudio = function(user){

		// if the user is already in the current user's studio
		if($scope.studioUsers[user.id] != null){
			// remove the user from the studio
			$scope.studioUsers.$remove(user.id);
		}else{
			// else, create a user in the scope
			$scope.studioUsers[user.id] = user;
			// then save it the the current user's studio
			$scope.studioUsers.$save(user.id);
		}

	};

}]);
