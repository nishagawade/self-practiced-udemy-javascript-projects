const videoContainerEl = document.querySelector(".trailer-container");
const videoEL = document.querySelector("video")
const btnEl = document.querySelector(".btn")
const closeEL = document.querySelector(".close-icon")

btnEl.addEventListener("click", ()=>{
    videoContainerEl.classList.remove("active")
})

closeEL.addEventListener("click", ()=>{
    videoContainerEl.classList.add("active")
    videoEL.pause();
    videoEL.currentTime = 0;
})