 //answer 10
      let checkNumber = document.querySelector('input');
      let btn = document.querySelector('#b2');
      let para = document.querySelectorAll('p');
      let randomNumber = Math.floor(Math.random()*100+1);
      let count=100;
     btn.addEventListener('click',() => {
     console.log(randomNumber);
     console.log(para);
     if(randomNumber < parseInt(checkNumber.value)){
         para[0].innerText = "your guess is higher";
         console.log(para[0])
         count--;
         para[2].innerText=count;
     }
     else if(randomNumber < parseInt(checkNumber.value)){
         para[0].innerText = "your guess is lower";
         console.log(para[0])
         count--;
         para[2].innerText=count;
     }
     else if(randomNumber === parseInt(checkNumber.value)){
        para[0].innerText = '🤩🤩 Hurray You Won 🤩🤩';
        count--;
        para[2].innerText=count;
    }
     else{
         para[2].innerText = `💯 Chances: ${count}`;
         count--;
         para[3].innerText = `🥇 Highscore: 0`;
     }
 })
        

