const textAreaEL = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");


textAreaEL.addEventListener("keyup", ()=>{
    updateCounter()
} )

function updateCounter(){
    totalCounterEl.innerText = textAreaEL.value.length;
    let totalCount = textAreaEL.getAttribute("maxlength");
   // console.log(remainingCount)
   remainingCounterEl.innerText = totalCount -  textAreaEL.value.length
}