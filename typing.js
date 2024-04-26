let interval
let txt = "your effort to remain what you are is what limits you..."; /* The text */
  /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    setTimeout(function(){
        let speed = 50;
       
      
        let i = 0
        interval = setInterval(function(){
            type(i); 
            i++;  
            console.log(speed);
            speed = Math.floor(Math.random() * 5000) + 70;
        },speed);
    }, 2000);
}

function type(i){
    document.getElementById("typed").innerHTML += txt.charAt(i);
    console.log("fired");
    if (i >= txt.length) {
        clearInterval(interval);
    }
}