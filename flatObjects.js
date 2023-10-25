const student={
    name:'dp',
    profile:{
      place:'US',
      dob:{
        month:'oct',
        day:6,
        year:2032
      },
      mobile:'9999999999'
    }
  }
  
  
  function flatObj(obj,parentKey=""){
    let resultObj={}
    Object.keys(obj).map(key=>{
      if(typeof obj[key]=='object'){
        const result=flatObj(obj[key],parentKey+key+"_")
        console.log('Result',result)
        Object.assign(resultObj,result)
      }
      else{
        resultObj[parentKey+key]=obj[key]
      }
    })
    return resultObj
  }
  
  console.log(flatObj(student))