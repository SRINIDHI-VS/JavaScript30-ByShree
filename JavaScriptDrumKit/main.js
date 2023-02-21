const secondHand = document.querySelector('.secondsHand');
const minHand = document.querySelector('.minutesHand');
const hourHand = document.querySelector('.hoursHand');
function rotate()
{
    const time = new Date();
    secondHand.style.transform = `rotate(${((time.getSeconds()/60)*360)}deg)`;
    // console.log((time.getSeconds()/60)*360);
    minHand.style.transform = `rotate(${((time.getMinutes()/60)*360)}deg)`;
    // console.log((time.getMinutes()/60)*360);
    hourHand.style.transform = `rotate(${((time.getHours()/12)*360)}deg)`;
    // console.log((time.getHours()/12)*360);
}
setInterval(rotate,1000);