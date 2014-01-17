'use strict';

var app = angular.module('angApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'views/partial1.html',
        controller: 'MyCtrl1'
    });
    $routeProvider.when('/view2', {
        templateUrl: 'views/partial2.html',
        controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
