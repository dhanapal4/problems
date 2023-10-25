const arr=[
    {
      name:'dp1',
      age:26,
      place:'mgpt1'
    },
      {
      name:'dp2',
      age:27,
      place:'mgpt2'
    },
      {
      name:'dp3',
      age:28,
      place:'mgpt3'
    },
    ]
    
  const excludeThis=[
    {
      k:'age',
      v:26
    },
    {
      k:'name',
      v:'dp2'
    }
    ]
    
    console.log('Before-',arr);
    
    const filtered=arr.filter(value=>{
      const isExclude = excludeThis.every(ob=>{
        return value[ob.k]!=ob.v
      })
      return isExclude;
    })
    
    console.log('After-',filtered)