(function () {
'use strict';

var app=angular.module('ngAdminCart',['ui.bootstrap','ui.router']);

app.config(RouteConfig);

RouteConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RouteConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('dash',{
        url:'/',
        templateUrl:'views/dashboard.html'
    })
    .state('pending',{
        url:'/pending',
        templateUrl:'views/pending.html'
    })
    .state('stockcreate',{
        url:'/stockcreate',
        templateUrl:'views/stock_create.html'
    })
    .state('stockentry',{
        url:'/stockentry',
        templateUrl:'views/stock_entry.html'
        
    })
    .state('itemoffer',{
        url:'/itemoffer',
        templateUrl:'views/item_offer.html'
    })
    .state('globaloffer',{
        url:'/globaloffer',
        templateUrl:'views/global_offers.html'
    })
    .state('slide',{
        url:'/slide',
        templateUrl:'views/slides.html'
    })
    .state('login',{
        url:'/login',
        templateUrl:'views/login.html'
    });
};


 })();