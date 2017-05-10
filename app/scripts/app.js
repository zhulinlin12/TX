'use strict';

/**
 * @ngdoc overview
 * @name yomApp
 * @description
 * # yomApp
 *
 * Main module of the application.
 */
angular
  .module('yomApp', ["ui.router",'oc.lazyLoad'])
  .config(["$stateProvider","$urlRouterProvider",'$httpProvider',function($stateProvider,$urlRouterProvider,$httpProvider){
  	//延迟加载
var lazyloadlib = [];

  	$stateProvider.state("index",{ 
       url:"/toubu", 
       templateUrl:'views/shouye.html'
     
     }).state('index.op',{
			url:'/synr',
			views:{
			'':{templateUrl:'views/heye.html'},
			'a@index.op':{templateUrl:'views/nr.html'},
			'b@index.op':{templateUrl:'views/dibu.html'}
			}
		}).state("index.zhongxin",{ 
       url:"/zhongxin", 
       templateUrl:'views/bang-cjwt.html'     
     }).state("index.zx",{ 
       url:"/zx", 
       templateUrl:'views/bang-zx.html'
     }).state('index.guo',{
			url:'/guoche',
			views:{
			'':{templateUrl:'views/heye.html'},
			'a@index.guo':{templateUrl:'views/gouwuche.html'},
			'b@index.guo':{templateUrl:'views/dibu.html'}
			}
		}).state('index.lb',{
			url:'/sclb',
			views:{
			'':{templateUrl:'views/heye.html'},
			'a@index.lb':{templateUrl:'views/sc.html'},
			'b@index.lb':{templateUrl:'views/dibu.html'}
			}
		}).state('index.pj',{
			url:'/dity',
			views:{
			'':{templateUrl:'views/heye.html'},
			'a@index.pj':{templateUrl:'views/sppj.html'},
			'b@index.pj':{templateUrl:'views/dibu.html'}
			}
		})
  	
  	$urlRouterProvider.when("","/toubu/synr");
  }])

