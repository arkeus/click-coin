app.factory("Upgrades", [function() {
	return new Database([
		/**
		 * name: name of the upgrade
		 * rpA: additive amount of RP per second
		 * rpM: multiplicative amount of RP per second
		 * cpA: additive amount of CC per second
		 * cpM: multiplicative amount of CC per second
		 */
		{ id: "rf1", name: "Research Focus I", rpA: 1, rpM: 0, ccA: 0, ccM: 0, req: [] },
		{ id: "rf2", name: "Research Focus II", rpA: 2, rpM: 0, ccA: 0, ccM: 0, req: ["rf1"] },
		{ id: "rf3", name: "Research Focus III", rpA: 3, rpM: 0, ccA: 0, ccM: 0, req: ["rf2"] },
		{ id: "rf4", name: "Research Focus IV", rpA: 4, rpM: 0, ccA: 0, ccM: 0, req: ["rf3"] },
		{ id: "rf5", name: "Research Focus V", rpA: 5, rpM: 0, ccA: 0, ccM: 0, req: ["rf4"] },
		{ id: "cpu1", name: "Improved Silicon I", req: [] },
		{ id: "cpu2", name: "Improved Silicon II", req: ["cpu1"] },
		{ id: "cpu3", name: "Improved Silicon III", req: ["cpu2"] },
	], ["id", "name"]);
}]);
