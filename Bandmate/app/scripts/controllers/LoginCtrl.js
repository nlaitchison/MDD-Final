'use strict';

/*global App*/
/*global Firebase*/
App.controller('LoginCtrl', ['$firebaseSimpleLogin', '$rootScope', 'FireConn', '$location', function($firebaseSimpleLogin, $rootScope, FireConn, $location){

  $rootScope.loginUser = function(){
    // login the user through twitter
    $rootScope.loginObject.$login('twitter')
      .then(function(user){

        // set the currentUser in the rootscope
        $rootScope.currentUser = {
          'id' : user.provider + user.id,
          'name' : user.name,
          'location' : user.location,
          'imgUrl' : user.profile_image_url
        };

        checkUser();

      },function(error){

        // if there's an login error
        console.log(error, 'user auth failed');

      });
  };

  // check user
  function checkUser(){

    //reference to firebase
    var db = new Firebase('https://bandmate.firebaseio.com');

    // create vars
    var allUsers = [];
    var exist = true;

    // gets all usernames from Firebase
    db.on('child_added', function(snapshot){
      allUsers.push(snapshot.val());
    });

    // for each user in Firebase
    for( var i=0; i<allUsers.length; i++){
      // if the logged in user exist in Firebase
      if(allUsers[i].id === $rootScope.currentUser.id){
        // set existto true
        exist = true;
        // set the current user to that user
        $rootScope.currentUser = allUsers[i];
      }else{
        //set exist to false
        exist = false;
      }
    }

    // if exist is false
    if(!exist){
      // add the user to Firebase
      db.child($rootScope.currentUser.id).set($rootScope.currentUser);
    }

    // the user is logged in, so take them to their studio
    $location.path('/studio/' + $rootScope.currentUser.id);

  };

}]);
