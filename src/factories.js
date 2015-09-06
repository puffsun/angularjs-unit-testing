angular.module('factories', [])
.factory('factoryUT', ['$log', function($log) {
    "use strict";
    return {
        ook: function() {
            $log.warn('Ook.');
        }
    };
}]);
