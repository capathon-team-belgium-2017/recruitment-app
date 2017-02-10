(function () {
    'use strict';

    angular
        .module('app')
        .controller('SkillsController', SkillsController);

    SkillsController.$inject = ['$location', 'SkillsService', '$http'];
    function SkillsController($location, SkillsService,$http) {
        var vm = this;

        getUsers();

        // (function initController() {
        //     // reset login status
        //     SkillsService.GetUsers();
        // })();

        function getUsers() {
            vm.dataLoading = true;
            var SERVICE_ENDPOINT = "http://192.168.101.223:3000";

            var url = SERVICE_ENDPOINT + "/joboffers";

            $http.get(url).then(function (response) {
                vm.joboffers = response.data;
            });
        };
    }

})();
