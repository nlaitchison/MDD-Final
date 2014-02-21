'use strict';

/*global App*/
App.controller('MainCtrl', function ($scope) {
	$scope.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];
});
App.controller('SearchCtrl', '$scope', function ($scope) {
	// $scope.bands = FireConn;
	$scope.saveData = function(){
		$scope.remoteData.bands = [{
			name: 'Rou Reynolds',
			age: 22,
			location: 'Orlando, Florida',
			email: 'rreynolds@gmail.com',
			phone: '1234567890',
			skills: 'Vocals, Guitar, Keyboard',
			genre: 'Post-Hardcore, Electronic, Alternative',
			facebook: 'example123',
			twitter: 'example123',
			soundcloud: 'example123',
			youtube: 'http://www.youtube.com/channel/example123',
			imgUrl: 'images/users/rou.png'
		},{
			name: 'Jason Butler',
			age: 22,
			location: 'Orlando, Florida',
			email: 'rreynolds@gmail.com',
			phone: '1234567890',
			skills: 'Vocals, Guitar, Keyboard',
			genre: 'Post-Hardcore, Electronic, Alternative',
			facebook: 'example123',
			twitter: 'example123',
			soundcloud: 'example123',
			youtube: 'http://www.youtube.com/channel/example123',
			imgUrl: 'images/users/jason.png'
		}];
	};
});
