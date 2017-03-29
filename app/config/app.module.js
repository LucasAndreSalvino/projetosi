angular.module('pub-ad', ['ui.router'])

.run(['$state', '$rootScope', '$q', function($state, $rootScope, $q) {

    $state.go('home');    }]);


//config files
require('./config/routes.config.js');
require('./config/constants.js');

//directive files
require('./components/shared/navbar/navbar.directive.js');
require('./components/shared/navbar/navbar.controller.js');
require('./components/shared/sidenav/sidenav.directive.js');

//controller files
require('./components/userInfo/user.info.controller.js');
require('./components/home/home.controller.js');
require('./components/my-ads/my-ads.controller.js');
require('./components/login/login.controller.js');
require('./components/signup/signup.controller.js');
require('./components/explore/explore.controller.js');

// service files
require('./components/login/authentication.service.js');
require('./components/signup/signup.service.js');
require('./components/userInfo/user.service');
require('./components/my-ads/anuncio.service');