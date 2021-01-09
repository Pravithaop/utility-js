const map = (arr , applyFunction) =>{

	var functionAppliedArray = [];

	for(let i=0 ; i< arr.length ; i++){
		var mapValue = applyFunction(arr[i],i,arr);
		functionAppliedArray.push(mapValue);

	}

	return functionAppliedArray;
}

module.exports = map;






















