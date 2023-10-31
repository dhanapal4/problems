function isParan(str){

    let stack=[]
    let ClosedtoOpen={
        ')':'(',
        '}':'{',
        ']':'['
    }


    for(let c of str){
        if(c in ClosedtoOpen){
            if(stack && stack.slice(-1)==ClosedtoOpen[c]){
                stack.pop()
            }
            else
                return false
        }
        else{
            stack.push(c)
        }
    }

    if(stack.length)
        return false

    return true

}


console.log(isParan("({[]})"))