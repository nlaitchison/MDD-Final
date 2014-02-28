'use strict';

/*global App*/

App.controller('LogoutCtrl',['$firebaseSimpleLogin', '$rootScope', '$window', '$cookies', function($firebaseSimpleLogin, $rootScope, $window, $cookies){

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
