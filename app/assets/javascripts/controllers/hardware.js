app.controller("HardwareController", ["$scope", "Data", function($scope, Data) {
	$scope.cpu = function() {return CPUDatabase.find("id", Data.cpu.id); };
	$scope.gpu = function() { return GPUDatabase.find("id", Data.gpu.id); };
	
	$scope.upgradeCpu = function() {
		upgrade(CPUDatabase, "cpu");
	};
	
	$scope.upgradeGpu = function() {
		upgrade(GPUDatabase, "gpu");
	};
	
	var upgrade = function(database, type) {
		var next = database.getNext("id", Data[type].id);
		if (next != null) {
			Data[type].id = next.id;
		}
	};
}]);
