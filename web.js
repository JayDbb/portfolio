var wazHere = document.getElementById("waz-here");
var a = 0;
var i =0;
var intersectCountA =0; 
var intersectCountB =0; 
// Justin waz here 

const h1 = 'Justin waz here'.split("");
var cursor = document.getElementById('cursor');


var waz =setInterval(()=>{
    

    wazHere.innerHTML = wazHere.innerHTML.slice(0,i) +  h1[a]+'<div id="cursor"></div>'; //this allows the cursor to move ascross the screen with the text
    i++;

    a++;
    if (a+1 > h1.length){
        clearInterval(waz);
        document.getElementById('cursor').style.animation ='cursor 1s linear infinite';
        };
},100);

let ball1 = document.querySelector("#ball-1");
ball1.addEventListener("animationend", changePosition, true);
let ball2 = document.querySelector("#ball-2");
ball2.addEventListener("animationend", changePosition, true);
let ball3 = document.querySelector("#ball-3");
ball3.addEventListener("animationend", changePosition, true);
let ball4 = document.querySelector("#ball-4");
ball4.addEventListener("animationend", changePosition, true);
let ball5 = document.querySelector("#ball-5");
ball5.addEventListener("animationend", changePosition, true);
let ball6 = document.querySelector("#ball-6");
ball6.addEventListener("animationend", changePosition, true);

function changePosition(event) {
      let circle = event.target;

      circle.style.animationName = "none";
      
      requestAnimationFrame(() => {
        circle.style.animationName = "";
      });

      let circleStyle = getComputedStyle(circle);
      let finalX = circleStyle.getPropertyValue("--xB");
      let finalY = circleStyle.getPropertyValue("--yB");

      circle.style.setProperty("--xA", finalX);
      circle.style.setProperty("--yA", finalY);

      circle.style.setProperty("--xB", getRandomNumber(0, 100) + "%");
      circle.style.setProperty("--yB", getRandomNumber(0, 100) + "%");

    }
function getRandomNumber(low, high) {
        let r = Math.floor(Math.random() * (high - low + 1)) + low;
        return r;
      }

function about(){
    document.getElementById('about').style.backgroundColor='transparent'; 
    document.getElementById('about').style.color='rgb(115, 27, 99)'; 
    document.getElementById('abt-line').style.backgroundColor='rgb(115, 27, 99)'; 

    document.getElementById('about').style.animation = ' fade 1s  1'; 
}
function creation(){
    document.getElementById('container-3').style.color='rgb(115, 27, 99)'; 
    document.getElementById('create-line').style.backgroundColor='rgb(115, 27, 99)'; 
    document.getElementById('works-h1').style.animation = ' fade 2s  1';
    document.getElementById('code').style.animation=' side-right 1s linear 1 ';
    document.getElementById('photography').style.animation=' side-right 2s linear 1';
    document.getElementById('graphics').style.animation=' side-right 1.5s linear 1';
}
//fade in
const option = {
    rootMargin:'-100px'
}
var observeAbout = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            about();
            intersectCountA++;

        }else if(!entry.isIntersecting && intersectCountA ==0 ){
            document.getElementById('about').style.backgroundColor='transparent'; 
            document.getElementById('about').style.color='transparent'; 
            document.getElementById('abt-line').style.backgroundColor='transparent'; 
            
        }
        
    });
},option)
observeAbout.observe(document.getElementById('about'));

var observeCreate = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            creation();
            intersectCountB++;
        }else if(!entry.isIntersecting && intersectCountB ==0 ){
            document.getElementById('container-3').style.backgroundColor='transparent'; 
            document.getElementById('container-3').style.color='transparent'; 
            document.getElementById('create-line').style.backgroundColor='transparent'; 
        }
    });
},option)
observeCreate.observe(document.getElementById('my-works'));



//rubbish!
// document.getElementsByClassName('right-arrow').forEach(event =>document.addEventListener('mouserover', event=>{
//     event.style.content = 'url("icons8-right-button-24.png")'
//     console.log()
// }))
function hover_1(){
    document.getElementById('right-arrow-1').style.content = 'url("icons8-right-button-24 (1).png")';
}

function unhover_1(){
    document.getElementById('right-arrow-1').style.content = 'url("icons8-right-button-24.png")';
}



function hover_2(){
document.getElementById('right-arrow-2').style.content = 'url("icons8-right-button-24 (1).png")';
}

function unhover_2(){
document.getElementById('right-arrow-2').style.content = 'url("icons8-right-button-24.png")';
}


function hover_3(){
    document.getElementById('right-arrow-3').style.content = 'url("icons8-right-button-24 (1).png")';
    }
    
function unhover_3(){
    document.getElementById('right-arrow-3').style.content = 'url("icons8-right-button-24.png")';
    }
function show(){
    document.getElementById("photography-h1").style.textShadow = '0px 0px 0px rgb(115, 27, 99)';
}

function hide(){
    document.getElementById("photography-h1").style.textShadow = '0px 0px 4px rgb(115, 27, 99)';
    
}
function show_2(){
    document.getElementById("graphics-h1").style.textShadow = '0px 0px 0px rgb(115, 27, 99)';
}

function hide_2(){
    document.getElementById("graphics-h1").style.textShadow = '0px 0px 4px rgb(115, 27, 99)';
    
}
function show_3(){
    document.getElementById("code-h1").style.textShadow = '0px 0px 0px rgb(115, 27, 99)';
}

function hide_3(){
    document.getElementById("code-h1").style.textShadow = '0px 0px 4px rgb(115, 27, 99)';
}