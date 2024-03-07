const btnEl = document.querySelector(".btn");
const inputEL =document.querySelector(".input");
const copyEL = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container")
console.dir(inputEL)

function passwordGenerator (){
    const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log("chars", chars.length)

    const passwordLength = 14;

    let password = "";

    for(let i= 0; i < passwordLength ; i++){
        const randomNumber = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomNumber , randomNumber + 1)
         console.log("password",password)
         inputEL.value = password
         alertContainerEl.innerText = password +  " " + "copied !!"
    }


    copyEL.addEventListener("click", ()=>{
        copyPassword();
     
         
            if(inputEL.value){
                alertContainerEl.classList.remove("active");
                setTimeout(()=>{
                    alertContainerEl.classList.add("active");
                },2000)
            }
        
    })
    
}



function  copyPassword(){
    inputEL.select();
    navigator.clipboard.writeText(inputEL.value)
}
btnEl.addEventListener("click", ()=>{
    passwordGenerator()
})

copyEL.addEventListener("click", ()=>{
    copyPassword()
})