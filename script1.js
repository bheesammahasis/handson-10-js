 //answer 10
      let checkNumber = document.querySelectorAll('input');
      let btn = document.querySelector('#b2');
      let btn1 = document.querySelector('.guess4')
      let para = document.querySelectorAll('p');
      let randomNumber = Math.floor(Math.random()*100+1);
      let count=100;
     btn.addEventListener('click',() => {
     console.log(randomNumber);
     console.log(checkNumber[1].value);
     if(randomNumber < parseInt(checkNumber[1].value)){
         para[0].innerText = "your guess is higher";
         console.log(para[0])
         count--;
         para[2].innerText=count;
     }
     else if(randomNumber > parseInt(checkNumber[1].value)){
         para[0].innerText = "your guess is lower";
         console.log(para[0])
         count--;
         para[2].innerText=count;
     }
     else if(randomNumber === parseInt(checkNumber[1].value)){
        para[0].innerText = '🤩🤩 Hurray You Won 🤩🤩';
        count--;
        para[2].innerText=count;
        btn1.innerHTML =randomNumber;
        para[3].innerText = `🥇 Highscore: ${randomNumber}`;
    }
     else{
         para[2].innerText = `💯 Chances: ${count}`;
         count--;
         para[3].innerText = `🥇 Highscore: 0`;
     }
 })
 
        

