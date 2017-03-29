angular.module('pub-ad').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: '../components/login/login.html',
            controller: 'login-controller'
        })

        .state('home', {
            url: '/home',
            templateUrl: '../components/home/home.html',
            controller: 'home-controller'
        })

        .state('signup', {
            url: '/signup',
            templateUrl: '../components/signup/signup.html',
            controller: 'signup-controller'
        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '../components/dashboard/dashboard.html',
            controller: 'dashboard-controller'
        })

        .state('createAd', {
            url: '/ad/create',
            templateUrl: '../components/ad/ad.create.html',
            controller: 'adController'
        })

        .state('allAds', {
            url: '/ad/all',
            templateUrl: '../components/ad/ad.all.html',
            controller: 'adController'
        })

        .state('myAds', {
            url: '/ad/myAds',
            templateUrl: '../components/ad/myAds.html',
            controller: 'adController'
        })
})