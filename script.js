const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const key = document.querySelector('#key');

const listLetters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 
'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

btnEncrypt.addEventListener('click', () => {
  const textarea = document.querySelector('#text');
  const keyValue = Number(key.value);
  let newText = '';

  for (const letter of textarea.value) {
    if (!listLetters.includes(letter)) {
      continue;
    }

    const indexLetter = listLetters.findIndex((item) => item === letter);
    let newIndex = (indexLetter + keyValue) % listLetters.length;
    
    newText += listLetters[newIndex];
  }

  textarea.value = newText;
});

btnDecrypt.addEventListener('click', () => {
  const textarea = document.querySelector('#text');
  const keyValue = Number(key.value);
  let newText = '';

  for (const letter of textarea.value) {
    if (!listLetters.includes(letter)) {
      continue;
    }

    const indexLetter = listLetters.findIndex((item) => item === letter);
    let newIndex = (indexLetter - keyValue) % listLetters.length;

    if (newIndex < 0) {
      newIndex += listLetters.length;
    }

    newText += listLetters[newIndex];
  }

  textarea.value = newText;
});
