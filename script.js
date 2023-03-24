//answer 1
let text= document.getElementById('text');
function itsme1(){
    console.log(text);
}
//answer 2
let text1= document.getElementsByTagName('h1');
function itsme2(){
    console.log(text1);
    console.log(text1[0]);
    console.log(text1[0].innerText);
}

//answer 3
let text2= document.getElementsByClassName('box');
function itsme3(){
    console.log(text2);
    console.log(text2[0]);
}

//answer 4
let text3 = document.getElementById('hh1');
function itsme4(){
    console.log(text3);
    text3.innerText="Hello World";
}

//answer 5
let text4 = document.getElementById('hh2');
function itsme5(){
    console.log(text4);
    text4.innerText="Welcome to Elevation academy";
}

//answer 6
let text5 = document.getElementById('heading');
function itsme6(){
    document.getElementById("heading").style.color = "violet";
    document.getElementById("heading").style.fontFamily = "Arial";
    document.getElementById("heading").style.fontSize = "larger";
  
}

//answer 9
let text9 = document.getElementById('d1');
function itsme9(){
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    console.log(hrs, mins, secs);
    let time = `Hours ${hrs} : Mins ${mins} : Seconds ${secs}`;
    text9.innerText= time;
    setInterval(() => {
       itsme9();
      }, 1000);
       //setTimeout(() => {     remember this concept also
       //itsme9();
        //}, 1000);
    }
   
    //answer 7
    let parent = document.querySelector('.p1');
    let button1 = document.querySelector('.b1');
    button1.addEventListener('click', () => {
     parent.setAttribute('style','flex-direction:column');
    })

   