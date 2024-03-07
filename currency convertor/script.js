const currencyFirstEL = document.getElementById("currency-first");
const currencySeondEl = document.getElementById("currency-second");
const firstValue = document.getElementById("worth-first");
const secondValue = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

const url = `https://v6.exchangerate-api.com/v6/d3677104e3720f5f90bdfd9f/latest/USD`
function updateRate(){

    fetch( `https://v6.exchangerate-api.com/v6/d3677104e3720f5f90bdfd9f/latest/${currencyFirstEL.value}`)
    .then((response)=>response.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencySeondEl.value]
        console.log(rate);
        
        exchangeRateEl.innerText = `1 ${currencyFirstEL.value} =  ${rate} ${currencySeondEl.value}`;

        secondValue.value = (firstValue.value*rate).toFixed(2);
    })
 
    




}




currencySeondEl.addEventListener("click", updateRate )

currencyFirstEL.addEventListener("click", updateRate);

firstValue.addEventListener("click", updateRate)