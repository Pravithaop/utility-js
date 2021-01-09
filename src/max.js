function maxValue(x,y){
	if(x > y){
		return x;}
	return y;
}




const max = (arr,length) => {
    if(length  == 1){
	return arr[0];	
	}
	return maxValue(arr[length-1],max(arr,length - 1));
}

module.exports = max;








