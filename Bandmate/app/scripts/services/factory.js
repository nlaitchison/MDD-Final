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

			var url = 'https://bandmate.firebaseIO.com/' + id,
				ref = new Firebase(url);

			return $firebase(ref);

		};
	}]);