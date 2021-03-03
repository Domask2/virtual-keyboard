const rowsOrder = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Delete'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft',  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash','ArrowUp', 'ShiftRight'],
  ['ln','ControlLeft','AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

const en = [
  {
    small: '^',
    shift: null,
    code: 'ln',
  },
  {
    small: '',
    shift: '',
    code: 'Backquote',
  },
  {
    small: '1',
    shift: '!',
    code: 'Digit1',
  },
  {
    small: '2',
    shift: '@',
    code: 'Digit2',
  },
  {
    small: '3',
    shift: '#',
    code: 'Digit3',
  },
  {
    small: '4',
    shift: '$',
    code: 'Digit4',
  },
  {
    small: '5',
    shift: '%',
    code: 'Digit5',
  },
  {
    small: '6',
    shift: '^',
    code: 'Digit6',
  },
  {
    small: '7',
    shift: '&',
    code: 'Digit7',
  },
  {
    small: '8',
    shift: '*',
    code: 'Digit8',
  },
  {
    small: '9',
    shift: '(',
    code: 'Digit9',
  },
  {
    small: '0',
    shift: ')',
    code: 'Digit0',
  },
  {
    small: '-',
    shift: '_',
    code: 'Minus',
  },
  {
    small: '=',
    shift: '+',
    code: 'Equal',
  },
  {
    small: 'Backspace',
    shift: null,
    code: 'Backspace',
  },
  {
    small: 'Delete',
    shift: null,
    code: 'Delete',
  },
  {
    small: 'Tab',
    shift: null,
    code: 'Tab',
  },
  {
    small: 'q',
    shift: 'Q',
    code: 'KeyQ',
  },
  {
    small: 'w',
    shift: 'W',
    code: 'KeyW',
  },
  {
    small: 'e',
    shift: 'E',
    code: 'KeyE',
  },
  {
    small: 'r',
    shift: 'R',
    code: 'KeyR',
  },
  {
    small: 't',
    shift: 'T',
    code: 'KeyT',
  },
  {
    small: 'y',
    shift: 'Y',
    code: 'KeyY',
  },
  {
    small: 'u',
    shift: 'U',
    code: 'KeyU',
  },
  {
    small: 'i',
    shift: 'I',
    code: 'KeyI',
  },
  {
    small: 'o',
    shift: 'O',
    code: 'KeyO',
  },
  {
    small: 'p',
    shift: 'P',
    code: 'KeyP',
  },
  {
    small: '[',
    shift: '{',
    code: 'BracketLeft',
  },
  {
    small: ']',
    shift: '}',
    code: 'BracketRight',
  },
  {
    small: 'Enter',
    shift: null,
    code: 'Enter',
  },
  {
    small: 'CapsLock',
    shift: null,
    code: 'CapsLock',
  },
  {
    small: 'a',
    shift: 'A',
    code: 'KeyA',
  },
  {
    small: 's',
    shift: 'S',
    code: 'KeyS',
  },
  {
    small: 'd',
    shift: 'D',
    code: 'KeyD',
  },
  {
    small: 'f',
    shift: 'F',
    code: 'KeyF',
  },
  {
    small: 'g',
    shift: 'G',
    code: 'KeyG',
  },
  {
    small: 'h',
    shift: 'H',
    code: 'KeyH',
  },
  {
    small: 'j',
    shift: 'J',
    code: 'KeyJ',
  },
  {
    small: 'k',
    shift: 'K',
    code: 'KeyK',
  },
  {
    small: 'l',
    shift: 'L',
    code: 'KeyL',
  },
  {
    small: ';',
    shift: ':',
    code: 'Semicolon',
  },
  {
    small: "'",
    shift: '"',
    code: 'Quote',
  },
  {
    small: '\\',
    shift: '|',
    code: 'Backslash',
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftLeft',
  },
  {
    small: '<',
    shift: '>',
    code: 'IntlBackslash',
  },
  {
    small: 'z',
    shift: 'Z',
    code: 'KeyZ',
  },
  {
    small: 'x',
    shift: 'X',
    code: 'KeyX',
  },
  {
    small: 'c',
    shift: 'C',
    code: 'KeyC',
  },
  {
    small: 'v',
    shift: 'V',
    code: 'KeyV',
  },
  {
    small: 'b',
    shift: 'B',
    code: 'KeyB',
  },
  {
    small: 'n',
    shift: 'N',
    code: 'KeyN',
  },
  {
    small: 'm',
    shift: 'M',
    code: 'KeyM',
  },
  {
    small: ',',
    shift: '<',
    code: 'Comma',
  },
  {
    small: '.',
    shift: '>',
    code: 'Period',
  },
  {
    small: '/',
    shift: '?',
    code: 'Slash',
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftRight',
  },
  {
    small: 'En',
    shift: null,
    code: 'ControlLeft',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltLeft',
  },
  {
    small: ' ',
    shift: null,
    code: 'Space',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltRight',
  },
  {
    small: 'Ctrl',
    shift: null,
    code: 'ControlRight',
  },
  {
    small: '&larr;',
    shift: null,
    code: 'ArrowLeft',
  },
  {
    small: '&uarr;',
    shift: null,
    code: 'ArrowUp',
  },
  {
    small: '&darr;',
    shift: null,
    code: 'ArrowDown',
  },
  {
    small: '&rarr;',
    shift: null,
    code: 'ArrowRight',
  },
  {
    small: 'Win',
    shift: null,
    code: 'Win',
  },
];

const ru = [
  {
    small: '^',
    shift: null,
    code: 'ln',
  },
  {
    small: 'CapsLock',
    shift: null,
    code: 'CapsLock',
  },
  {
    small: '1',
    shift: '!',
    code: 'Digit1',
  },
  {
    small: '2',
    shift: '"',
    code: 'Digit2',
  },
  {
    small: '3',
    shift: '№',
    code: 'Digit3',
  },
  {
    small: '4',
    shift: ';',
    code: 'Digit4',
  },
  {
    small: '5',
    shift: '%',
    code: 'Digit5',
  },
  {
    small: '6',
    shift: ':',
    code: 'Digit6',
  },
  {
    small: '7',
    shift: '?',
    code: 'Digit7',
  },
  {
    small: '8',
    shift: '*',
    code: 'Digit8',
  },
  {
    small: '9',
    shift: '(',
    code: 'Digit9',
  },
  {
    small: '0',
    shift: ')',
    code: 'Digit0',
  },
  {
    small: '-',
    shift: '_',
    code: 'Minus',
  },
  {
    small: '=',
    shift: '+',
    code: 'Equal',
  },
  {
    small: 'Backspace',
    shift: null,
    code: 'Backspace',
  },
  {
    small: 'Delete',
    shift: null,
    code: 'Delete',
  },
  {
    small: 'Tab',
    shift: null,
    code: 'Tab',
  },
  {
    small: 'й',
    shift: 'Й',
    code: 'KeyQ',
  },
  {
    small: 'ц',
    shift: 'Ц',
    code: 'KeyW',
  },
  {
    small: 'у',
    shift: 'У',
    code: 'KeyE',
  },
  {
    small: 'к',
    shift: 'К',
    code: 'KeyR',
  },
  {
    small: 'е',
    shift: 'Е',
    code: 'KeyT',
  },
  {
    small: 'н',
    shift: 'Н',
    code: 'KeyY',
  },
  {
    small: 'г',
    shift: 'Г',
    code: 'KeyU',
  },
  {
    small: 'ш',
    shift: 'Ш',
    code: 'KeyI',
  },
  {
    small: 'щ',
    shift: 'Щ',
    code: 'KeyO',
  },
  {
    small: 'з',
    shift: 'З',
    code: 'KeyP',
  },
  {
    small: 'х',
    shift: 'Х',
    code: 'BracketLeft',
  },
  {
    small: 'ъ',
    shift: 'Ъ',
    code: 'BracketRight',
  },
  {
    small: 'Enter',
    shift: null,
    code: 'Enter',
  },
  {
    small: 'ф',
    shift: 'Ф',
    code: 'KeyA',
  },
  {
    small: 'ы',
    shift: 'Ы',
    code: 'KeyS',
  },
  {
    small: 'в',
    shift: 'В',
    code: 'KeyD',
  },
  {
    small: 'а',
    shift: 'А',
    code: 'KeyF',
  },
  {
    small: 'п',
    shift: 'П',
    code: 'KeyG',
  },
  {
    small: 'р',
    shift: 'Р',
    code: 'KeyH',
  },
  {
    small: 'о',
    shift: 'О',
    code: 'KeyJ',
  },
  {
    small: 'л',
    shift: 'Л',
    code: 'KeyK',
  },
  {
    small: 'д',
    shift: 'Д',
    code: 'KeyL',
  },
  {
    small: 'ж',
    shift: 'Ж',
    code: 'Semicolon',
  },
  {
    small: 'э',
    shift: 'Э',
    code: 'Quote',
  },
  {
    small: '\\',
    shift: '/',
    code: 'Backslash',
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftLeft',
  },
  {
    small: '/',
    shift: '|',
    code: 'IntlBackslash',
  },
  {
    small: 'я',
    shift: 'Я',
    code: 'KeyZ',
  },
  {
    small: 'ч',
    shift: 'Ч',
    code: 'KeyX',
  },
  {
    small: 'с',
    shift: 'С',
    code: 'KeyC',
  },
  {
    small: 'м',
    shift: 'М',
    code: 'KeyV',
  },
  {
    small: 'и',
    shift: 'И',
    code: 'KeyB',
  },
  {
    small: 'т',
    shift: 'Т',
    code: 'KeyN',
  },
  {
    small: 'ь',
    shift: 'Ь',
    code: 'KeyM',
  },
  {
    small: 'б',
    shift: 'Б',
    code: 'Comma',
  },
  {
    small: 'ю',
    shift: 'Ю',
    code: 'Period',
  },
  {
    small: '.',
    shift: ',',
    code: 'Slash',
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftRight',
  },
  {
    small: 'Ru',
    shift: null,
    code: 'ControlLeft',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltLeft',
  },
  {
    small: ' ',
    shift: null,
    code: 'Space',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltRight',
  },
  {
    small: 'Ctrl',
    shift: null,
    code: 'ControlRight',
  },
  {
    small: '&larr;',
    shift: null,
    code: 'ArrowLeft',
  },
  {
    small: '&uarr;',
    shift: null,
    code: 'ArrowUp',
  },
  {
    small: '&darr;',
    shift: null,
    code: 'ArrowDown',
  },
  {
    small: '&rarr;',
    shift: null,
    code: 'ArrowRight',
  },
  {
    small: 'Win',
    shift: null,
    code: 'Win',
  },
];


let elements;

function create (element, classElement, ...dataAttr) {
  const elem = document.createElement(element);
  elem.classList.add(classElement);

  dataAttr.forEach(([attr, attrValue]) => {
      if(attrValue === '') {
          elem.setAttribute(attr, '');
      } else {
          if(attr.match(/placeholder|rows|cols|spellcheck|autocorrect/)) {
              elem.setAttribute(attr, attrValue)
          } else {
              elem.dataset[attr] = attrValue
          }
      }
  });
  return elem;
}

function init(langcode) {
  container = create('div', 'keyboard', ['language', langcode]);
  return container;
}

let keyBaseArr = [];

function key(lang) {
  let keyBase = []
  let sub;
  let letter;
  let div;
  lang.forEach(key => {
      Object.keys(key).forEach(el => {

              if(el === 'code') {
                      div = create('div', 'keyboard__key', [el, key[el]])
                          if(key[el].match(/Control|arr|Alt|Shift|Tab|Back|Del|Enter|Caps|Win|ln/)) {
                              div.dataset['fn'] = true;
                          } else {
                              div.dataset['fn'] = false;
                          }
                  }
              if(el === 'shift') {
                  if(key[el]) {
                      if(key[el].match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)) {
                          sub = create('div', 'sub');
                          sub.innerHTML = key[el];
                      } else {
                          // sub = create('div', 'sub');
                          // sub.innerHTML = key[el];
                      }
                  } else {
                      sub = create('div', 'sub');
                      sub.innerHTML = '';
                  }
              }

              if(el === 'small') {
                  letter = create('div', 'letter');
                  letter.innerHTML = key[el]; 
              }  
      }) 
      div.appendChild(sub)
      div.appendChild(letter)
      keyBase.push(div);
      
  });
  keyBaseArr = keyBase;
  return keyBase;
}

