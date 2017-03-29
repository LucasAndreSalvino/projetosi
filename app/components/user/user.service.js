angular.module('pub-ad').factory('userService', function ($http) {
    var service = this;

    service.getUsers = getUsers;
    service.getUserById = getUserById;
    service.createUser = createUser;
    service.updateUser = updateUser;

    var login_url = 'https://ad-extremesi1.herokuapp.com/user';


    function getUsers() {
        return $http.get(login_url);
    }

    function getUserById(id) {
        return $http.get(login_url + '/' + id);
    }

    function createUser(data) {
        return $http.post(login_url, data);
    }

    function updateUser(id, data) {
        return $http.patch(login_url + '/' + id, data);
    }

    return service;
});