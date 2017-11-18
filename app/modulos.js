  import './principal/principal.modulo';

  (function() {
      'use strict';

      angular.module("modulos", ['principal']);

      angular.element(document).ready(function() {
          angular.bootstrap(document, ['principal']);
      });


  })();