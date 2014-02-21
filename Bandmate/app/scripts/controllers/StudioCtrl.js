'use strict';

/*global App*/

// angular.module('bandmateApp')
App.controller('StudioCtrl', ['$scope', '$rootScope', 'FireConn', function ($scope, $rootScope, FireConn) {

	$scope.users = FireConn;

	// console.log('get current user', $rootScope.loginObject);
	// var loginObjct = $rootScope.loginObject;
	// console.log(loginObjct.user)

	// var userId = $rootScope.loginObject.user.provider + $rootScope.loginObject.user.id;

	// console.log(userId);
}]);

// $scope.saveData = function(){
	// 	console.log('clicked');
	// 	FireConn.$add(users);
	// };
	// var users = {
	// // 		name: 'Rou Reynolds',
	// // 		age: 22,
	// // 		location: 'Orlando, Florida',
	// // 		email: 'rreynolds@gmail.com',
	// // 		phone: '1234567890',
	// // 		skills: 'Vocals, Guitar, Keyboard',
	// // 		genre: 'Post-Hardcore, Electronic, Alternative',
	// // 		facebook: 'example123',
	// // 		twitter: 'example123',
	// // 		soundcloud: 'example123',
	// // 		youtube: 'http://www.youtube.com/channel/example123',
	// // 		imgUrl: 'images/users/rou.png'
	// // 	// },
	// 		name: 'Jason Butler',
	// 		age: 22,
	// 		location: 'Orlando, Florida',
	// 		email: 'rreynolds@gmail.com',
	// 		phone: '1234567890',
	// 		skills: 'Vocals, Guitar, Keyboard',
	// 		genre: 'Post-Hardcore, Electronic, Alternative',
	// 		facebook: 'example123',
	// 		twitter: 'example123',
	// 		soundcloud: 'example123',
	// 		youtube: 'http://www.youtube.com/channel/example123',
	// 		imgUrl: 'images/users/jason.png'

	// };