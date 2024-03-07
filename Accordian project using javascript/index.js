const questions = document.querySelectorAll(".question");

questions.forEach((question)=>{
    const btnEl = question.querySelector(".question-btn")
    btnEl.addEventListener('click', ()=>{
        question.classList.toggle('show-text')
    })
})