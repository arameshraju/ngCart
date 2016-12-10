app.service('StockService',StockService);

StockService.$inject=['$firebaseArray'];

function StockService($firebaseArray){
    var stock=this;
    var catref = firebase.database().ref().child("categories");
    var stkref = firebase.database().ref().child("stockmaster");
    var categories = $firebaseArray(catref);
    var stockmaster = $firebaseArray(stkref);
    
    stock.getCategories=function(){
        return categories;
    };
    stock.AddCategory=function(catData){
        console.log('adding ' + catData);
        categories.$add(catData);
    };
    stock.getStocksItems=function(){
        return stockmaster;
    };
    stock.AddStockItem=function(stkData){
        console.log('adding ' + stkData);
        stockmaster.$add(stkData);
    };
    
    
    
    
}