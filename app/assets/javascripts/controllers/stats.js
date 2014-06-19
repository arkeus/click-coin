app.controller("StatsController", ["$scope", "Data", function($scope, Data) {
	$scope.coins = Data.coins;
}]);
