angular.module('pub-ad').controller('sidenav-controller', function ($scope, $window, $http, $state) {

    $scope.logout = function() {
        $window.localStorage.userId  = '';
        $http.defaults.headers.common.Authorization = '';
        $state.go('home');
    }
})