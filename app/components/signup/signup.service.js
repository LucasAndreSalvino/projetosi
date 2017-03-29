angular.module('pub-ad').factory('signupService', function ($http) {
    var service = this;


    var url = 'https://ad-extremesi1.herokuapp.com/user'


    service.signUp = signUp;


    function signUp(data) {
        return $http.post(url, data);
    }


    return service;
});