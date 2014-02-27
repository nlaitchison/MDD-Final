'use strict';

/*global App*/

App.controller('StudioCtrl', ['$scope', 'FireConn' ,'$routeParams', '$rootScope', '$firebase', function ($scope, FireConn, $routeParams, $rootScope, $firebase) {

	console.log('user studio', $routeParams.id );
	var userStudio = new Firebase('https://bandmate.firebaseio.com/' + $routeParams.id + '/studio');

	$scope.studioUsers = $firebase(userStudio);

	// $scope.addToStudio = function(user){
	// 	// console.log('add', user);

	// 	var selectedUser = new Firebase('https://bandmate.firebaseio.com/' + $rootScope.currentUser.id + '/studio/' + user.id);
	// 	$scope.usersSelected = $firebase(selectedUser);
	// 	// var selectedUser = $scope.studioUsers.$child(user.id);

	// 	console.log('user.id', user.id);
	// 	console.log('selected user', $scope.usersSelected);

	// 	// if(selectedUser != null){
	// 	// 	$scope.studioUsers.$remove(user.uid);
	// 	// }else{
	// 		// $scope.studioUsers.$child(user.id).$set(user);
	// 		$scope.studioUsers.$add(user);

	// 	// }

	// };

}]);
