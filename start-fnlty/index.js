const container =document.querySelectorAll('[data-value]')
console.log(container)

const udpateStar = (upto)=>{
    for(let i=0;i<upto;i++){
        container[i].classList.add("active")
    }
}

const clearStars =()=>{
    container.forEach(star=>{
        star.classList.remove("active")
    })
}

container.forEach(star=>{

    star.addEventListener("click",(e)=>{
        clearStars()
        container.forEach(star=>{
            const selectedStar =e.target.dataset.value 
            if(selectedStar == star.getAttribute('data-value')){
                console.log("clicked-",star)
                udpateStar(star.getAttribute('data-value'))
            }
        })

    })
})