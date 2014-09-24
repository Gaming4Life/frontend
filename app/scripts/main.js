var g4lApp = angular.module('g4lApp', ['ui.bootstrap']);

g4lApp.controller('GroupsController', ['$scope','$http', function ($scope, $http) {
	$http.get('fixtures/groups.json').success(function(data) {
    	$scope.groups = data;
  });
}]);


g4lApp.controller('AddChallangeController', ['$scope','$http', function ($scope, $http) {
  $http.get('fixtures/challange_templates.json').success(function(data) {
  	$scope.challange_templates = data;
  });
}]);

g4lApp.controller('ViewGroupController', ['$scope', '$http', function ($scope, $http) {
  $http.get('fixtures/challanges.json').success(function(data) {
  	$scope.challanges = data;
  });
$http.get('fixtures/groups.json').success(function(data) {
	for (group in data)
	{
            if (data[group].id == $scope.selectedGroup)
		{
		$scope.Group = data[group]
		}
    	}
  });
}]);

g4lApp.controller('MainController', ['$scope', function ($scope) {
   $scope.currentPage = 'overview';
   $scope.goTo = function(to) {
    $scope.currentPage = to;
   };
   $scope.goToViewGroup = function(id) {
    $scope.currentPage = 'viewGroup';
    $scope.selectedGroup = id;	
   };
}]);

