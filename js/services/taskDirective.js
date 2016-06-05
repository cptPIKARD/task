angular.module("taskApp").directive('addColor', [function() {
    return {
        restrict: 'A',
        scope: {
            color: '@colorAttr'
        },
        link: function(scope, elem, attr) {
            $(elem).css('background-color', scope.color);
        }
    }
}]);