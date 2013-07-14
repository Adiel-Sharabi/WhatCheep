/// <reference path="../_ref.ts" />
module WhatsCheep{
    export class MainCtrl{
        public injection(): any[]{
            return ['$scope', MainCtrl];
        }
        constructor(private $scope: any)
        {
            $scope.Text = "Test Text";
            console.log("Inside ctor");
        }
    }
}