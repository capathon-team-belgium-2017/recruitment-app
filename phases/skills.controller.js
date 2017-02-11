(function () {
    'use strict';

    angular
        .module('app')
        .controller('SkillsController', SkillsController);

    SkillsController.$inject = ['$location', 'SkillsService', '$http'];
    function SkillsController($location, SkillsService, $http) {
        var vm = this;

        getUsers();

        vm.currentPhase = 1;
        vm.currentIndex = 0;

        function getUsers() {
            vm.dataLoading = true;
            var SERVICE_ENDPOINT = "http://192.168.1.2:3000";

            var url = SERVICE_ENDPOINT + "/users";

            $http.get(url).then(function (response) {
                vm.users = response.data;
                vm.totalUsers = response.data.length;
            });
        }

        vm.accept = function() {
            vm.currentIndex++;
            if((vm.currentIndex+1) == vm.totalUsers) {
                goToNextPhase();
            }
        };

        vm.decline = function() {
            vm.currentIndex++;
            if((vm.currentIndex+1) == vm.totalUsers) {
                goToNextPhase();
            }
        };

        function goToNextPhase() {
            vm.currentIndex = 0;
            vm.currentPhase++;
        }

    }

})();
