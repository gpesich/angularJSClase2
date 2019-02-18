(function() {
    var cursoAngular = angular.module('CursoAngular', []);
    
    cursoAngular.controller('ControladorSuperior', function($scope) {

        $scope.alumnos = [{
            id : 1000,
            nombre: 'Daniel',
            apellido: 'Bermudez'
        }, {
            id : 2000,
            nombre: 'Fernando', 
            apellido: 'Belizan'
        }, {
            id : 3000,
            nombre: 'Gabriela',  
            apellido: 'Pesich'
        },
        {
            id : 4000,
            nombre: 'Julieta',
            apellido: 'Francisconi'
        },{
            id : 5000,
            nombre: 'Lorena',
            apellido: 'Bellon'
        },{
            id : 6000,  
            nombre: 'Judith',
            apellido: 'Cengarle'
        }, {
            id : 7000,       
            nombre: 'Mariano',
            apellido: 'Sayagués'
        }, {
            id : 8000,
            nombre: 'Sebastian',
            apellido: 'Maidana'
        }];
    });

})();