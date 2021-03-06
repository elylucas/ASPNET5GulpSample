﻿
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
})();