function generateLayout (lang) {
  rowsOrder.forEach((row,i) => {
      const rowElement = create('div', 'keyboard__row', ['row', i+1]);
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;
      document.querySelector('.keyboard').appendChild(rowElement);

      row.forEach((code) => {

          let Wrkey = key(lang)
              Wrkey.forEach(codeKey => { 
              if(code === codeKey.getAttribute('data-code')) {
                  rowElement.appendChild(codeKey);
              }
          });

      })
  });
  document.querySelector('[data-code=KeyM] .sub').remove();
  document.querySelector('[data-code=KeyL] .sub').remove();
  document.querySelector('[data-code=KeyP] .sub').remove();
}

const main = create('div', 'main');
const textArea = create('textarea', 'output', ['placeholder', 'Вводите текст'], ['rows', 5], ['cols', 50]);
const btn = create('button', 'showKeyboard');
btn.innerHTML = 'Open KeyBoard'
const keyboard = init('en');

document.querySelector('body').prepend(main);
main.prepend(textArea);
main.appendChild(btn);
main.appendChild(keyboard);
generateLayout(en);

let isCaps = false;
let shiftKey = false;
let isSound = true;
let isSpecch = false;


document.querySelector('.showKeyboard').addEventListener('click', () => {
    document.querySelector('.keyboard').classList.toggle('hide');
});

