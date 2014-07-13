app.directive("upgrade", [function() {
	return {
		restrict: "E",
		template: "{{upgrade.name}}",
		scope: {
			upgrade: "=",
		},
		link: function(scope, element, attrs) {
			element.addClass("upgrade button");
			element.attr({
				title: scope.upgrade.name
			});
		},
	};
}]);
