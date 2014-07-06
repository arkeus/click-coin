var GPUDatabase = new Database([
	// ATU
	{ id: "atu1", name: "ATU g10", cpM: 1.0 },
	{ id: "atu2", name: "ATU g20", cpM: 1.05 },
	{ id: "atu3", name: "ATU g30", cpM: 1.1, req: ["gpu1"] },
	{ id: "atu4", name: "ATU g5", cpM: 1.2 },
	{ id: "atu5", name: "ATU g-3", cpM: 1.4 },
	{ id: "atu6", name: "ATU gg100", cpM: 1.7, req: ["gpu2"] },
	// nAudia
	{ id: "naudia1", name: "nAudia 2100", cpM: 2.0, req: ["gpu3"] },
	{ id: "naudia2", name: "nAudia 3100", cpM: 2.6 },
	{ id: "naudia3", name: "nAudia 4400", cpM: 3.4, req: ["gpu4"] },
	{ id: "naudia4", name: "nAudia 4900", cpM: 4.6 },
	{ id: "naudia5", name: "nAudia 4950", cpM: 6.0 },
	{ id: "naudia6", name: "nAudia 4990", cpM: 7.5, req: ["gpu5"] },
], ["name", "id"]);