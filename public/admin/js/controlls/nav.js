app.controller('navCtrl',NavCtrl);
NavCtrl.$inject=['$scope','$firebaseAuth'];
function NavCtrl($scope,$firebaseAuth){
    console.log('navCtrl');
    $scope.sighout=function(){
          var auth = $firebaseAuth();
                auth.$signOut();
            window.location='#/login';
    }
};