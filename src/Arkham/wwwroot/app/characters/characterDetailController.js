
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
})();
