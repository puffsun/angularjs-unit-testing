angular.module('myDirectives', [])
.directive('superButton', function() {
    "use strict";

    return {
        scope: {label: '=', callback: '&onClick'},
        replace: true,
        restrict: 'E',
        link: function(scope, element, attrs) {
            // do nothing.
        },
        template: '<div>' +
            '<div>{{label}}</div>' +
            '<button ng-click="callback()">Click me!</button>' +
            '</div>'
    };
});
