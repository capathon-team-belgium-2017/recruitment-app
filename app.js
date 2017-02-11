(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies','angular-hmac-sha512'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider','$crypthmacProvider'];
    function config($routeProvider, $locationProvider, $crypthmacProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })
            .when('/joboffering', {
                controller: 'JobofferingController',
                templateUrl: 'joboffering/joboffering.view.html',
                controllerAs: 'vm'
            })

            .when('/skills', {
                controller: 'SkillsController',
                templateUrl: 'phases/skills.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });

            $crypthmacProvider.setCryptoSecret('sdfosdfsdoifsjdfnos');
    }


    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();
