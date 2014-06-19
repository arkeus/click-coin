app.controller("MinerController", ["$scope", "$interval", "Data", function($scope, $interval, Data) {
	$scope.mine = function() {
		Data.coins.value += 0.01;
	};
	
	$scope.hasLicense = function() {
		return Data.license.obtained;
	};
	
	$scope.buyLicense = function() {
		if (Data.license.obtained || Data.coins.value < 0.05) {
			return;
		}
		Data.license.obtained = true;
	};
	
	var timer = $interval(function() {
		if ($scope.hasLicense()) {
			Data.coins.value += 0.002;
		}
	}, 1000);
}]);
