(function () {
    'use strict';

    angular
        .module('app')
        .factory('SkillsService', SkillsService);

    SkillsService.$inject = ['$http', '$cookies', '$rootScope', '$timeout', '$q'];
    function SkillsService($http, $cookies, $rootScope, $timeout, $q) {
        var service = {};

        service.GetUsers = GetUsers;

        var SERVICE_ENDPOINT = "http://192.168.1.2:3000";

        return service;

        function GetUsers() {

            /* Use this for real authentication
             ----------------------------------------------*/
            var url = SERVICE_ENDPOINT + "/joboffers";
                $http.get(url).then(function (response) {
                    var dfd = $q.defer();
                    dfd.resolve(response);
                   console.log("");
               });

        }
    }

})();
