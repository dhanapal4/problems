function largestNo(arr){
    let max=arr[0]//(or) -Infinity <-- Least no
    arr.forEach((_,index) => {
        if(max<arr[index]){
            max=arr[index]
        }
    });
    return max;
}

function largestNoUsingReduce(arr){
    return arr.reduce((max,_,index)=>{
        if(max<arr[index]){
            return arr[index]
        }
        return max
    },0)
}

console.log(largestNo([3,2,6,9,11,4,1]))
console.log(largestNoUsingReduce([13,2,6,9,11,4,1]))