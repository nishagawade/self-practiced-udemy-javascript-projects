const btn = document.getElementById("btn");
const emojiName = document.getElementById("emoji-name");
const apiKey = '923fbc764dfb930d0bcebfba823549d7397dcd12'

const emoji = []

async function getRandomEmoji(){
    const response = await fetch (`https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1`);
    const data = await response.json();
    console.log(data)

    for(let i=0; i < 1500; i++){
      emoji.push({
       emojiName : data[i].character,
       emojiChar :  data[i].unicodeName

      })
    }
}

getRandomEmoji();

btn.addEventListener("click", ()=>{

    const randomNumber = Math.floor(Math.random()*emoji.length);
    btn.innerText = emoji[randomNumber].emojiName;
    emojiName.innerText = emoji[randomNumber].emojiChar
    
})