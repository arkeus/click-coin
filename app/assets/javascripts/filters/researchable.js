app.filter("researchable", ["Upgrades", "Data", function(Upgrades, Data) {
	return function(list) {
		return $.grep(Upgrades.data, function(upgrade) {
			if (Data.hasUpgrade(upgrade.id)) {
				return false;
			}
			return $.grep(upgrade.req, function(req) { return !Data.hasUpgrade(req); }).length == 0;
		});
	};
}]);
