
// const runProgram=(len)=>{
//     for(let i=1;i<=len;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
// }

function wait(ms){
    return new Promise(res=>setTimeout(res,ms))
}


async function runProgram(len) {
    for(let i=1;i<=len; i++){
        await wait(i*1000)
        console.log(i)
    }
    
}

runProgram(5)