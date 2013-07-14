var WhatsCheep;
(function (WhatsCheep) {
    var ngapp = angular.module('ngapp', []).config([
        "$routeProvider",
        function ($routerProvider) {
            $routerProvider.when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            }).otherwise({
                redirect: '/'
            });
        }
    ]);
    ngapp.controller('MainCtrl', WhatsCheep.MainCtrl.prototype.injection());
})(WhatsCheep || (WhatsCheep = {}));