document.querySelector('[data-code=Backquote] .letter').innerHTML = `<img src="./sound.png" alt="" class="sound">`;
document.addEventListener('keydown', handleEvent);
document.addEventListener('keyup', handleEvent);


document.querySelector('.keyboard').addEventListener('mouseup', (e)=> {
  e.stopPropagation()
  let code = e.target.parentNode.getAttribute('data-code');
  const { type } = e;
  try {
    handleEvent({code, type: e.type})
  } 
  catch {
    console.log()
  }
});


document.querySelector('[data-code=Backquote]').addEventListener('click', () => {
  if(isSound) {
    isSound = false;
    document.querySelector('[data-code=Backquote] .letter').innerHTML = `<img src="./no-sound.png" alt="" class="sound">`;
  } else if(!isSound) {
    isSound = true;
    document.querySelector('[data-code=Backquote] .letter').innerHTML = `<img src="./sound.png" alt="" class="sound">`;
  }
})

document.querySelector('[data-code=ln] .letter').innerHTML = `<img src="./microphone.png" alt="" class="microphone">`;


document.querySelector('.keyboard').addEventListener('mousedown', (e)=> {
  e.stopPropagation()
  let code = e.target.parentNode.getAttribute('data-code');
  const { type } = e;
  try {
    handleEvent({code, type: e.type})
  } 
  catch {
    console.log()
  }
});

