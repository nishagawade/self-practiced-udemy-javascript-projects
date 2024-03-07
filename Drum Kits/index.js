const kits = ['crash', 'kick' , 'snare', 'tom'];
const containerEl  = document.querySelector(".container");

kits.forEach((kit)=>{
    const btnEL = document.createElement("button")
    containerEl.appendChild(btnEL);
    btnEL.classList.add("btn");
    btnEL.innerText = kit;
    btnEL.style.backgroundImage = "url(images/" + kit + ".png)";
    const audioEl = document.createElement("audio");
    containerEl.appendChild(audioEl)
    audioEl.src = "sounds/" + kit + ".mp3";

    btnEL.addEventListener('click', ()=>{
        audioEl.play()
    })

    window.addEventListener('keydown', (event)=>{
      if(event.key === kit.slice(0,1)){
        audioEl.play()
      }
    })
    
})