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

App.run(['$firebaseSimpleLogin', '$rootScope', 'FireConn', function($firebaseSimpleLogin, $rootScope, FireConn){

  //reference to firebase
  var db = new Firebase('https://bandmate.firebaseio.com');
  //sets up simple login
  $rootScope.loginObject = $firebaseSimpleLogin(db);

  // login function
  $rootScope.loginUser = function(){
    $rootScope.loginObject.$login('twitter')
      .then(function(user){

        console.log(user);

        $rootScope.currentUser = {
          'id' : user.provider + user.id,
          'name' : user.name,
          'location' : user.location,
          'imgUrl' : user.profile_image_url
        }

        console.log('meow', $rootScope.currentUser);

        checkUser();

      },function(error){

        console.log(error, 'user auth failed');

      });
  };

  // check user
  function checkUser(){

     var allUsers = [];
     var exist = true;

    // gets all usernames from Firebase
    db.on('child_added', function(snapshot){

      allUsers.push(snapshot.val());

    });

    for( var i=0; i<allUsers.length; i++){
      if(allUsers[i].id === $rootScope.currentUser.id){
        exist = true;
        $rootScope.currentUser === allUsers[i];
      }else{
        exist = false;
      }
    }

    if(!exist){
      FireConn.$add($rootScope.currentUser);
    }

    console.log(exist);

  };

}]);
