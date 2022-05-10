let heading = document.querySelector("#heading")
let present = document.querySelector("#present")
let tRight = document.querySelector("#tRight")

setInterval(()=>{
    present.classList.add("none")
},2500)
setInterval(()=>{
    heading.classList.add("head")
},5200)
setInterval(()=>{
    tRight.classList.add("tRightShow")
},6000)
// animation

let sec = document.querySelectorAll("#section")

window.addEventListener('scroll',toshow);
setInterval(()=>{
    toshow();
},2000)
function toshow() {
    let bottom = window.innerHeight/6*5;
    sec.forEach((show) => {
        const boxtop = show.getBoundingClientRect().top;
        if(boxtop < bottom){
            show.classList.add('play');
        }
        else
        show.classList.remove('play');
    })
  
}

// check box
let a=document.getElementById('checkbox')
    a.addEventListener("click",()=>{
        if(document.getElementById("checkbox").checked == true){
            document.getElementById('button').disabled=false
        }
        else{
            document.getElementById('button').disabled=true
        }
    })

    // to navigate
    function navigate(){
        window.location=("paplu.com")
    }