const bodyEl = document.querySelector("body");

const inputEl  = document.querySelector(".input")

inputEl.checked = JSON.parse(localStorage.getItem("mode"))



function ToggleFunction(){
    if(inputEl.checked){
        
        bodyEl.style.backgroundColor = "black"; 
    }else{
        bodyEl.style.backgroundColor = "white"; 
    }
}

function  updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}


inputEl.addEventListener("click", ()=>{
    ToggleFunction()
    updateLocalStorage()
})