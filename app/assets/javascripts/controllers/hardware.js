app.controller("HardwareController", ["$scope", "Data", "CPU", "GPU", function($scope, Data, CPU, GPU) {
	$scope.cpu = function() { return CPU.find("id", Data.cpu.id); };
	$scope.gpu = function() { return GPU.find("id", Data.gpu.id); };
	
	$scope.upgradeCpu = function() {
		upgrade(CPU, "cpu");
	};
	
	$scope.upgradeGpu = function() {
		upgrade(GPU, "gpu");
	};
	
	var upgrade = function(database, type) {
		var next = database.getNext("id", Data[type].id);
		if (next != null) {
			Data[type].id = next.id;
		}
	};
}]);
