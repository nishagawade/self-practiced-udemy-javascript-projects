const inputEl = document.getElementById("input");
const button = document.getElementById("btn");
const gallery = document.getElementById("gallery");
const errorMessage = document.getElementById('errorMessage')



function fetchPhotos(){
  
    const inputValue = inputEl.value;
   // const apikey = 'u5pueg4pZNi7Q93LYsaBVBzz3UE5u7JdZJ2YG--7GcQ';

  
   imgs = "";

  try{
    fetch(
    `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
      Math.random() * 1000
    )}&client_id=u5pueg4pZNi7Q93LYsaBVBzz3UE5u7JdZJ2YG--7GcQ`
    ).then((res)=>res.json()).then((data)=>{
      console.log(data)

      data.forEach((pic)=>{
        imgs+= `<img src = ${pic.urls.small} alt = image / >`;
        gallery.style.display = 'block'
        gallery.innerHTML = imgs;
        button.style.display = 'none'
        console.log(imgs)
      }) 
     })
 }catch (error) {
  console.log(error);
  errorMessage.style.display = 'something is wrong'
 }

    

}

button.addEventListener("click", fetchPhotos);