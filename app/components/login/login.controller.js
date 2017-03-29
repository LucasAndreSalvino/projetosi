angular.module('pub-ad').controller('login-controller', function ($scope, loginService, $state) {

    $scope.email = '';
    $scope.password = '';



    $scope.login = function () {
    	loginService.login($scope.email, $scope.password, function(isAuthenticated, msg){
    		if(isAuthenticated){
    			$state.go('dashboard');
    		}
    	})
    }
});