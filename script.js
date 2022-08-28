const msgInsert = document.querySelector('.input-text');
const msgResult = document.querySelector('.output-text');
const buttonCrypt = document.querySelector('.encrypt');
const buttonDecrypt = document.querySelector('.descrypt');
const buttonCopy = document.querySelector('.copy');
const bgResult = document.querySelector('.img-result-text');
const textResult = document.querySelector('.output-text');
const textNotFound = document.querySelector('.result-container')

const insertVowels = ['e', 'i', 'a', 'o', 'u'];
const outputVowels = ['enter', 'imes', 'ai', 'ober', 'ufat'];

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);
  const pattern = '[a-z]';

  if (char.match(pattern)) {
    return true;
  }
}

function crypt(msg) {
  for (let i = 0; i < insertVowels.length; i++) {
    msg = msg.replaceAll(insertVowels[i], outputVowels[i]);
  }
  return msg;
}

function decrypt(msg) {
  for (let i = 0; i < insertVowels.length; i++) {
    msg = msg.replaceAll(outputVowels[i], insertVowels[i]);
  }
  return msg;
}

function copy() {
  msgInsert.value = msgResult.value;
}

function filledResult() {
  bgResult.style.display = 'none';
  textResult.style.display = 'flex';
  textNotFound.style.display = 'none';
  buttonCopy.style.display = 'inline';
  msgInsert.value = '';
}

buttonCrypt.addEventListener('click', function () {
  if (msgInsert.value != '') {
    const encryptedText = crypt(msgInsert.value);
    msgResult.textContent = encryptedText;
    filledResult();
  }
});

buttonDecrypt.addEventListener('click', function () {
  if (msgInsert.value != '') {
    const decryptedText = decrypt(msgInsert.value);
    msgResult.textContent = decryptedText;
    filledResult();
  }
});

buttonCopy.addEventListener('click', function () {
  if (msgResult.value != '') {
    copy();
    bgResult.style.display = 'flex';
    textResult.style.display = 'none';
    textNotFound.style.display = 'flex';
    buttonCopy.style.display = 'none';
  }
});