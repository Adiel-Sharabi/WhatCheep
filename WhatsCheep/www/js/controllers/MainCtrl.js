var WhatsCheep;
(function (WhatsCheep) {
    var MainCtrl = (function () {
        function MainCtrl($scope) {
            var _this = this;
            this.$scope = $scope;
            $scope.calc = function () {
                return _this.calc();
            };
            console.log("Inside ctor");
            this.$scope.result = false;
        }
        MainCtrl.prototype.injection = function () {
            return ['$scope', MainCtrl];
        };

        MainCtrl.prototype.calc = function () {
            this.$scope.result = true;
            var price1calc = this.$scope.price1 / this.$scope.amount1;
            var price2calc = this.$scope.price2 / this.$scope.amount2;
            this.$scope.cheeper1 = price1calc < price2calc;
            var message1 = "Product 1 is " + (this.$scope.cheeper1 ? "cheeper" : "expensive");
            message1 += " than product 2 by ";
            message1 += (this.$scope.cheeper1 ? (((price2calc * 100) / price1calc) - 100).toFixed(2).toString() : (((price1calc * 100) / price2calc) - 100).toFixed(2).toString());
            message1 += "%";

            this.$scope.messages = [message1];
        };
        return MainCtrl;
    })();
    WhatsCheep.MainCtrl = MainCtrl;
})(WhatsCheep || (WhatsCheep = {}));
