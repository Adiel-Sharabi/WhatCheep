/// <reference path="_ref.ts" />


module WhatsCheep {
    declare var $routerPrivider;
    var ngapp = angular.module('ngapp', [])
        .config([<any>"$routeProvider", $routerProvider=> {
            $routerProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .otherwise({
                    redirect: '/'
                });
        }]);
    ngapp.controller('MainCtrl', MainCtrl.prototype.injection());
}