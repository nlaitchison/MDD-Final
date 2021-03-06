'use strict';

/* global Firebase */
angular.module('bandmateApp')
	.factory('FireConn', ['$firebase',function ($firebase) {

		var url = 'https://bandmate.firebaseIO.com/',
			ref = new Firebase(url);

		return $firebase(ref);
	}])

	.factory('FireUser', ['$firebase',function ($firebase) {

		return function(id){

			//sets the firebase to a specific user
			var url = 'https://bandmate.firebaseIO.com/' + id,
				ref = new Firebase(url);

			return $firebase(ref);

		};
	}])

	.factory('FireStudio', ['$firebase',function ($firebase) {

		return function(userId){

			//sets the firebase to a specific user studio
			var url = 'https://bandmate.firebaseIO.com/' + userId + '/studio/',
				ref = new Firebase(url);

			return $firebase(ref);

		};
	}]);