document.querySelector('[data-code=Space]').addEventListener('mousedown', (e)=> {
  let key = document.querySelector('[data-code=Space]');
  printToOutput(key, 'Space')
  playSound(e, 'Space', 'Space', isSound);
  document.querySelector('[data-code=Space]').classList.add('active')
});

document.querySelector('[data-code=Space]').addEventListener('mouseup', (e)=> {
  playSound(e, 'Space', 'Space', isSound);
  document.querySelector('[data-code=Space]').classList.remove('active')
});

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'en-US';
  let textarea = document.querySelector('.output');

  function result(e) {
      const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

      textarea.value = transcript;
  }

  function start() {
      recognition.start();
  }

  document.querySelector('[data-code=ln]').addEventListener('click', () => { 
    if(!isSpecch) {
      let lang = document.querySelector('.keyboard').getAttribute('data-language')
      
      if(lang === 'en') {
        recognition.lang = 'en-US';
      } else if (lang === 'ru') {
        recognition.lang = 'ru-RU';
      }
      
      console.log(document.querySelector('.keyboard').getAttribute('data-language'))
    
      recognition.start();
    
      recognition.addEventListener('result', result);
      recognition.addEventListener('end', start);
      
    isSpecch = true
    document.querySelector('[data-code=ln]').classList.add('active')

    } else if (isSpecch) {
      document.querySelector('[data-code=ln]').classList.remove('active')
      isSpecch=false

      recognition.removeEventListener('result', result);
      recognition.removeEventListener('end', start);
      
      recognition.stop();
      
      
    }
  });
  

