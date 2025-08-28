Array.prototype.MyFilter=function(callbackFn){
    let filteredArr=[]
    for(let i=0;i<this.length;i++){
        if(callbackFn.call(undefined,this[i],i,this)){
            filteredArr.push(this[i])
        }
    }
    return filteredArr;
}



Array.myFil =function(cb){
    let res=[]
    for(let i=0;i<this.length;i++){
        if(cb.call(_,this[i],i,this)){
            res.push(this[i])
        }

    }
    return res;
}