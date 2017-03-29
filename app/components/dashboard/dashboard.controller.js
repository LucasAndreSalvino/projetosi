angular.module('pub-ad').controller('dashboard-controller', function ($scope, $window, userService) {
    $scope.state = false;

    $scope.user = {};

    $scope.toggleState = function() {
        $scope.state = !$scope.state;
    };

    var init = function(){
        var userId = $window.localStorage.userId;

        function success(data){
            $scope.user = data.data;
        }

        function error(data){
            console.log(data);
        }

        userService.getUserById(userId).then(success, error);
    }

    init();

});

angular.module('pub-ad').directive('sidebarDirective', function() {
    return {
        link : function(scope, element, attr) {
            scope.$watch(attr.sidebarDirective, function(newVal) {
                if(newVal)
                {
                    element.addClass('show');
                    return;
                }
                element.removeClass('show');
            });
        }
    };
});
