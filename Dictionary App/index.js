const searchEl = document.getElementById("input");
const infoEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
console.log("audioname", audioEl)


async function fetchAPI(word){
    
    try{
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res)=>res.json());
        const wordMeaning = result[0].meanings[0].definitions[0].definition;
        const wordTitle = result[0].word;
        console.log(audio)
   
         console.log("wordTitle" , wordTitle)
        console.log(result);
        console.log(wordMeaning);
   
        meaningContainerEl.style.display= 'block';
        titleEl.innerText = wordTitle;
        meaningEl.innerText = wordMeaning;
        audioEl.src = result[0].phonetics[0].audio;

    }catch(error){
       console.log(error)
    }
     
   
}



searchEl.addEventListener("keyup", (e)=>{
    console.log(e)
    if(e.target.value && e.key === 'Enter'){
        //console.log(e.target.value)
        fetchAPI(e.target.value)
    }
})