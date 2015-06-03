
(function () {
    'use strict';

    angular
      .module('arkhamApp')
      .factory('charactersService', ['$http', '$q', CharactersService]);

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
})();
