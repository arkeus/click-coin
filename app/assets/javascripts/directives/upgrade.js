app.directive("upgrade", [function() {
	return {
		restrict: "E",
		template: "{{upgrade.name}}",
		scope: {
			upgrade: "=",
		}
	};
}]);
