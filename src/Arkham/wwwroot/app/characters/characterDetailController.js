
(function () {
    'use strict';

    angular
      .module('arkhamApp')
      .controller('characterDetailController', ['$stateParams', 'charactersService', CharacterDetailController]);

    function CharacterDetailController($stateParams, characterService) {
        var vm = this;

        activate();

        function activate() {

            characterService.getCharacter($stateParams.id).then(function (data) {
                vm.character = data;
            });

        }
    }
})();
