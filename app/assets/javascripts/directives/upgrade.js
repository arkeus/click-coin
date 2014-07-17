app.directive("upgrade", [function() {
	return {
		restrict: "E",
		template: "<span class='icon'>{{upgrade | researchIcon}}</span><span class='rank'>{{upgrade | researchRank}}</span>",
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
