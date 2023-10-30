var isValid = function(s) {
    let paran={
        '(':')',
        '{':'}',
        '[':']'
    }
    let closingParan=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=='(' && !s.includes(')',i))
            return false
        if(s[i]=='{' && !s.includes('}',i))
            return false
        if(s[i]=='[' && !s.includes(']',i))
            return false
        if(Object.keys(paran).includes(s[i])){
            closingParan.push(paran[s[i]])
        }
        if(Object.values(paran).includes(s[i]) && closingParan.pop()!==s[i]){
            return false
        }
    }
    if(closingParan.length!=0)
        return false
    return true
};

console.log(isValid("[[[]]]"))