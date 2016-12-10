

var app=angular.module('ngAdminCart',['ui.bootstrap','ui.router','firebase']);

app.config(RouteConfig);
app.config(firebaseConfig);

function firebaseConfig(){
    console.log('firebase configurate');
   var config = {
    apiKey: "AIzaSyBzmIl7fq6wloZnRS9pUyuFcrHuljTqgRA",
    authDomain: "testproject-4f2e6.firebaseapp.com",
    databaseURL: "https://testproject-4f2e6.firebaseio.com",
    storageBucket: "testproject-4f2e6.appspot.com",
    messagingSenderId: "390674072393"
  };
  firebase.initializeApp(config);

};    
    
RouteConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RouteConfig($stateProvider,$urlRouterProvider){
     console.log('route configurate');
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('dash',{
        url:'/dash',
        templateUrl:'views/dashboard.html'
    })
    .state('pending',{
        url:'/pending',
        templateUrl:'views/pending.html'
    })
    .state('stockcreate',{
        url:'/stockcreate',
        templateUrl:'views/stock_create.html',
        controller:  'StockCreateCtrl as stock'
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
        templateUrl:'views/login.html',
     controller:  'loginCtrl as login'
    });
};
// $firebaseObject, $firebaseArray,  $firebaseAuth 

