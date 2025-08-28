console.log('start')//1
console.log('promise 1')//2
const promise = new Promise((res,rej)=>{
    console.log('inside promise')//3
    setTimeout(()=>{//33add to microtask 1
        console.log('inside setimouet')
        res("success")
    },[])
})
console.log('promise stmt 2')//4
promise.then(res=>console.log("res",res))//4.2add to MicroTask 2
console.log('fetchresp before stmt 1')//5
const apiFn = async ()=>{//7
    const fetchresp = await fetch('https://jsonplaceholder.typicode.com/posts/1');//8 add to microtask 3
    console.log('fetchresp after stmt 2')
    const response = await fetchresp.json()
    console.log('fetchresp after stmt 2',response)
    }
apiFn()//6


console.log('end')//9

//2
const newApiFn = async ()=>{//11
    console.log('new api1')//12
    const newapi = await fetch('https://jsonplaceholder.typicode.com/posts/2');//13 add to microtask 4
    console.log('new api2')
}

newApiFn()//10

