app.controller("MinerController", ["Data", function(Data) {
	this.mine = function() {
		Data.coins.value += 0.01;
	};
	
	this.hasLicense = function() {
		return Data.license.obtained;
	};
	
	this.buyLicense = function() {
		if (Data.license.obtained || Data.coins.value < 0.05) {
			return;
		}
		Data.license.obtained = true;
	};
}]);
