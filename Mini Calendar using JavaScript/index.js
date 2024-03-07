const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year")

const date = new Date();
console.log(date);
console.dir(date);

const month = date.getMonth();
const year = date.getFullYear();
const day = date.getDay()
const dayNo = date.getDate();
console.log("day", dayNo)
console.log("month",month);
console.log("year", year);
console.log("day", day)