function minValue(x,y){
        if(x < y){
                return x;}
        return y;
}




const min = (arr,length) => {
    if(length  == 1){
        return arr[0];
        }
        return minValue(arr[length-1],min(arr,length - 1));
}

module.exports = min;
