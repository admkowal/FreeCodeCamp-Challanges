function sumAll(arr) {
	var minFromRange = Math.min(arr[0], arr[1]);
	var maxFromRange = Math.max(arr[0], arr[1]);
	var arrRange = [];

	for (i = minFromRange; i <= maxFromRange; i++){
		arrRange.push(i);
	}

	var total = arrRange.reduce(function(a, b){
		return a + b;
	});

	return total;	
}