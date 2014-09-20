var g4lApp = angular.module('g4lApp', ['ui.bootstrap']);

g4lApp.controller('GroupsController', ['$scope', function ($scope) {
   $scope.groups = [
    {'title': 'Smokers', 'description': 'Some description here'},
    {'title': 'Soffpotatisar', 'description': 'Some other stuff'}
   ];
}]);

