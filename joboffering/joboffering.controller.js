(function () {
    'use strict';

    angular
        .module('app')
        .controller('JobofferingController', JobofferingController);

    JobofferingController.$inject = ['$rootScope', '$http','$location'];
    function JobofferingController($rootScope,$http,$location) {
        var vm = this;

        vm.test = "leuk";

        getJobOffers();

        // (function initController() {
        //     // reset login status
        //     SkillsService.GetUsers();
        // })();

        function getJobOffers() {
            vm.dataLoading = true;
            vm.SERVICE_ENDPOINT = "http://192.168.101.223:3000";

            var url = vm.SERVICE_ENDPOINT + "/joboffers";

            $http.get(url).then(function (response) {
                vm.joboffers = response.data;
            });
        }

        vm.goToSkills = function(){
            $location.path('/skills');
        };
    }

})();
