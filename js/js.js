/* global document:true alert:true */
//                        ДО НАЧАЛА ИГРЫ

const artIntCourse = []; // массив сделан. ходов компьт.
const gamersCourse = []; // массив сделан. ходов игрока
const totalArr = [];
let gamer = '';
let artInt = '';
const startButton = document.getElementById('startButton');
const partyO = document.getElementById('partyO');
const partyX = document.getElementById('partyX');
const table = document.getElementById('table');
const resultWin = document.getElementById('result');

const arrMain = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
  [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

//                  логика игры

const most = (acc, b) => { // сравнение кто меньше
  let a = acc;
  if (acc > b) {
    a = b;
  }
  return a;
};

const giveLengths = array => array.length;

const isGood = (arrOne, arrTwo) => { // равны ли массивы
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  const res = [];
  for (let i = 0; i < arrOne.length; i += 1) {
    if (arrOne[i] === arrTwo[i]) {
      res.push(1);
    }
  }
  return res.length === 3;
};

const isSmaller = (arr) => { // функ приним [[],[]] и возвр наим массив
  if (arr.length < 1) {
    return 'very_small';
  }
  const comparing = arr.map(giveLengths).reduce(most);
  const res = arr.filter(i => i.length === comparing);
  if (isGood(res, arr)) {
    return arr;
  }
  return res;
};

const whoSmaller = (arrA, arrB) => {
  const a = arrA[0].length;
  const b = arrB[0].length;
  if (a >= b) {
    return arrB;
  }
  return arrA;
};

const correctSmall = (arrSmallA, arrSmallB) => {
  const arrA = isSmaller(arrSmallA);
  const arrB = isSmaller(arrSmallB);
  if (arrA === 'very_small') {
    return arrB;
  }
  if (arrB === 'very_small') {
    return arrA;
  }
  const smaller = whoSmaller(arrA, arrB);
  return smaller;
};

const delElem = (arr, elem) => {
  function isElem(num) {
    return num !== elem;
  }
  return arr.filter(isElem);
};


const isWin = (arrContender, arrWiner) => arrWiner.some((i) => { // проверяет
  if (isGood(i, arrContender)) { //  [].includes([])
    return true;
  }
  return false;
});

const probableWiner = (arrWin, arrCourses) => { // определят содержет ли
  let res = [];
  return arrWin.some((item) => { // массив ходов игрока массивы возм выигрышей
    item.forEach((i) => {
      if (arrCourses.includes(i)) {
        res.push(i);
      }
    });
    if (isWin(res, arrWin)) {
      return true;
    }
    res = [];
    return false;
  });
};

const delArrs = (arr, elem) => {
  function isArr(num) {
    return !num.includes(elem);
  }
  return arr.filter(isArr);
};

const delArr = (arr, arrelem) => { // функ удаляет масс. содерж. элементы
  let res = arr;
  arrelem.forEach((item) => { res = delArrs(res, item); });
  return res;
};

const delElemTwo = (arr, arrElem) => {
  let result = arr;
  arrElem.forEach((item) => { result = delElem(result, item); });
  return result;
};


const toTal = (arr, arrElem) => { // функ возвр [[],[]]
  const possTotal = []; // в которых нет данных элем
  arr.forEach((itema) => {
    const f = delElemTwo(itema, arrElem);
    if (itema.length !== f.length) {
      possTotal.push(f);
    }
    return possTotal;
  });
  return possTotal;
};

const toTalWith = (arr, arrElem) => { // функ возвр [[],[]]
  const possTotal = []; // в которых нет данных элем + all
  arr.forEach((itema) => {
    const f = delElemTwo(itema, arrElem);
    possTotal.push(f);
  });
  return possTotal;
};

function randomElem(arr) { // случ. элемент массива
  if (typeof arr !== 'object') {
    return arr;
  }
  if (arr.length <= 1) {
    return arr[0];
  }
  const len = arr.length;
  const max = len - 1;
  const min = 0;
  return arr[Math.floor(Math.random() * (max - min + 1)) + min];
}


const conversion = (id, arr) => {
  switch (id) {
    case 'one1':
      arr.push(1);
      break;
    case 'two2':
      arr.push(2);
      break;
    case 'three3':
      arr.push(3);
      break;
    case 'four4':
      arr.push(4);
      break;
    case 'five5':
      arr.push(5);
      break;
    case 'six6':
      arr.push(6);
      break;
    case 'seven7':
      arr.push(7);
      break;
    case 'eight8':
      arr.push(8);
      break;
    case 'nine9':
      arr.push(9);
      break;
    default:
      alert('Что то не то с функ. conversion');
  }
};

const reconversion = (id) => {
  let result = 0;
  switch (id) {
    case 1:
      result = 'one1';
      break;
    case 2:
      result = 'two2';
      break;
    case 3:
      result = 'three3';
      break;
    case 4:
      result = 'four4';
      break;
    case 5:
      result = 'five5';
      break;
    case 6:
      result = 'six6';
      break;
    case 7:
      result = 'seven7';
      break;
    case 8:
      result = 'eight8';
      break;
    case 9:
      result = 'nine9';
      break;
    default:
      alert('Что то не то с функ. conversion');
  }
  return result;
};

const crossId = (id, player) => {
  if (totalArr.includes(id)) {
    return;
  }
  totalArr.push(id);
  document.getElementById(id).textContent = player; // функ. получает id и
  if (player === gamer) { // метку и заполняет соотв. клетку
    conversion(id, gamersCourse);
  } else if (player === artInt) {
    conversion(id, artIntCourse);
  } else {
    alert('What is wrong crossId');
  }
};

function merg(arr1, arr2) {
  const result = arr1.concat(arr2);
  return result;
}

function consHelper(e) {
  console.log(`gamer ${gamersCourse}`);
  console.log(`artInt ${artIntCourse}`);
  console.log(`total ${totalArr}`);
  /* console.log(w);
  console.log(ww);
  console.log(isSmaller(www)); */
  const hoi = (toTal(arrMain, [7, 4, 9]));
  //  console.log(toTalWith(hoi, [6]));
  const s = delArr(hoi, [5, 6]);
  // console.log(randomElem(randomElem(s)));
}

const consLog = document.getElementById('consLog'); // my helper console.log
consLog.addEventListener('click', consHelper); //


const startGame = () => {
  if (gamer === 'o') {
    return crossId('five5', artInt);
  }
  return console.log(' Ваш ход');
};

//                   НАЧАЛО ИГРЫ, ПЕРВЫЙ ХОД


const isEqual = (arrA, arrB) => (arrA.length === arrB.length);// проверка на равенство

const isNull = fun => (fun ? startGame()
  : console.log('!isNull')); // на равенство null

function coiseArr(e) { // hard beginning game
  isNull(isEqual(gamersCourse, artIntCourse));
}
const h1 = document.getElementById('h1');
// startButton.addEventListener( 'click', coiseArr );

//                механика игры


function removeButtonsOX(e) {
  partyO.removeEventListener('click', startButtonOn);
  partyO.removeEventListener('click', gamerCoiceO);
  partyX.removeEventListener('click', startButtonOn);
  partyX.removeEventListener('click', gamerCoiceX);
  startButton.removeEventListener('click', removeButtonsOX);
  console.log('off-O  off-X');
}

function handler(e) { // функ. откл. клик в ячейках табл.
  console.log('ready');
  e.stopPropagation();
}

function fi(e) {
  console.log('ФИ');
  startButton.removeEventListener('click', coiseArr);
  startButton.removeEventListener('click', fi);
  table.removeEventListener('click', handler, true); // функ. вкл. клик в ячейках табл.
}

function startButtonOn(e) {
  startButton.addEventListener('click', coiseArr); // up
  startButton.addEventListener('click', fi); // откл. обраб. кнопки Играть
  startButton.addEventListener('click', removeButtonsOX); // откл. кнопки Х О
}

function gamerCoiceX(e) {
  gamer = 'x';
  artInt = 'o';
  partyO.style.borderBottomColor = 'buttonface';
  partyX.style.borderBottomColor = '#7D7F87'; // '#6A81E7';
  console.log('gamer = X');
}

function gamerCoiceO(e) {
  gamer = 'o';
  artInt = 'x';
  partyX.style.borderBottomColor = 'buttonface';
  partyO.style.borderBottomColor = '#7D7F87'; // '#6A81E7';
  console.log('gamer = O');
}


partyO.addEventListener('click', startButtonOn); // вкл кнопку играть
partyO.addEventListener('click', gamerCoiceO); //   присв. игроку "О"

partyX.addEventListener('click', startButtonOn); // вкл кнопку играть
partyX.addEventListener('click', gamerCoiceX); // присв. игроку "Х"

table.addEventListener('click', handler, true); // обработчик кликов в обл. табл.

function stopGame(value) {
  table.addEventListener('click', handler, true);
  const upper = value.toUpperCase();
  if (value !== 'Draw!') {
    resultWin.textContent = `${upper} Win!`;
    resultWin.style.display = 'block';
    return;
  }
  resultWin.textContent = `${value}`;
  resultWin.style.display = 'block';
}

const whoWiner = (artIntArr, gamerArr) => {
  if (probableWiner(arrMain, artIntArr)) {
    return stopGame(artInt);
  }
  if (probableWiner(arrMain, gamerArr)) {
    return stopGame(gamer);
  }
  return false;
};

function check(value) {
  const who = whoWiner(artIntCourse, gamersCourse);
  if ((!who && value === 'very_small') || (!who && totalArr.length > 8)) {
    return stopGame('Draw!');
  }
  return false;
}

function getSmall() {
  const ant = delArr(toTal(arrMain, artIntCourse), gamersCourse);
  console.log(`ant${ant}`);
  const gam = delArr(toTal(arrMain, gamersCourse), artIntCourse);
  console.log(`gam${gam}`);
  const www = merg(ant, gam);
  console.log(`www${www}`);
  if ((ant.length < 1 && gam.length > 1) || (ant.length > 1 && gam.length < 1)) {
    return isSmaller(www);
  }
  const small = correctSmall(gam, ant);
  console.log(`small${small}`);
  return small;
}

function isSmall(valueSmall) {
  if (valueSmall !== 'very_small') {
    const rando = randomElem(randomElem(valueSmall));
    console.log(`rando${rando}`);
    const isId = reconversion(rando);
    console.log(`isId${isId}`);
    crossId(isId, artInt);
    if (!whoWiner(artIntCourse, gamersCourse)) {
      return check(valueSmall);
    }
    return console.log(`isSmall  ${ whoWiner(artIntCourse, gamersCourse)}`);
  }
  return check(valueSmall);
}

function artIntNull() {
  const rando = randomElem(randomElem(arrMain));
  console.log(`rando${rando}`);
  const isId = reconversion(rando);
  console.log(`isId${isId}`);
  crossId(isId, artInt);
  return console.log(`artIntNull  ${ whoWiner(artIntCourse, gamersCourse)}`);
}

function variation() {
  table.removeEventListener('click', handler, true);
  if (artIntCourse.length < 1) {
    return artIntNull();
  }
  const win = whoWiner(artIntCourse, gamersCourse);
  if (win === false) {
    return isSmall(getSmall());
  }
  return console.log(whoWiner(artIntCourse, gamersCourse));
}

function handlerCell(e) {
  if (e.target.id) {
    crossId(e.target.id, gamer);
    table.addEventListener('click', handler, true);
    setTimeout(variation, 1500);
  }
}

table.addEventListener('click', handlerCell);


function isHere(num) {
  const random = randomElem(randomElem(arrMain));
  return num === random;
}
// console.log(totalArr.some(isHere));

function rand(e) {
  console.log(randomElem(randomElem(www)));
}
h1.addEventListener('click', rand);
