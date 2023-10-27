Array.prototype.MyMap=function(callback){
    let resultArr=[]
    for(let i=0;i<this.length;i++){
        resultArr.push(callback.call(undefined,this[i],i,this))
    }
    return resultArr;
}