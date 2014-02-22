'use strict';

/*global App*/

App.controller('LogoutCtrl',['$firebaseSimpleLogin', '$rootScope', '$window', '$cookies', function($firebaseSimpleLogin, $rootScope, $window, $cookies){

  // logout function
  $rootScope.logoutUser = function(){
    $rootScope.loginObject.$logout();
    $rootScope.currentUser = '';
    $window.location.href = '#/';
  };

}]);
