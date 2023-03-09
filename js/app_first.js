// for name capture

nameCapture();

function nameCapture() {
  let name = '';

  name = prompt('Hello. What is your name?');
  if (name === null || name === '' || name === ' ') {
    alert('Please provide an answer!');
    nameCapture();
  }
  else {
    alert(`Welcome, ${name} :)`);
    localStorage.setItem('name', name); //Concept came from here https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
    document.write(`<p>Ready to try the quiz, ${name}?</p>`);
  }
}


