function searchEle(arr,ele){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===ele){
            return i;
        }
    }
    return -1;
}

console.log(searchEle([1,2,3],3))

