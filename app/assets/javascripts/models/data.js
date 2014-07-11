app.factory("Data", [function() {
	// TODO: Load data if exists in storage
	return {
		coins: { value: 1.34 },
		license: { obtained: false },
		company: { obtained: false },
		datacenter: { obtained: false },
		cpu: { id: "oc1" },
		gpu: { id: "atu1" },
		ram: { value: 4 },
		upgrades: {},
		rp: { value: 0 },
		
		hasUpgrade: function(id) {
			return id in this.upgrades;
		},
		
		research: function(id) {
			this.upgrades[id] = true;
		},
	};
}]);
