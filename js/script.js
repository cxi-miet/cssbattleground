let heading = document.querySelector("#heading")
let present = document.querySelector("#present")
let tRight = document.querySelector("#tRight")

const i1 = setInterval(()=>{
    present.classList.add("none")
    window.scrollTo(0, 0);
    i1off()
},2500)
function i1off(){
    clearInterval(i1);
}


const i2 = setInterval(()=>{
    heading.classList.add("head")
    i2off()
},5200)
function i2off(){
    clearInterval(i1);
}


const i3 = setInterval(()=>{
    tRight.classList.add("tRightShow")
    i3off()
},6000)
function i3off(){
    clearInterval(i1);
}
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
        if(document.getElementById("checkbox").checked == true){;
            document.getElementById('button').disabled=false
            document.getElementById('button').classList.remove("fade")
        }
        else{
            document.getElementById('button').disabled=true
            document.getElementById('button').classList.add("fade")
        }
    })

    // to navigate
    function navigate(){
        window.location=("paplu.com")
    }