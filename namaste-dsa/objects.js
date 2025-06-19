let obj={
    id:1,
    name:'dp'
}

let val=1

// changeObj(val,obj) // You get error 'cannot access function before initialization ONLY if function is defined using arrow function keyword

const changeObj = (val,obj)=>{
    val=2// primitive type will not affect the outside variables; since it is creating a local variable scope inside this fn 
    obj.id = 2;
}
console.log(val,obj)
changeObj(val,obj)
console.log(val,obj)