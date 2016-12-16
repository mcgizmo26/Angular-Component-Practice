angular.module('angularApp')
       .directive('mainHeader',function(){
         return{
           restrict: 'E',
           templateUrl: './app/shared/header.html'
         }
       })
