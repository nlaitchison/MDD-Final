'use strict';

/*global App*/

App.controller('SearchCtrl', ['$scope', 'FireConn', '$window', '$filter', '$rootScope', function ($scope, FireConn, $window, $filter, $rootScope) {

	var keywords = '';
	var matches = [];

	$scope.search = function(e){
		console.log('search', $scope.searchKeywords);

		keywords = $scope.searchKeywords;

		results();
	};

	var db = new Firebase('https://bandmate.firebaseio.com');

	function results(){

		var allUsers = [];
		matches = [];

		// gets all usernames from Firebase
	    db.on('child_added', function(snapshot){

	      // allUsers.push(snapshot.val());

		  if(snapshot.val().skills === keywords){

		    console.log('match');
		    matches.push(snapshot.val());

		  }

	    });

	    $rootScope.results = matches;
	    console.log($scope.results);
	    $window.location.href = '#/search';

	};

}]);