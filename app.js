const secLine = document.getElementById('second-line');
const minLine = document.getElementById('minute-line');
const hourLine = document.getElementById('hour-line');

const setDate = () =>{
    const currentDate = new Date();

    document.getElementById('date-container').innerText = `Date: ${currentDate.getDate()} - ${currentDate.getMonth()+1} - ${currentDate.getFullYear()}`;
    document.getElementById('time-container').innerText = `Time: ${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`;
    
    const seconds = currentDate.getSeconds();
    const secondDeg = ((seconds/60)*360) + 90;
    secLine.style.transform = `rotate(${secondDeg}deg)`;

    const minutes = currentDate.getMinutes();
    const minuteDeg = ((minutes/60)*360) + ((seconds/60)*6) + 90;
    minLine.style.transform = `rotate(${minuteDeg}deg)`;

    const hours = currentDate.getHours();
    const hourDeg = ((hours/60)*360) + ((minutes/60)*30)+ 90;
    hourLine.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
setDate();