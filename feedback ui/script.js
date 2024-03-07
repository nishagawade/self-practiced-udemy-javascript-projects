const ratingEl = document.querySelectorAll(".rating");
const containerEl = document.getElementById("container");
const btnEl = document.getElementById("btn")

let selectedRating = "";
ratingEl.forEach((rating)=>{
    rating.addEventListener('click' , (e)=>{

        selectedRating = e.target.innerText || e.target.parentNode.innerText;
        removeActive()
        e.target.classList.add("active");
        e.target.parentNode.classList.add("active")
    })
})


btnEl.addEventListener("click", ()=>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <p>Thank you !!</p>
       
        <p>Feedback : ${selectedRating}</p>
       
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})


function removeActive (){
    ratingEl.forEach((rating)=>{  
        rating.classList.remove("active")
    })
}