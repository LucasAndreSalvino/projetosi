angular.module('pub-ad').factory('loginService', function ($http, $window) {
    var service = this;

    service.login = login;

    // $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    var login_url = 'https://ad-extremesi1.herokuapp.com/authenticate'


    function login(email, senha, callback) {

        function success(data){
        	var token = data.data.token;
        	   if (token) {
                    $window.localStorage.userId = data.data.userID;
                    $http.defaults.headers.common.Authorization = 'Bearer ' + token;
                    callback(true, 'Sucesso');
                } else {
                    callback(false, 'Erro desconhecido');
                }
        }

        function error(data){
        	callback(false, 'Usuario ou senha errada');
        }

        var user = {
  			"email": email,
  			"password": senha
		}

        $http.post(login_url, user).then(success, error);

    }


    return service;
});