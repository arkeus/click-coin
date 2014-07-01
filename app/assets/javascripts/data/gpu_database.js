var GPUDatabase = new Database([
	// nAudia
	{ id: "atu1", name: "ATU g10", cpM: 1.0 },
	{ id: "atu2", name: "ATU g20", cpM: 1.05 },
	{ id: "atu3", name: "ATU g30", cpM: 1.1, req: ["gpu1"] },
	{ id: "atu4", name: "ATU g5", cpM: 1.2 },
	{ id: "atu5", name: "ATU g-3", cpM: 1.4 },
	{ id: "atu6", name: "ATU gg100", cpM: 1.7, req: ["gpu2"] },
], ["name", "id"]);