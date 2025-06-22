function returnNegNo(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count
}

console.log(returnNegNo([1,-2,-4,4,-6,2,8,-7]))