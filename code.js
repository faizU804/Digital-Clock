// 
const clock = document.getElementById('clock');

// const date = new Date();

// but we need this time of date in clock box that runn continus...

setInterval( function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)