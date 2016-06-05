angular.module('taskApp').controller('taskCtrl', ['$scope', 'taskFactory', function($scope, taskFactory) {
    taskFactory.getData().then(function(data) {
        $scope.dataColor = data;
    });
}]);