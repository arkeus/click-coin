app.factory("Data", [function() {
	// TODO: Load data if exists in storage
	return {
		coins: { value: 1.34 },
		license: { obtained: false },
		cpu: { id: "oc1" },
		gpu: { id: "atu1" },
		ram: { value: 4 },
		upgrades: [],
		
		hasUpgrade: function(id) {
			return this.upgrades.indexOf(id) !== -1;
		},
	};
}]);
