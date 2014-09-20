var g4lApp = angular.module('g4lApp', ['ui.bootstrap']);

g4lApp.controller('GroupsController', ['$scope', function ($scope, $http) {
	$http.get('fixtures/groups.json').success(function(data) {
    	$scope.groups = data;
  });
}]);

g4lApp.controller('AddChallangeController', ['$scope', function ($scope) {

}]);

g4lApp.controller('MainController', ['$scope', function ($scope) {
   $scope.currentPage = 'overview';
   $scope.goTo = function(to) {
    $scope.currentPage = to;
   };
}]);

