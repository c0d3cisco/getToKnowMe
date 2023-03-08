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
  ans = prompt('What I born in Knoxville, TN?\nY/N');
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
    questionOne();
  }
}

function questionTwo() {
  let ans = '';
  console.log('test2');
  ans = prompt('Was I an combat medic in the arm?\nY/N');
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
    questionTwo();
  }
}

function questionThree() {
  let ans = '';
  console.log('test3');
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
    questionThree();
  }
}

function questionFour() {
  let ans = '';
  console.log('test4');
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

function questionFive() {
  let ans = '';
  console.log('test5');
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
    questionFive();
  }
}

function startQuiz() {
//   let q1 = q2 = q3 = q4 = q5 = 0;
  let q1, q2, q3, q4, q5 = 0;
  q1 = questionOne();
  q2 = questionTwo();
  q3 = questionThree();
  q4 = questionFour();
  q5 = questionFive();
  let totalRight = q1 + q2 + q3 + q4 + q5;
  const storedName = localStorage.getItem('name');
  alert(`${storedName}, you got ${totalRight} correct answers.`);
  document.getElementsByName;
}

myButton.onclick = () => {
  console.log('test');
  startQuiz();

};
