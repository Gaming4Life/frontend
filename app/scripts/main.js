var g4lApp = angular.module('g4lApp', ['ui.bootstrap']);

g4lApp.controller('GroupsController', ['$scope', function ($scope) {
   $scope.groups = [
    {'title': 'Smokers', 'description': 'Some description here'},
    {'title': 'Soffpotatisar', 'description': 'Some other stuff'}
   ];
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

