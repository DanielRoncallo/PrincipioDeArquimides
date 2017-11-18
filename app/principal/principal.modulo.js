(function() {
    'use strict';

    angular.module("principal", ['ngRoute']);
    angular.module("principal").config(configuracion);
    angular.module("principal").controller("ControladorPrincipal", ControladorPrincipal);


    function configuracion($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: './app/principal/principal.html',
                controller: 'ControladorPrincipal',
                controllerAs: 'vm'
            });

    }

    function ControladorPrincipal() {

        var vm = this;
        vm.densidad = 0;
        vm.densidadObjeto = 0;
        vm.volumenObjeto = 0;
        vm.masaObjeto = 0;
        vm.empuje = 0;
        vm.fuerza = 0;
        vm.colorObjeto = "#fcf8e3";
        vm.context = document.getElementById('canvas').getContext('2d');

        vm.CalcularEmpuje = CalcularEmpuje;
        vm.Inicio = Inicio;


        function Inicio() {
            Liquido();
            EstadoAbajo();
        }

        function Liquido() {
            vm.context.clearRect(0, 0, canvas.width, canvas.height);
            vm.context.fillStyle = "#ccddff";
            vm.context.fillRect(20, 20, 320, 520);
        }


        function EstadoAbajo() {
            vm.context.fillStyle = vm.colorObjeto;
            vm.context.fillRect(140, 260, 80, 80);
        }


        function EstadoMitad() {
            vm.context.fillStyle = vm.colorObjeto;
            vm.context.fillRect(140, 150, 80, 80);
        }


        function EstadoArriba() {
            vm.context.fillStyle = vm.colorObjeto;
            vm.context.fillRect(140, 10, 80, 80);
        }


        function CalcularEmpuje() {
            vm.empuje = vm.densidad * vm.volumenObjeto * 9.81;
            vm.fuerza = vm.masaObjeto * 9.81;
            Liquido();

            if (vm.empuje > vm.fuerza)  { 
                EstadoArriba();
            } else if (vm.fuerza == vm.empuje) {
                EstadoMitad();
            } else if(vm.empuje < vm.fuerza) {
                EstadoAbajo();
            }

        }

    }

})();