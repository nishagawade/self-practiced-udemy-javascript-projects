const hourEl = document.querySelector(".hour")
const minEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")

function updateClock(){
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    console.log(hours, minutes, seconds)

    const hrdeg = (hours/12)*360;
    const mindeg = (minutes/60)*360;
    const secdeg = (seconds/60)*360;

    hourEl.style.transform = `rotate(${hrdeg}deg)`;
    minEl.style.transform = `rotate(${mindeg}deg)`;
    secondEl.style.transform = `rotate(${secdeg}deg)`
}

setInterval(updateClock, 1000)