app.factory("Data", [function() {
	// TODO: Load data if exists in storage
	return {
		coins: { value: 1.34 },
		license: { obtained: false },
	};
}]);
