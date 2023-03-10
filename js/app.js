// the button logic came from https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

// for heading p document print
// for main p
// need function for logic of answers
// need function for element color change
// for initiation of button

'use strict';

let myButton = document.querySelector('button');

function questionOne() {
  let ans = '';
  console.log('test1');
  let x =1;
  while(x===1){
    ans = prompt('Was I born in Knoxville, TN?\nY/N');
    //   if (ans === null || ans !== 'Y' || ans !== 'N' || ans !== 'n' || ans !== 'y') {
    //     // console.log('that answer did not work')
    //     alert('Please provide an answer!'); } else
    if (ans === 'N' || ans === 'n') {
    // console.log('Correct')
      alert('CORRECT');
      document.getElementById('li1').style.color = 'rgba(241, 255, 251, 1)'; //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_color2
      document.getElementById('li1').style.backgroundColor = 'rgb(6, 101, 23)';
      return 1;
    } else if (ans === 'Y' || ans === 'y') {
    // console.log('Incorrect')
      alert('Sorry... that is wrong');
      document.getElementById('li1').style.color = 'rgb(255, 200, 200)'; //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_color2
      document.getElementById('li1').style.backgroundColor = 'rgb(95, 5, 5)';
      return 0;
    } else {
    // console.log('Nonsense answer')
      alert('Please provide an answer!');
    // questionOne();
    }
  }
}

function questionTwo() {
  let ans = '';
  console.log('test2');
  let x =1;
  while(x===1){
    ans = prompt('Was I a combat medic in the Army?\nY/N');
    //   if (ans === null || ans !== 'Y' || ans !== 'N' || ans !== 'n' || ans !== 'y') {
    //     // console.log('that answer did not work')
    //     alert('Please provide an answer!'); } else 
    if (ans === 'N' || ans === 'n') {
    // console.log('Correct')
      alert('Sorry... that is wrong');
      document.getElementById('li2').style.color = 'rgb(255, 200, 200)'; //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_color2
      document.getElementById('li2').style.backgroundColor = 'rgb(95, 5, 5)';
      return 0;
    } else if (ans === 'Y' || ans === 'y') {
    // console.log('Incorrect')
      alert('CORRECT');
      document.getElementById('li2').style.color = 'rgba(241, 255, 251, 1)'; //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_color2
      document.getElementById('li2').style.backgroundColor = 'rgb(6, 101, 23)';
      return 1;
    } else {
    // console.log('Nonsense answer')
      alert('Please provide an answer!');
    }
  }
}

function questionThree() {
  let ans = '';
  console.log('test3');
  let x =1;
  while(x===1){
    ans = prompt('Did I always know I wanted to be a software developer?\nY/N');
    //   if (ans === null || ans !== 'Y' || ans !== 'N' || ans !== 'n' || ans !== 'y') {
    //     // console.log('that answer did not work')
    //     alert('Please provide an answer!'); } else 
    if (ans === 'N' || ans === 'n') {
    // console.log('Correct')
      alert('CORRECT');
      document.getElementById('li3').style.color = 'rgba(241, 255, 251, 1)'; //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_color2
      document.getElementById('li3').style.backgroundColor = 'rgb(6, 101, 23)';
      return 1;
    } else if (ans === 'Y' || ans === 'y') {
    // console.log('Incorrect')
      alert('Sorry... that is wrong');
      document.getElementById('li3').style.color = 'rgb(255, 200, 200)'; //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_color2
      document.getElementById('li3').style.backgroundColor = 'rgb(95, 5, 5)';
      return 0;
    } else {
    // console.log('Nonsense answer')
      alert('Please provide an answer!');
    }
  }
}

function questionFour() {
  let ans = '';
  console.log('test4');
  let x =1;
  while(x===1){
    ans = prompt('Is my favorite color yellow?\nY/N');
    //   if (ans === null || ans !== 'Y' || ans !== 'N' || ans !== 'n' || ans !== 'y') {
    //     // console.log('that answer did not work')
    //     alert('Please provide an answer!'); } else 
    if (ans === 'N' || ans === 'n') {
    // console.log('Correct')
      alert('Sorry... that is wrong');
      document.getElementById('li4').style.color = 'rgb(255, 200, 200)'; //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_color2
      document.getElementById('li4').style.backgroundColor = 'rgb(95, 5, 5)';
      return 0;
    } else if (ans === 'Y' || ans === 'y') {
    // console.log('Incorrect')
      alert('CORRECT');
      document.getElementById('li4').style.color = 'rgba(241, 255, 251, 1)'; //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_color2
      document.getElementById('li4').style.backgroundColor = 'rgb(6, 101, 23)';
      return 1;
    } else {
    // console.log('Nonsense answer')
      alert('Please provide an answer!');
      questionFour();
    }
  }
}

