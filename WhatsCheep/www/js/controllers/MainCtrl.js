var WhatsCheep;
(function (WhatsCheep) {
    var MainCtrl = (function () {
        function MainCtrl($scope) {
            var _this = this;
            this.$scope = $scope;
            $scope.message = "Test Text";
            $scope.calc = function () {
                return _this.calc();
            };
            $scope.amount1 = 0;
            $scope.price1 = 0;
            $scope.amount2 = 0;
            $scope.price2 = 0;
            console.log("Inside ctor");
        }
        MainCtrl.prototype.injection = function () {
            return ['$scope', MainCtrl];
        };

        MainCtrl.prototype.calc = function () {
            var price1calc = this.$scope.price1 / this.$scope.amount1;
            var price2calc = this.$scope.price2 / this.$scope.amount2;

            this.$scope.message = "price 1:" + price1calc + " price 2: " + price2calc;
        };
        return MainCtrl;
    })();
    WhatsCheep.MainCtrl = MainCtrl;
})(WhatsCheep || (WhatsCheep = {}));
