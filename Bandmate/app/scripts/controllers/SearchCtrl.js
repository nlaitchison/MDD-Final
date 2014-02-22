'use strict';

/*global App*/

App.controller('SearchCtrl', ['$scope', 'FireConn', '$window', function ($scope, FireConn, $window) {

	var keywords = '';

	$scope.search = function(e){
		console.log('search', $scope.searchKeywords);

		keywords = $scope.searchKeywords;

		$window.location.href = '#/search';
	};

	var db = new Firebase('https://bandmate.firebaseio.com');

	function results(){

		var allUsers = [];
		var matches = [];

		// gets all usernames from Firebase
	    db.on('child_added', function(snapshot){

	      allUsers.push(snapshot.val());

	    });

	    for( var i=0; i<allUsers.length; i++){
	      if(allUsers[i].id === $rootScope.currentUser.id){

	        exist = true;
	        $rootScope.currentUser = allUsers[i];

	      }else{

	        exist = false;

	      }
	    }
	};

}]);