function questionFive() {
  let ans = '';
  console.log('test5');
  let x =1;
  while(x===1){
    ans = prompt('Am I happy you are here?\nY/N');
    //   if (ans === null || ans !== 'Y' || ans !== 'N' || ans !== 'n' || ans !== 'y') {
    //     // console.log('that answer did not work')
    //     alert('Please provide an answer!'); } else 
    if (ans === 'N' || ans === 'n') {
    // console.log('Correct')
      alert('Would you really think that?');
      document.getElementById('li5').style.color = 'rgb(255, 200, 200)'; //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_color2
      document.getElementById('li5').style.backgroundColor = 'rgb(95, 5, 5)';
      return 0;
    } else if (ans === 'Y' || ans === 'y') {
    // console.log('Incorrect')
      alert('YOU BET I AM!');
      document.getElementById('li5').style.color = 'rgba(241, 255, 251, 1)'; //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_color2
      document.getElementById('li5').style.backgroundColor = 'rgb(6, 101, 23)';
      return 1;
    } else {
    // console.log('Nonsense answer')
      alert('Please provide an answer!');
    }
  }
}

function questionSix() {
  for(let i = 0; i < 4; i++) {
    let numberGuess = parseInt(prompt(`Here is a challenge... guess my favorite number.\nIt is between 1 and 30.\nYou have ${4 - i} tries.`));
    if(numberGuess < Infinity){

      if(numberGuess >= 0 && numberGuess < 10 ){ 
        //console.log('furthest');
        alert('Way off');
      }else if(numberGuess >= 10 && numberGuess < 20){ 
        //console.log('closer');
        alert('At least 5 or more off');
      }
      else if((numberGuess >= 20 && numberGuess < 24) || (numberGuess <= 30 && numberGuess > 26)){
        //console.log('so close');
        alert('You\'re with 5');
      }else if (numberGuess === 25){
        //console.log('YOU GOT IT!');
        alert('WOW! YOU GOT IT!');
        if(i === 0){
          //console.log('AND ON YOUR FIRST TRY');
          alert('and on your first try?\nAre you psychic?');
        }
        return 1;
      }else{
        //console.log('That wasn\'t in the range...');
        alert('That wasn\'t in the range...');
      }
    }else{
      //console.log('What is not a number');
      alert('What is not a number');
    }
    if(i === 3){
      //console.log('Aww you tried... well... the answer was 25');
      alert('Aww you tried... well... the answer was 25');
    }
  }
}

function questionSeven() {
  let q7_1 = 'chick-fil-a';
  let q7_2 = 'chipotle';
  let q7_3 =  'olive garden';
  let q7_4 = 'einstein bros';
  let q7_5 =  'starbucks';
  let q7_6 =  'jack stack\'s bbq';
  let q7_7 = 'panera';
  let q7_8 = 'bonefish';
  let q7_9 = 'wendy\'s';
  let q7_10 = 'kefi';
  let q7possible = [q7_1, q7_2, q7_3, q7_4, q7_5, q7_6, q7_7, q7_8, q7_9, q7_10];


  for (let i = 0; i < 6; i++) { // we have tries
    let response = null;
    while (response === null || response === ''){ //while statement catches null or empty responses.
      response = prompt(`What is a restaurant I like?\nYou have ${6 - i} left!`); // response is created by the user and informed of tries left
    }
    if (q7possible.indexOf(response.toLocaleLowerCase()) >= 0) {
    //console.log('Correct!');
      alert('correct!!');
      alert('Here are all the options: ' + q7possible);
      return 1;
    } else { //could add SWITCH STATEMENT here for different responses based on i value
    //console.log('wrong answer');
      alert('wrong!!');
    }
    if(i === 5){
      alert('No answer was correct!!');
      alert('Here are all the options: ' + q7possible);
    }
  }
}

function startQuiz() {
//   let q1 = q2 = q3 = q4 = q5 = 0;
  let q1, q2, q3, q4, q5, q6, q7 = 0;
  q1 = questionOne();
  console.log('q1 ' + q1);
  q2 = questionTwo();
  console.log('q2 ' + q2);
  q3 = questionThree();
  console.log('q3 ' + q3);
  q4 = questionFour();
  console.log('q4 ' + q4);
  q5 = questionFive();
  console.log('q5 ' + q5);
  q6 = questionSix();
  console.log('q6 ' + q6);
  q7 = questionSeven();
  console.log('q7 ' + q7);
  let totalRight = q1 + q2 + q3 + q4 + q5 +q6 +q7;
  const storedName = localStorage.getItem('name');
  alert(`${storedName}, you got ${totalRight} correct answers.`);
  document.getElementById('li1').style.border = '1px solid rgb(255, 255, 255)';
  document.getElementById('li2').style.border = '1px solid rgb(255, 255, 255)';
  document.getElementById('li3').style.border = '1px solid rgb(255, 255, 255)';
  document.getElementById('li4').style.border = '1px solid rgb(255, 255, 255)';
  document.getElementById('li5').style.border = '1px solid rgb(255, 255, 255)';
}

myButton.onclick = () => {
  console.log('test');
  startQuiz();

};


// let correctanswer = question1 + question2;
// console.log(correctanswer +'/7')