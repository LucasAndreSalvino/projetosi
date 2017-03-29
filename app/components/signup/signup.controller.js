angular.module('pub-ad').controller('signup-controller', function ($scope, signupService, $state) {

    $scope.name;
    $scope.senha;
    $scope.confirmSenha;
    $scope.email;
    $scope.tipoUsuario;


    $scope.signUp = function () {

        function success (data){
            $state.go('login');
        }

        function error (data){
            console.log(data);
        }

        var user = {
            email: $scope.email,
            name: $scope.name,
            senha: $scope.senha,
            confirmSenha: $scope.confirmSenha,
            tipoUsuario: $scope.tipoUsuario
        }

        signupService.signUp(user).then(success, error);
    };


    $scope.cleanFields = function () {
        $scope.name = '';
        $scope.password = '';
        $scope.passwordConfirm;
        $scope.email;
        $scope.reason;
    }
})