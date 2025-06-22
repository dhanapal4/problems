function secondLargest(arr){
    let larg=-Infinity//safely assign larget
    let secLarg=-Infinity-1//2
    for(let i=0;i<arr.length;i++){//[5,
        if(arr[i]>larg){
            secLarg=larg
            larg =arr[i]
        }
        else if(arr[i]>secLarg && arr[i]!=larg){
            secLarg=arr[i]
        }
    }
    return [larg,secLarg]
}

console.log(secondLargest([21,5,9,4,12,12,21,6]))
// One issue with [21,5,9,4,12,6] above code is, 
// setting default arr[0] to larg and secondlarg if arr[0] is largest.