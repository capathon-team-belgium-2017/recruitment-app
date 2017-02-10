(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;

        var SERVICE_ENDPOINT = "http://192.168.101.223:3000";
        return service;


        function GetAll() {
            return $http.get(SERVICE_ENDPOINT + '/recruiters').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get(SERVICE_ENDPOINT + '/recruiters/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get(SERVICE_ENDPOINT + '/recruiters/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            console.log(JSON.stringify(user))
            return $http.post(SERVICE_ENDPOINT + '/recruiters', JSON.stringify(user)).then(handleSuccess, handleError('Error creating user'));
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
