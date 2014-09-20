var g4lApp = angular.module('g4lApp', ['ui.bootstrap']);

g4lApp.controller('GroupsController', ['$scope','$http', function ($scope, $http) {
	$http.get('fixtures/groups.json').success(function(data) {
    	$scope.groups = data;
  });
}]);


g4lApp.controller('AddChallangeController', ['$scope', function ($scope) {

}]);

g4lApp.controller('ViewGroupController', ['$scope', function ($scope) {
  $scope.challenges = [
    {'title': 'Aroma therapy', 'description': '5 Session within one month'},
    {'title': 'Join Non Sḿoking generation', 'description': 'Get active'}
   ];

}]);

g4lApp.controller('MainController', ['$scope', function ($scope) {
   $scope.currentPage = 'overview';
   $scope.goTo = function(to) {
    $scope.currentPage = to;
   };
}]);

