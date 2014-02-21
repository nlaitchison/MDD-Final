'use strict';

/*global Firebase*/

var App =angular.module('bandmateApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/userList.tpl',
        controller: 'StudioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.run(['$firebaseSimpleLogin', '$rootScope', function($firebaseSimpleLogin, $rootScope){

  //reference to firebase
  var db = new Firebase('https://bandmate.firebaseio.com');
  //sets up simple login
  $rootScope.loginObject = $firebaseSimpleLogin(db);

}]);