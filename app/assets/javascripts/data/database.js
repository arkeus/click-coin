var Database = function(data, keys) {
	var dataMap = (function() {
		var map = {};
		$.each(keys, function(_, key) {
			var innerMap = {};
			$.each(data, function(_, value) {
				innerMap[value[key]] = value;
			});
			map[key] = innerMap;
		});
		return map;
	})();
	
	this.find = function(key, value) {
		return dataMap[key][value];
	};
	
	this.get = function(index) {
		return data[index];
	};
	
	this.getNext = function(key, value) {
		for (var i = 0; i < data.length; i++) {
			if (data[i][key] === value) {
				return i == data.length - 1 ? null : data[i + 1];
			}
		}
	};
};
