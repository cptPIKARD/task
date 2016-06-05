angular.module("taskApp").factory('taskFactory', ['$http', '$q', function($http, $q) {
    'use strict';
    
    return {
        getData : function() {
            var deffered = $q.defer();
            var data = $http.get('data/data.json').then(function(data){
                deffered.resolve(data.data.colorsArray);
            });
            return deffered.promise;
        }
    }
}])

