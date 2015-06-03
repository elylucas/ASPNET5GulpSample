(function () {

    var app = angular.module('arkhamApp', ['ui.router', 'ngAnimate']);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('Home', {
                url: '',
                controller: 'homeController',
                templateUrl: 'app/home/index.html'
            })
            .state('Characters', {
                url: '/characters',
                controller: 'charactersController',
                templateUrl: 'app/characters/index.html',
                controllerAs: 'vm'
            })
            .state('CharacterDetail', {
                url: '/characters/:id',
                controller: 'characterDetailController',
                templateUrl: 'app/characters/detail.html',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('');

    });


})();