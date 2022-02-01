

const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');


setInterval(() => {
    let time = new Date();
    let current_Sec = time.getSeconds();
    let current_Min = time.getMinutes();
    let current_Hou = time.getHours();
    let net_hour = current_Hou > 12 ? current_Hou - 12 : current_Hou;
    seconds.style.transform = `rotate(${clock_function(60, current_Sec)}deg)`
    minutes.style.transform = `rotate(${clock_function(60, current_Min)}deg)`
    hours.style.transform = `rotate(${clock_function(12, net_hour )}deg)`
}, 1000);


function clock_function(time, current){
    return (360 * current) / time;
}