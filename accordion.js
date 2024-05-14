document.addEventListener("DOMContentLoaded", function() {
let accordion = document.getElementsByClassName("nes-btn");
let i;
console.log("loaded")
console.log("accordion count: " + accordion.length)
for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener("click",function(){
        console.log("boop")
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
}
});