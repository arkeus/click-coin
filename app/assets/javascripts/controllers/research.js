app.controller("ResearchController", ["$scope", "Data", function($scope, Data) {
	$scope.isUnlocked = function() {
		return Data.company.obtained;
	};
	
	$scope.buyCompany = function() {
		if (Data.company.obtained) {
			return;
		}
		Data.company.obtained = true;
	};
}]);
