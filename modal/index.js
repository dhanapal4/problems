document.addEventListener("DOMContentLoaded",()=>{
    const modal = document.getElementById("modal")
    const openBtn = document.getElementById("open-btn")
    const closeBtn = document.getElementById("close-btn")


    openBtn.addEventListener("click",()=>{
        modal.style.display = "flex"
    })

    closeBtn.addEventListener("click",()=>{
        modal.style.display = "none"
    })


    window.addEventListener("click",(event)=>{
        if(event.target == modal){
            modal.style.display= "none"
        }
    })
})