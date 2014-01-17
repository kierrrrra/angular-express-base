'use strict';

app.directive('appVersion', ['version', function (version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);

app.directive('navigation', [function () {
    return {
        restrict: "E",
        templateUrl: "views/directive/navigation.html",
        link: function ($scope, element, attrs) {
        }
    }
}]);