function playSound(e, types, sound, isSound) {
  if(!isSound) return
  const key = document.querySelector(`[data-code=${types}]`);
  let audio = document.createElement('audio');
  key.appendChild(audio);
  audio.src = `./music/${sound}.mp3`; 

  audio.currentTime = 0;
  audio.play();
}

function playAllSound() {
  if(!isSound) return
  let leng = document.querySelector('.keyboard').getAttribute('data-language');
  
  let audio = document.createElement('audio');
  document.querySelector('.showKeyboard').appendChild(audio);
  leng==='ru' ? audio.src = `./music/key.mp3`: audio.src = `./music/keyRu.mp3`

  audio.currentTime = 0;
  audio.play();
}


let keyArr = document.querySelectorAll('.keyboard__key');

function handleEvent(e){

// let keyObj = Array.from(keyArr).find((el)=> el.dataset.codes = e.code);

if (e.stopPropagation) e.stopPropagation();
const { code, type } = e;
document.querySelector('.output').focus();

  let keyObj = document.querySelector(`[data-code='${code}']`);

if (type.match(/keydown|mousedown/)) {
  document.querySelector('.keyboard').classList.remove('hide');

  if(code === 'Enter') {
    playSound(e, 'Enter', 'Enter', isSound);
  }

  if(code === 'Backquote' && isSound) {
    isSound = false;
    document.querySelector('[data-code=Backquote] .letter').innerHTML = `<img src="./no-sound.png" alt="" class="sound">`;
  } else if(code === 'Backquote' && !isSound) {
    isSound = true;
    document.querySelector('[data-code=Backquote] .letter').innerHTML = `<img src="./sound.png" alt="" class="sound">`;
  }

  if (!type.match(/mouse/)) e.preventDefault();

  if (code === 'ControlLeft') switchLanguage();

  if (code.match(/ShiftLeft/)) {
    shiftKey = true;
    playSound(e, 'ShiftLeft', 'Shift', isSound);
    playSound(e, 'ShiftRight', 'Shift', isSound);
  }
  
  if (code.match(/ShiftRight/)) {
    shiftKey = true;
    playSound(e, 'ShiftLeft', 'Shift', isSound);
    playSound(e, 'ShiftRight', 'Shift', isSound);
  }

  if(code.match(/Space/)) {
    console.log('space')
    playSound(e, 'Space', 'Space', isSound);
  }
  
  if (shiftKey) switchUpperCase(true);

  if (code.match(/Caps/) && !isCaps) {
  isCaps = true;
  switchUpperCase(true);
  document.querySelector('[data-code=CapsLock]').classList.add('active');
  playSound(e, 'CapsLock', 'backspace', isSound);
} else if (code.match(/Caps/) && isCaps) {
  isCaps = false;
  switchUpperCase(false);
  document.querySelector('[data-code=CapsLock]').classList.remove('active');
  playSound(e, 'CapsLock', 'backspace', isSound);
}
  
  if (!isCaps) {
    printToOutput(keyObj, shiftKey ? keyObj.firstElementChild : keyObj.lastElementChild); 
    
  } else if (isCaps) {
    if(shiftKey) {
      if(keyObj.firstChild.className === "letter") printToOutput (keyObj, keyObj.firstElementChild)
      else if (keyObj.firstChild.className === "sub") printToOutput(keyObj, keyObj.lastElementChild);
      
    } else {
      if(keyObj.firstChild.className === "letter") printToOutput (keyObj, keyObj.firstElementChild)
      else if (keyObj.firstChild.className === "sub") printToOutput(keyObj, keyObj.lastElementChild);
      
     
    }
  }

} else if (type.match(/keyup|mouseup/)) {

 

  if (code.match(/Shift/)) {
    shiftKey = false;
    switchUpperCase(false);
  }
}

keyArr.forEach(el=>{
    // color button
    if(code === el.getAttribute('data-code') && type.match(/keydown|mousedown/)) {
      if(!type.match(/mouse/)) e.preventDefault();
      if(code === 'CapsLock') return;
      el.classList.add('active');
      playAllSound()
    } else if(code === el.getAttribute('data-code') && type.match(/keyup|mouseup/)) { 
      if(!type.match(/mouse/)) e.preventDefault();
      if(code === 'CapsLock') return;
      el.classList.remove('active');
    }
  });
}


