// Crear un nuevo módulo de AngularJS
var myApp = angular.module('myApp', ['ngRoute']);

// Configurar las rutas de la aplicación
myApp.config(function($routeProvider) {
    $routeProvider

        // Ruta para la página de inicio
        .when('/', {
            templateUrl : 'app/views/home.html',
            controller  : 'HomeController'
        })

        // Ruta para la página "Acerca de"
        .when('/about', {
            templateUrl : 'app/views/about.html',
            controller  : 'AboutController'
        })

        // Otras rutas aquí si es necesario
        .otherwise({ redirectTo: '/' }); // Redirigir a la página de inicio si la URL no coincide con ninguna de las rutas anteriores
});
