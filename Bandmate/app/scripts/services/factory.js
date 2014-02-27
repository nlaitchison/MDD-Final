'use strict';

/* global Firebase */
angular.module('bandmateApp')
	.factory('FireConn', ['$firebase',function ($firebase) {

		var url = 'https://bandmate.firebaseIO.com/',
			ref = new Firebase(url);

		return $firebase(ref);
	}]);