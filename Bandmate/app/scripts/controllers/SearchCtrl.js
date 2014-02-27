'use strict';

/*global App*/

App.controller('SearchCtrl', ['$scope', 'FireConn' ,'$routeParams', '$rootScope', function ($scope, FireConn, $routeParams, $rootScope) {

	$scope.searchKeywords = $routeParams.keywords;

	$scope.results = FireConn;

}]);