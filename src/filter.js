const filter = (arr , applyFunction) =>{

        var functionAppliedArray = [];

        for(let i=0 ; i< arr.length ; i++){
                var filterValue = applyFunction(arr[i],i,arr);
		if(filterValue){
                functionAppliedArray.push(arr[i]);
		}

        }

        return functionAppliedArray;
}

module.exports = filter;































