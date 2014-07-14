app.filter("researchIcon", [function() {
	return function(upgrade) {
		var words = upgrade.name.split(" ");
		if (words.length < 3) {
			return words[0].substr(0, 2).toUpperCase();
		} else {
			return words[0].charAt(0) + words[1].charAt(0);
		}
	};
}]);

app.filter("researchRank", [function() {
	return function(upgrade) {
		return upgrade.name.split(" ").pop();
	};
}]);
