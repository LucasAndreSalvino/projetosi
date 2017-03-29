angular.module('pub-ad').controller('adController',function ($scope, adService, userService, $window) {

	$scope.titulo;
	$scope.descricao;
	$scope.valor;
	$scope.categoria;
	$scope.dataCriacao;
	$scope.dataFinalizacao;

	$scope.adType;
	$scope.date;

	$scope.user = {};

	$scope.state = false;

	$scope.toggleState = function() {
		$scope.state = !$scope.state;
	};

	$scope.allAds = [];

	var cleanFields = function(){
		$scope.titulo = '';
		$scope.descricao = '';
		$scope.valor = '';
		$scope.categoria = '';
		$scope.dataCriacao = '';
		$scope.dataFinalizacao = '';
	};

	$scope.showAd = function (ad) {

		var matchCategory = true;
		if($scope.adType !== undefined && $scope.adType !==''){
			matchCategory = ad.category === $scope.adType;
		}

		var matchDate = true;

		if($scope.date !== undefined && $scope.date !==''){
			matchDate = ad.dateCreation === $scope.date;
		}

		return matchCategory && matchDate;
	};

	$scope.buyAd = function (ad) {

		console.log(ad);


		function success(data) {
			console.log(data);
		}

		function error(data) {
			console.log(data);
		}

		var buy = {
			"ad": ad,
			"buyer": $scope.user
		}

		adService.buyAd(buy).then(success, error);
	};

	$scope.createAd = function(){

		function success(data){
			cleanFields();
		}

		function error(data){
			console.log(data);
		}

		var ad = {
			"advertiser": $scope.user,
			"category": $scope.categoria,
  			"dateCreation": $scope.dataCriacao,
  			"dateEnd": $scope.dataFinalizacao,
  			"dateScheduling": "20/20/2017",
  			"description": $scope.descricao,
  			"title": $scope.titulo,
  			"value": parseFloat($scope.valor)
		};

		adService.createAd(ad).then(success, error);
	};


	$scope.getAds = function(){

		function success(data){
			var users = data.data;
			
			users.forEach(function (user) {
					user.ads.forEach(function (ad) {
						$scope.allAds.push(ad);
					})
			});
		}

		function error(data){
			console.log(data);
		}

		userService.getUsers().then(success, error);
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


		$scope.getAds();
	};

	init();

})

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