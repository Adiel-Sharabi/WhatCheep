var WhatsCheep;
(function (WhatsCheep) {
    var MainCtrl = (function () {
        function MainCtrl($scope) {
            this.$scope = $scope;
            $scope.Text = "Test Text";
            console.log("Inside ctor");
        }
        MainCtrl.prototype.injection = function () {
            return ['$scope', MainCtrl];
        };
        return MainCtrl;
    })();
    WhatsCheep.MainCtrl = MainCtrl;
})(WhatsCheep || (WhatsCheep = {}));