let langIdx;
const langAbbr = ['en', 'ru'];

switchLanguage = () => {

langIdx = langAbbr.indexOf(document.querySelector('.keyboard').dataset.language);

function getKeyLanguage(lang) {
   document.querySelectorAll('.keyboard__key').forEach ((elem)=> {
 
    if(elem.getAttribute('data-code').indexOf('Key')===0) {
        elem.lastElementChild.innerHTML = '';
        elem.firstElementChild.innerHTML = ''; 
    }
    lang.forEach(el=> {
          if(elem.getAttribute('data-code') === el.code) {

            if(el.shift !== null) {
              if(el.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
                elem.firstElementChild.innerHTML = el.shift;
                elem.lastElementChild.innerHTML = el.small; 
                } else if(el.shift.match(/[a-zA-Zа-яА-ЯёЁ]/g)) {
                  if (el.shift.match(/Q|W|E|R|T|Y|U|I|O|A|S|D|F|G|H|J|K|Z|X|C|V|B|N|M|/)) {
                    if(el.shift.match(/Х|Ъ|Ж|Э|Б|Ю|M/)) {
                      elem.lastElementChild.innerHTML = el.small;
                      elem.firstElementChild.innerHTML = '';
                    }
                    elem.lastElementChild.innerHTML = el.small;
                   } else {
                     elem.lastElementChild.innerHTML = el.small;
                    elem.firstElementChild.innerHTML = '';
                   }
                  
                } 
              }  
          } 
    });
  });

  if(isCaps) switchUpperCase(true);

}

if(langIdx === 1) {

  getKeyLanguage(en);
  document.querySelector('.keyboard').setAttribute('data-language','en');
  document.querySelector('[data-code = ControlLeft] .letter').innerHTML = 'En';
  

} else if (langIdx === 0) {

  getKeyLanguage(ru);
  try {
  document.querySelector('.keyboard').setAttribute('data-language','ru');
  document.querySelector('[data-code = ControlLeft] .letter').innerHTML = 'Ru';
  document.querySelector('[data-code=BracketLeft] .sub').remove();
  document.querySelector('[data-code=BracketRight] .sub').remove();
  document.querySelector('[data-code=Semicolon] .sub').remove();
  document.querySelector('[data-code=Quote] .sub').remove();
  document.querySelector('[data-code=Comma] .sub').remove();
  document.querySelector('[data-code=Period] .sub').remove();
  }
  catch {
    console.log('Все хорошо)')
  }

}

}

