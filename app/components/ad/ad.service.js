angular.module('pub-ad').factory('adService', function ($http) {
    var service = this;

    service.getAds = getAds;
    service.getAdById = getAdById;
    service.createAd = createAd;
    service.updateAd = updateAd;
    service.deleteAd = deleteAd;
    service.buyAd = buyAd;

    var login_url = 'https://ad-extremesi1.herokuapp.com/ad';


    function getAds() {
        return $http.get(login_url);
    }

    function buyAd(data) {
        return $http.post(login_url + '/buy', data);
    }

    function getAdById(id) {
        return $http.get(login_url + '/' + id);
    }

    function createAd(data) {
        return $http.post(login_url, data);
    }

    function updateAd(id, data) {
        return $http.patch(login_url + '/' + id, data);
    }

    function deleteAd(id) {
        return $http.delete(login_url + '/' + id);
    }

    return service;
})