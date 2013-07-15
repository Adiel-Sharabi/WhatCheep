/// <reference path="../_ref.ts" />
module WhatsCheep{
    export class MainCtrl{
        public injection(): any[]{
            return ['$scope', MainCtrl];
        }
        constructor(private $scope: any)
        {
            $scope.message = "Test Text";
            $scope.calc = () => this.calc();
            $scope.amount1 = 0; 
            $scope.price1 = 0; 
            $scope.amount2 = 0; 
            $scope.price2 = 0;
            console.log("Inside ctor");
        }
        
        public calc():void
        {
            var price1calc = this.$scope.price1 / this.$scope.amount1; 
            var price2calc = this.$scope.price2 / this.$scope.amount2; 

            this.$scope.message = "price 1:" + price1calc +
            " price 2: " + price2calc;

        }
    }
}