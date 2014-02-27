'use strict';

var App = angular.module('bandmateApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

App.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/login.tpl',
      controller: 'LoginCtrl'
    })
    .when('/studio', {
      templateUrl: 'views/studio.tpl',
      controller: 'StudioCtrl'
    })
    .when('/edit/:id', {
      templateUrl: 'views/edit.tpl',
      controller: 'EditCtrl'
    })
    .when('/search/:keywords', {
      templateUrl: 'views/search.tpl',
      controller: 'SearchCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

App.run(['$firebaseSimpleLogin', '$rootScope','$location', function($firebaseSimpleLogin, $rootScope,$location){

    //reference to firebase
    var db = new Firebase('https://bandmate.firebaseio.com');
    //sets up simple login
    $rootScope.loginObject = $firebaseSimpleLogin(db);

    console.log($rootScope.loginObject.$getCurrentUser());

    $rootScope.search = function(e){

      $location.path('/search/'+$rootScope.searchKeywords);
    };

}]);

App.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind('keydown keypress', function(event) {
      if(event.which === 13) {
        scope.$apply(function(){
          scope.$eval(attrs.ngEnter, {'event': event});
        });
        event.preventDefault();
      }
    });
  };
});

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

App.filter('removeStudio', function()
{
  return function(array)
  {
    for (var i = array.length - 1; i >= 0; i--) {
      array[i].studio = null;
    }
    return array;
  }
});

