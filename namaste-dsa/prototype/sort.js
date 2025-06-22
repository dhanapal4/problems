Array.prototype.mySort = function sort(){
    const arr =this;
    for(let i=0;i<arr.length-2;i++){
        for(let j=1;j<arr.length-1;j++){
            if(arr[i] > arr[j]){
                let temp =arr[i]
                arr[i] = arr[j]
                arr[j] =temp
            }
        }
    }
    return arr
}

const a=[4,3,2,7];


console.log(a.mySort())