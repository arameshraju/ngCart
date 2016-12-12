app.controller('loginCtrl',LoginCtrl);

LoginCtrl.$inject = ['$scope','$firebaseAuth'];
function LoginCtrl($scope,$firebaseAuth){
    var userlogin=this;
      var auth = $firebaseAuth();

    $scope.userlogin=function(){
            console.log($scope.user);
         auth.$signInWithEmailAndPassword($scope.user.name, $scope.user.password).then(function(firebaseUser) {
                    console.log("Signed in as:", firebaseUser.uid);
                    window.location="#/dash"
                }).catch(function(error) {
                    console.error("Authentication failed:", error);
            });
    };
    
    
    
};