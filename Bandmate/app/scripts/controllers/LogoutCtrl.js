'use strict';

/*global App*/

App.controller('LogoutCtrl',['$firebaseSimpleLogin', '$rootScope', '$window', function($firebaseSimpleLogin, $rootScope, $window){

  // logout function
  $rootScope.logoutUser = function(){
  	// logout the user
    $rootScope.loginObject.$logout();
    // set the currentUser to nothing
    $rootScope.currentUser = '';
    // take user to landing page
    $window.location.href = '#/';
  };

}]);
