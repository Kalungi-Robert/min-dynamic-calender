const monthNameEL = document.getElementById
("month-name");
const dayNameEL = document.getElementById
("day-name");
const dayNumEL = document.getElementById
("day-number");
const yearEL = document.getElementById
("year");

/*Dynamic Calender Days Changer*/
const date = new Date();
const month = date.getMonth()
monthNameEL.innerText = date.toLocaleDateString("frn" ,{
    month: "long"
})

/*For Day*/
dayNameEL.innerText = date.toLocaleDateString("frn" ,{
    weekday: "long"
})

/*For Date*/
dayNumEL.innerText = date.getDate()

/*For Year */
yearEL.innerText = date.getFullYear()