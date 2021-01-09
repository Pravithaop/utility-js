


const reduce = (arr, reduceFunction,actualValue) =>{

	var reduceValue;

	if(actualValue == undefined)
	{
		if(typeof(arr[0])=="number"){
			reduceValue = 0;
		}
		else if(typeof(arr[0])== "string"){
			reduceValue="";
		}
		else{
			reduceValue = undefined; }

	}
	else{
		reduceValue = actualValue; 
	}

	
	for(let i=0; i < arr.length ;i++)
	{
		reduceValue = reduceFunction(reduceValue, arr[i], i, arr);
	}
	return reduceValue;


}
module.exports = reduce;
	





























