function twoSum(arr,target){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [i,j]
            }
        }
    }
    return false
}

console.log(twoSum([1,2,3,7,12,5],10))