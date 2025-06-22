

Array.prototype.myFilterIndex = function(cb){
    const arr =this;
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i],i,arr)){
            return i
        }
    }
    return -1
}

const a = [1,4,3,5,3]

console.log(a.myFilterIndex((ele,i,a)=>ele===3))