switchUpperCase = (flag) => {

  // Флаг - чтобы понимать, мы поднимаем регистр или опускаем
  if (flag) {
    // Мы записывали наши кнопки в keyButtons, теперь можем легко итерироваться по ним
    document.querySelectorAll('.keyboard__key').forEach((button) => {
      // Если у кнопки есть спецсивол - мы должны переопределить стили
       if (button.firstElementChild.innerHTML!=='' && button.firstChild.className === 'sub') {
        // Если только это не капс, тогда поднимаем у спецсимволов
         if (shiftKey) {
          button.firstElementChild.classList.add('sub-active');
          button.lastElementChild.classList.add('sub-inactive');
           }
       }
      // Не трогаем функциональные кнопки
      // И если капс, и не шифт, и именно наша кнопка без спецсимвола
        if ((button.getAttribute('data-fn')==='false') && isCaps && !shiftKey && button.firstChild.className === 'letter') {
        // тогда поднимаем регистр основного символа letter
        button.firstElementChild.innerHTML = button.firstElementChild.innerHTML.toUpperCase(); 
      // Если капс и зажат шифт
      } 
       else if ((button.getAttribute('data-fn')==='false') && isCaps && shiftKey) {
    
         button.firstElementChild.innerHTML = button.firstElementChild.innerHTML.toLowerCase();
      // а если это просто шифт - тогда поднимаем регистр у основного символа
      // только у кнопок, без спецсимвола --- там уже выше отработал код для них
      } else if ((button.getAttribute('data-fn')==='false') && button.firstChild.className === 'letter') {
        button.firstElementChild.innerHTML = button.firstElementChild.innerHTML.toUpperCase(); 
      }
      });
  } 
  else {
    // опускаем регистр в обратном порядке
    document.querySelectorAll('.keyboard__key').forEach((button) => {
      // Не трогаем функциональные кнопки
      // Если есть спецсимвол
      if ( (button.firstElementChild.innerHTML!=='') && (button.getAttribute('data-fn')==='false')) {
        // то возвращаем в исходное
        button.firstElementChild.classList.remove('sub-active');
        button.lastElementChild.classList.remove('sub-inactive');
        // если не зажат капс
        if (!isCaps) {
          // то просто возвращаем основным символам нижний регистр
          button.firstElementChild.innerHTML = button.firstElementChild.innerHTML.toLowerCase();
        } else if (!isCaps) {
          // если капс зажат - то возвращаем верхний регистр
          button.firstElementChild.innerHTML = button.firstElementChild.innerHTML.toUpperCase();
        }
      // если это кнопка без спецсимвола (снова не трогаем функциональные)
      } 
      else if ((button.firstChild.className === 'letter')) {
        // то если зажат капс
        if (isCaps) {
          // возвращаем верхний регистр
          button.firstElementChild.innerHTML = button.firstElementChild.innerHTML.toUpperCase();
        } else {
          // если отжат капс - возвращаем нижний регистр
          button.firstElementChild.innerHTML = button.firstElementChild.innerHTML.toLowerCase();
        }
      }
    });
   }

}

let output = document.querySelector('.output');
function printToOutput (key, symbol) {
  console.log(key)
  console.log(symbol)
  let cursorPos = output.selectionStart;
  const left = output.value.slice(0, cursorPos);
  const right = output.value.slice(cursorPos);
  const textString = {
    Tab: () => {
      output.value = `${left}\t${right}`;
      cursorPos += 1;
    },
    ArrowLeft: () => {
      cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
    },
    ArrowRight: () => {
      cursorPos += 1;
    },
    ArrowUp: () => {
      const positionFromLeft = output.value.slice(0, cursorPos).match(/(\n).*$(?!\1)/g) || [[1]];
      cursorPos -= positionFromLeft[0].length;
    },
    ArrowDown: () => {
      const positionFromLeft = output.value.slice(cursorPos).match(/^.*(\n).*(?!\1)/) || [[1]];
      cursorPos += positionFromLeft[0].length;
    },
    Enter: () => {
      output.value = `${left}\n${right}`;
      cursorPos += 1;
    },
    Delete: () => {
      output.value = `${left}${right.slice(1)}`;
    },
    Backspace: () => {
      output.value = `${left.slice(0, -1)}${right}`;
      cursorPos -= 1;
    },
    Space: () => {
      output.value = `${left} ${right}`;
      cursorPos += 1;
    }

  };

  let keyCode = key.getAttribute('data-code');
  let keyFn = key.getAttribute('data-fn');
  let sym = symbol.textContent;
 

  if (textString[keyCode]) textString[keyCode]();
  else if (keyFn==='false') {
    cursorPos += 1;
    output.value = `${left}${sym || ''}${right}`;
  }

  output.setSelectionRange(cursorPos, cursorPos);

}

