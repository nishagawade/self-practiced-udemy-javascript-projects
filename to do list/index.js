const formEl = document.querySelector('.form');
const ulEl = document.querySelector(".list")
const inputEl = document.querySelector(".input")

function addList(){
    const liEl = document.createElement("li");
    liEl.innerText = inputEl.value;
    ulEl.appendChild(liEl);
    inputEl.value = "";

    const checkboxEl = document.createElement("div");
    checkboxEl.innerHTML = `<i class="fas fa-check-square"></i
    >`;

    const trashEl = document.createElement("div");
    trashEl.innerHTML = `<i class="fas fa-trash"></i>`;
    liEl.appendChild(checkboxEl);
    liEl.appendChild(trashEl);

    checkboxEl.addEventListener('click', ()=>{
        liEl.classList.toggle("checked")
    })

    trashEl.addEventListener("click", ()=>{
        liEl.remove()
    })
}

formEl.addEventListener("submit", (event)=>{
    event.preventDefault()
    addList()
}) 