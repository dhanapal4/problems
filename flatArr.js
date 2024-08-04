const a= [1,2,[3,4,[5]]]

function flatArr(arr){
    let resultArr=[]
    arr.forEach(element => {
        if(Array.isArray(element)){
            resultArr =resultArr.concat(flatArr(element))
        }
        else{
            resultArr.push(element)
        }
    });

    return resultArr;
}



console.log(flatArr(a))