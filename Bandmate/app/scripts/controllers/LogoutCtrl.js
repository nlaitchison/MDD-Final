'use strict';

/*global App*/

App.controller('LogoutCtrl',['$firebaseSimpleLogin', '$rootScope', '$window', function($firebaseSimpleLogin, $rootScope, $window){

  // logout function
  $rootScope.logoutUser = function(){
    $rootScope.loginObject.$logout();
    $rootScope.currentUser = '';
    $window.location.href = '#/';
  };

}]);
