const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

function  addImages() {
     
    let imageNmber =10;
    for(let i = 0; i< imageNmber; i++){
        const imageEl = document.createElement("img");
        imageEl.src = ` https://picsum.photos/200?random=${Math.floor(Math.random()*2000)}`;
        imageContainerEl.appendChild(imageEl)
    }
   
}

btnEl.addEventListener('click', ()=>{
    addImages()
})