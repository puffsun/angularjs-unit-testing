angular.module('HttpRequestExample', [])
.factory('httpReq', ['$http', function($http) {
    "use strict";
    return {
        sendMessage: function() {
            $http.get('http://it-ebooks-api.info/v1/search/JavaScript');
        }
    };
}]);
