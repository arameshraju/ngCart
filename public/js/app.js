var app=angular.module('ngCart', ['ui.router','ui.bootstrap','firebase']);
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
app.config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise("/login");
    $stateProvider
    .state('buy', {
      url: "/buy",
      templateUrl: "views/buy.html"
    })
    .state('cart', {
      url: "/cart",
      templateUrl: "views/cart.html"
    })
    .state('account', {
      url: "/account",
      templateUrl: "views/account.html"
    })
    .state('orders', {
      url: "/orders",
      templateUrl: "views/orders.html"
    })
    .state('smarbox', {
      url: "/smarbox",
      templateUrl: "views/smarbox.html"
    })
    .state('login', {
      url: "/buy",
      templateUrl: "views/buy.html"
    });
    
});


app.controller('navCtrl',NavCtrl);
NavCtrl.$inject=['$scope'];
    
function NavCtrl($scope){
  console.log('NavCtrl') ; 
};