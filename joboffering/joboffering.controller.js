(function () {
    'use strict';

    angular
        .module('app')
        .controller('JobofferingController', JobofferingController);

    JobofferingController.$inject = ['$rootScope'];
    function JobofferingController($rootScope) {
        var vm = this;

        vm.test = "leuk";
        (function initController() {
            // reset login status
        })();

        function firstMethod() {

        };
    }

    angular.module("app")
        .directive("jobofferingTile", function () {
            var directive = {
                restrict: "E",
                scope: {
                    item: "="
                },
                link: linkFunc,
                template: '<h3>Hello World!!</h3>',
                controller: "JobofferingController",
                controllerAs: "vm",
                bindToController: true
            };

            return directive;

            function linkFunc(scope, element, attrs, ngModelCtrl) {

            }
        })

})();
