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
    clearInterval(i2);
}


const i3 = setInterval(()=>{
    tRight.classList.add("tRightShow")
    i3off()
},6000)
function i3off(){
    clearInterval(i3);
}
// animation

let sec = document.querySelectorAll("#section")

window.addEventListener('scroll',toshow);
const i4=setInterval(()=>{
    toshow();
    i4off()
},6000)
function i4off(){
    clearInterval(i4);
}
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
            document.getElementById('hide').classList.add("none")
        }
        else{
            document.getElementById('button').disabled=true
            document.getElementById('button').classList.add("fade")
            document.getElementById('hide').classList.remove("none")
        }
    })

    // to navigate
    function navigate(){
        window.location=("https://forms.gle/etef8epL3EhdoZxa7")
    }

    // timer

    let interval = setInterval(() => {
      const till = new Date(2022, 4, 14).getTime();
      const now = till - new Date().getTime();
      const days = Math.floor(now / (1000 * 60 * 60 * 24));
      const hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minute = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor(now % (1000 * 60) / 1000);
      // console.log(days, hours, minute, second);
      if (now < 0) clearInterval(interval.current);
      else{
          document.getElementById("day").innerText=`  ${days}`
          document.getElementById("hrs").innerText=`:  ${hours}`
          document.getElementById("min").innerText=`:  ${minute}`
          document.getElementById("sec").innerText=`:  ${second}`
          
      }
    }, 1000);
    
