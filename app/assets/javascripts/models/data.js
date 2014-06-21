app.factory("Data", [function() {
	// TODO: Load data if exists in storage
	return {
		coins: { value: 1.34 },
		license: { obtained: false },
		cpu: { value: 1 },
		gpu: { value: 1 },
		ram: { value: 4 },
	};
}]);
