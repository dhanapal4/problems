const colors=["green","red","rgba(133,122,200)","#f15025"];
const button=document.getElementById('btn')
const spanElement=document.getElementById('bkg-color')

console.log('clicked',document.body)

button.addEventListener('click',()=>{

    const randomNo=getRandom()
    document.body.style.backgroundColor=colors[randomNo]
    spanElement.textContent=colors[randomNo]
})

console.log(getRandom())

function getRandom(){
    return Math.floor((Math.random()*10)/3)
}

 