const imageContainerEl = document.querySelector(".image-container");
const prevEL = document.getElementById("prev");
const nextEl = document.getElementById("next")
let x=0;
let timer;

prevEL.addEventListener("click", ()=>{

    x = x+45
    clearTimeout(timer)
    updateGallery()

})

nextEl.addEventListener("click", ()=>{

    x = x-45
    clearTimeout(timer)
    updateGallery()

})



function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(()=>{
        x = x - 45
    } , 3000)
    // updateGallery()
}

updateGallery()



