//[INTERVIE QN] : LTIMindTree
const arr = ['a','b','c','a','b','a']
// output : obj = {a:3,b:2,c:1}

const findOccurence = (arr)=>{
    
    if(arr.length<1) return {}
    
    const res = arr.reduce((result,value)=>{
        if(value in result){
            result[value]++;
        }
        else{
            result[value]=1
        }
        return result;
    },{})
    
    console.log(res)
}

findOccurence(arr);
