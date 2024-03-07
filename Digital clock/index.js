const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function updateClock(){
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM";

  

    if(hr > 12) {
        hr = hr-12
        ampm = "PM"
    }

    hr = hr<10 ? "0" + hr : hr;
    sec = sec <10 ? "0" + sec :sec;
    min = min < 10 ? "0" + min : min;
  

    hourEl.innerText = hr;
    minuteEl.innerText  = min;
    secondEl.innerText = sec;
    ampmEl.innerText = ampm;
    
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock()