app.controller("ResearchController", ["$scope", "Data", "Upgrades", function($scope, Data, Upgrades) {
	$scope.upgrades = Upgrades.data;
	
	$scope.isUnlocked = function() {
		return Data.company.obtained;
	};
	
	$scope.buyCompany = function() {
		if (Data.company.obtained) {
			return;
		}
		Data.company.obtained = true;
	};
	
	$scope.research = function(upgrade) {
		Data.research(upgrade.id);
	};
}]);
