const imageContainer = document.querySelector(".image-container");
const imageEl = document.querySelectorAll("img");
const prevEl = document.querySelector(".prev")
const nextEl = document.querySelector(".next")

let currentImage = 1;

nextEl.addEventListener('click', ()=>{
    currentImage ++;
    updateImage()
})

prevEl.addEventListener("click", ()=>{
    currentImage--;
    updateImage()
})

function updateImage(){
    if(currentImage > imageEl.length){
        currentImage=1
    }else if( currentImage < 1){
       currentImage = imageEl.length
    }

    imageContainer.style.transform = `translateX(-${(currentImage-1)*500}px)`
}

updateImage()