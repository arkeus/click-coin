var UpgradesDatabase = function() {
	this.data = [
		/**
		 * name: name of the upgrade
		 * rpA: additive amount of RP per second
		 * rpM: multiplicative amount of RP per second
		 * cpA: additive amount of CC per second
		 * cpM: multiplicative amount of CC per second 
		 */
		{ id: "rf1", name: "Research Focus I", rpA: 1, rpM: 0, ccA: 0, ccM: 0, req: [] },
		{ id: "rf2", name: "Research Focus II", rpA: 1, rpM: 0, ccA: 0, ccM: 0, req: ["rf1"] },
		{ id: "rf3", name: "Research Focus III", rpA: 1, rpM: 0, ccA: 0, ccM: 0, req: ["rf2"] },
		{ id: "rf4", name: "Research Focus IV", rpA: 1, rpM: 0, ccA: 0, ccM: 0, req: ["rf3"] },
		{ id: "rf5", name: "Research Focus V", rpA: 1, rpM: 0, ccA: 0, ccM: 0, req: ["rf4"] },
	];
};
