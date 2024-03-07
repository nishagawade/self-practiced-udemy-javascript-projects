const starEls = document.querySelectorAll(".fa-star");
const emojisEL = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0)

starEls.forEach((starEl , index)=>{
   starEl.addEventListener('click', ()=>{
       console.log("click", index)
       updateRating(index)
   })
})

function updateRating(index){
   starEls.forEach((starEl, idx)=>{
     if(idx < index + 1){
        starEl.classList.add("active")
     }else{
        starEl.classList.remove("active")
     }
   })

   emojisEL.forEach((emojiEL )=>{
      //console.log(emoji)
      emojiEL.style.transform = `translateX(-${index * 50}px)`
      emojiEL.style.color = colorsArray[index]
     })
}


