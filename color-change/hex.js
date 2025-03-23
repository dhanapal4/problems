const HEX=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const button=document.getElementById('btn')
const spanElement=document.getElementById('bkg-color')

console.log('clicked',document.body)

button.addEventListener('click',()=>{

    const randomNo=getRandom()
    let hexColor='#'
    for(let i=0;i<6;i++){
        hexColor+=HEX[getRandom()]
    }
    document.body.style.backgroundColor=hexColor
    spanElement.textContent=hexColor
})

console.log(getRandom())

function getRandom(){
    return Math.floor((Math.random()*15))
}

 