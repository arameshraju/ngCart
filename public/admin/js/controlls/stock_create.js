app.controller('StockCreateCtrl',StockCreateCtrl);
StockCreateCtrl.$inject=['$scope','StockService'];
function StockCreateCtrl($scope,StockService){
    $scope.catView=false;
    $scope.stockView=true;
    $scope.stockListView=false
    console.log('cat view');
    $scope.category={};
    $scope.stock={};
     $scope.categories =StockService.getCategories();
     $scope.stocks =StockService.getStocksItems();
    $scope.AddCategory=function(){
        console.log('saveCategory');
        StockService.AddCategory($scope.category);
        $scope.category={};
        console.log('saveCategory');
    };
    
    $scope.saveStockitem=function(){
        StockService.AddStockItem($scope.stock);
        $scope.stock={};
    };
    $scope.iconClick=function(sel){
        console.log(sel);
       if(sel=='si'){
        $scope.catView=false;
        $scope.stockView=false;
        $scope.stockListView=true;
       }else if(sel=='cat'){
        $scope.catView=false;
        $scope.stockView=true;
        $scope.stockListView=false;
       }else if(sel=='catp'){
        $scope.catView=true;
        $scope.stockView=false;
        $scope.stockListView=false;
       }else{
        $scope.catView=false;
        $scope.stockView=true;
        $scope.stockListView=false;
           
       }
    }
    
    
}