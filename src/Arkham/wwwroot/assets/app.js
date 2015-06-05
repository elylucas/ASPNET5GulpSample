(function () {

    var app = angular.module('arkhamApp', ['ui.router', 'ngAnimate']);

    // @ngInject
    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

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

    }]);


})();

(function () {
    'use strict';

    angular
      .module('arkhamApp')
      .controller('characterDetailController', CharacterDetailController);

    function CharacterDetailController($stateParams, charactersService) {
        var vm = this;

        activate();

        function activate() {

            charactersService.getCharacter($stateParams.id).then(function (data) {
                vm.character = data;
            });

        }
    }
    CharacterDetailController.$inject = ["$stateParams", "charactersService"];
})();


(function () {
    'use strict';

    angular
      .module('arkhamApp')
      .controller('charactersController', CharactersController);

    function CharactersController(charactersService) {
        var vm = this;

        activate();

        function activate() {
            charactersService.getCharacters()
                .then(function (data) {                   
                    vm.characters = data;
                });
        }
    }
    CharactersController.$inject = ["charactersService"];
})();


(function () {
    'use strict';

    angular
      .module('arkhamApp')
      .factory('charactersService', CharactersService);

    function CharactersService($http, $q) {
        var service = {
            getCharacters: getCharacters,
            getCharacter: getCharacter
        };

        function getCharacters() {
            var deferred = $q.defer();
            $http.get('/api/characters')
                .success(function (data) {
                    deferred.resolve(data);
                });
            return deferred.promise;
        }

        function getCharacter(id) {
            var deferred = $q.defer();
            $http.get('/api/characters/' + id)
                .success(function (data) {
                    deferred.resolve(data);
                });
            return deferred.promise;
        }

        return service;
    }
    CharactersService.$inject = ["$http", "$q"];
})();

(function () {

    angular
        .module('arkhamApp')
        .controller('homeController', HomeController)

    function HomeController() {
 
    }


})();