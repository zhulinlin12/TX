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
  .config(["$stateProvider","$urlRouterProvider",'$httpProvider','$ocLazyLoadProvider',function($stateProvider,$urlRouterProvider,$httpProvider,$ocLazyLoadProvider){
  	//延迟加载
var lazyloadlib = [];

  	$stateProvider.state("index",{ 
       url:"/toubu", 
       templateUrl:'views/shouye.html'
//     resolve: {  
//          des: function ($ocLazyLoad) {  
//              //var ctrl = $ocLazyLoad.load('/scripts/myjs/home.js');  
//              var ctrl = $ocLazyLoad.load([  
//                  {  
//                      files: '/scripts/zll/toubu.js',  
//                      cache: true //指定是否启用缓存  
//                  }  
//              ]);  
//              if (ctrl.$$state.status == 2)  
//                  return undefined;  
//              return ctrl;  
//          }  
//      }  
     
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
		}).state('index.buy',{
			url:'/buy',
			views:{
			'':{templateUrl:'views/heye.html'},
			'a@index.buy':{templateUrl:'views/buy.html'},
			'b@index.buy':{templateUrl:'views/dibu.html'}
			}
		}).state('index.xq',{
			url:'/xq',
			views:{
			'':{templateUrl:'views/heye.html'},
			'a@index.xq':{templateUrl:'views/spxq.html'},
			'b@index.xq':{templateUrl:'views/dibu.html'}
			}
		}).state('index.order',{
			url:'/order',
			views:{
			'':{templateUrl:'views/heye.html'},
			'a@index.order':{templateUrl:'views/order.html'},
			'b@index.order':{templateUrl:'views/dibu.html'}
			}
		}).state("login",{ 
       url:"/login", 
       templateUrl:'views/login.html'     
     })
  	
  	$urlRouterProvider.when("","/login");
//	 //全局配置  
//  $ocLazyLoadProvider.config({  
//      debug: true, //知否启用调试模式  
//      events:true  //事件绑定是否启用  
//  });  
  }])

