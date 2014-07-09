app.factory("CPU", [function() {
	return new Database([
		{ id: "oc1", name: "Outel Celery 100", cpA: 0.1 },
		{ id: "oc2", name: "Outel Celery 200", cpA: 0.2 },
		{ id: "oc3", name: "Outel Celery 300", cpA: 0.4, req: ["cpu1"] },
		{ id: "oc4", name: "Outel Celery 301", cpA: 0.8 },
		{ id: "oc5", name: "Outel Celery x105", cpA: 1.5 },
		{ id: "oc6", name: "Outel Celery x267", cpA: 4.0, req: ["cpu2"] },
	], ["name", "id"]);
}]);
