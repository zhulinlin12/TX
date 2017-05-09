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
  	
  	$stateProvider.state("index",{ 
       url:"/index", 
       templateUrl:'views/shouye.html',
       resolve: {  
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {  
            return $ocLazyLoad.load(['scripts/zll/toubu.js']);  
        }]  
    }  
     }).state('index.op',{
			url:'/synr',
			views:{
			'':{templateUrl:'views/heye.html'},
			'a@index.op':{templateUrl:'views/nr.html'},
			'b@index.op':{templateUrl:'views/dibu.html'}
			},
			resolve: {  
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {  
            return $ocLazyLoad.load(['scripts/zll/sc.js']);  
        }]  
    }
		}).state("index.dibu",{ 
       url:"/dibu", 
       templateUrl:'views/dibu.html'     
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
			'a@index.lb':{templateUrl:'views/sclb.html'},
			'b@index.lb':{templateUrl:'views/dibu.html'}
			}
		}).state('index.pj',{
			url:'/dity',
			views:{
			'':{templateUrl:'views/heye.html'},
			'a@index.lb':{templateUrl:'views/sppj.html'},
			'b@index.lb':{templateUrl:'views/dibu.html'}
			}
		})
  	
  	$urlRouterProvider.when("","/index/dity");
  }])

