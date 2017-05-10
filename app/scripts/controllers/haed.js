'use strict';

/**
 * @ngdoc function
 * @name yomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yomApp
 */
angular.module('yomApp')
  .controller('daoh', ['$scope','$http',function($scope,$http){
  	$scope.na=false;
$scope.fn=function(){
	$scope.na=true;
}
$scope.th=function(){
	$scope.na=false;
}
  }]);