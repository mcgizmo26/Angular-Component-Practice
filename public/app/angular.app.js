angular.module('angularApp', ['ui.router'])
       .config(function($stateProvider, $urlRouterProvider){

         $urlRouterProvider.otherwise('/');
         $stateProvider

         .state('home', {
           url: '/',
           templateUrl: "/app/views/home.html"
         })

         .state('view', {
           url: '/view',
           templateUrl: "/app/views/view1/view.html"
         })

       })
