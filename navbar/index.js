const hamburger=document.getElementById("nav-hamburger-menu")
const toggleHamburger=document.getElementById("")

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle("toggle-nav-link")
})

console.log("Selection sort")


function SelectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=arr[i]
        for(let j=i;i<arr.length;j++){
            if(min<arr[j]){
                min=arr[j]
            }
        }
        let temp=arr[i];
        arr[i]=min;
        arr[j]=temp
    }
    return arr
}

console.log('Selection Sort',SelectionSort([5,4,9,7,3,1]))

