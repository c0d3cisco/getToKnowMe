
// question functions need to be modified here

let questions = ['How old am I?', "What is my favorite pokemon?"];
let answers = [33, "Pikachu"];
let response = null;
for (let i = 0; i < questions.length; i++) {
  response = prompt(questions[i]); // response is created by the user.
  if (response === answers[i]) {
    alert('correct!!');
  } else {
    alert('Wrong : (');
  }
}
