(function () {
    'use strict';

    angular
        .module('app')
        .controller('SkillsController', SkillsController);

    SkillsController.$inject = ['$location', 'SkillsService', '$http',  ];
    function SkillsController($location, SkillsService, $http) {
        var vm = this;

        getUsers();
        vm.currentPhase = 1;
        vm.currentIndex = 0;
        vm.nextPhaseUsers = [];
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
            vm.nextPhaseUsers.push(vm.users[vm.currentIndex]);
            vm.currentIndex++;
            if((vm.currentIndex) == vm.totalUsers) {
                goToNextPhase();
            }
        };

        vm.decline = function() {
            vm.currentIndex++;
            if((vm.currentIndex) == vm.totalUsers) {
                goToNextPhase();
            }
        };
        vm.getScorePercentage = function(score){
            var percentage = Number(score)/5 * 100;
            return percentage;
        };

        vm.getScoreColor = function(value){
            switch(value) {
                case 1:
                    return "red";
                case 2:
                    return "yellow";
                case 3:
                    return "yellow";
                case 4:
                    return "green";
                default:
                    return "green";
            }
        };

        function goToNextPhase() {
            vm.users =  Object.assign({}, vm.nextPhaseUsers);
            vm.totalUsers = vm.nextPhaseUsers.length;
            console.log(vm.totalUsers);
            console.log(vm.users);
            vm.nextPhaseUsers = [];

            vm.currentIndex = 0;
            vm.currentPhase++;
        }

    }

})();
