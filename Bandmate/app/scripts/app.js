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
  console.log($rootScope.loginObject);
}]);

App.filter('toArray', function () {
  'use strict';

  return function (obj) {
    if (!(obj instanceof Object)) {
      return obj;
    }

    return Object.keys(obj).filter(function(key){if(key.charAt(0) !== "$") {return key;}}).map(function (key) {
    return Object.defineProperty(obj[key], '$key', {__proto__: null, value: key});
    });
  };
});