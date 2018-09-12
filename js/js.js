let list = [[ 1, 2, 20, 10 ],[1,2,],[1,2,3,]] ;
const most = ( acc, b ) => { // сравнение кто меньше
	if ( acc > b ) {
	  acc = b ;
	}
	return acc;
};
const giveLengths = ( array ) => array.length;
const giveArr = ( ar ) => ar.length === magic;
const magic = list.map(giveLengths).reduce(most); // проверка какой массив короче
console.log(list.filter(giveArr));

const delElem = ( arr, elem ) => {
	let len = arr.length ;
	let rezult = 0 ;
	for ( let i = 0 ; i < len ; i += 1) {
		if ( arr[i] === elem ) {
		  arr.splice( i, 1 ) ;
		}
	}
	return arr ;
} ;

const arrMain = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 1, 4, 7 ],
	[ 2, 5, 8 ], [ 3, 6, 9 ], [1, 5, 9 ], [ 3, 5, 7 ] ] ;
//let possibleCourse = [] ;                     // массив возможных вариантов след. хода
const findArr = ( arr, elem ) => {            // функ. выбирает из данного
	let len = arr.length ;
	let possibleCourse = [] ;                 //массива массивы содерж. данный
	for ( let i = 0 ; i < len ; i += 1 ) {    //элемент и возвр.
	  let a = arr [ i ] ;                     //эти массивы без элемента
	  for ( let j = 0 ; j < a.length ; j += 1 ) {
			if ( a[ j ] === elem ) {
					possibleCourse.push ( delElem ( a , elem ) ) ;
			}
		}
	}
	return possibleCourse;
};
const mergArr = (...args) => { //  [[],[]], [[],[]] ==> [[],[],[],[]]
	let argLen = args.length;
	let arrElem = [];
	const pushArr = ( arR ) => {
		let arLen = arR.length;
		for ( let i = 0; i < arLen; i += 1 ) {
			arrElem.push( arR[ i ] );
			}
		};
	for ( let i = 0; i < argLen; i += 1 ) {
		pushArr( args[ i ] );
		}
	return arrElem;
};




//const checkOnFilling = () =>
const conversion = ( id, arr ) => {
	switch ( id ) {
		case 'one1' :
		arr.push( 1 );
		break;
		case 'two2' :
		arr.push( 2 );
		break;
		case 'three3' :
		arr.push( 3 );
		break;
		case 'four4' :
		arr.push( 4 );
		break;
		case 'five5' :
		arr.push( 5 );
		break;
		case 'six6' :
		arr.push( 6 );
		break;
		case 'seven7' :
		arr.push( 7 );
		break;
		case 'eight8' :
		arr.push( 8 );
		break;
		case 'nine9' :
		arr.push( 9 );
		break;
		default :
		alert( 'Что то не то с функ. conversion' );
		}
};
const crossId = ( id, player ) => {
	document.getElementById( id ).textContent = player; // функ. получает id и метку и заполняет соотв. клетку
	if ( player === gamer ) {
	  conversion( id, gamersCourse );
	} else if ( player === artInt ) {
	  conversion( id, artIntCourse );
	} else {
	  alert( 'What is wrong crossId');
	}
};
let valueId = 0;
const arrId = [ '0', 'one1', 'two2', 'three3', 'four4', 'five5', 'six6',
'seven7', 'eight8', 'nine9' ]; //массив id
//let listElemWithId = [];
const findArrId = () => { // функ. собирает cell с id в массив
	let arr = document.getElementsByClassName( ' cell ');
	let listElemWithId = [];
	for ( let i = 0; i < arr.length; i += 1 ) {
	  if ( arr[ i ].id ) {
	    listElemWithId.push( arr[ i ].id)
	  }
	  }
	return listElemWithId;
};


const findContentElemById = ( arr ) => {
	let listContElemById = [];
	let len = arr.length;
    for ( let i = 0; i < len; i += 1 ) {
		listContElemById.push( document.getElementById( arr[ i ] ).textContent);
	}
	return listContElemById;
};



const consLog = document.getElementById( 'consLog' );  // my helper console.log
consLog.addEventListener( 'click', consHelper );       //
function consHelper( e ) {                           //
	console.log( 'gamer ' + gamersCourse );          //
	console.log( 'artInt ' + artIntCourse );        //
}

//                        ДО НАЧАЛА ИГРЫ

let artIntCourse = []; // массив сделан. ходов компьт.
let gamersCourse = []; // массив сделан. ходов игрока
let gamer = '';
let artInt = '';
const startButton = document.getElementById( 'startButton' );
const partyO = document.getElementById( 'partyO' );
const partyX = document.getElementById( 'partyX' );
const table = document.getElementById( 'table');
const gamerCoice = ( x, o ) => { // присвоение метки игроку
  gamer = x;
  artInt = o;
};

const beforeStartGame = () => gamer !== '' ? startGame() : alert( ' Выбери чем играешь и нажми "Играть"! ') ;

const startGame = () => {
  if ( gamer === 'o' ) {
    return  crossId ( 'five5', artInt ) ;
  }
	console.log( ' Ваш ход' );
};

        //           НАЧАЛО ИГРЫ, ПЕРВЫЙ ХОД


const isEqual = ( arrA, arrB ) => arrA.length === arrB.length ?  true  :  false ; //проверка на равенство
const isNull = ( fun ) => fun ? startGame() : console.log('Ваш ход');              // на равенство null

function coiseArr( e ) {
	isNull(isEqual( gamersCourse, artIntCourse ));
}
//const h1 = document.getElementById( 'startButton' );
startButton.addEventListener( 'click', coiseArr );


partyO.addEventListener( 'click', startButtonOn );
partyX.addEventListener( 'click', startButtonOn );
function  startButtonOn( e ) {
	startButton.addEventListener( 'click', fi );  // вкл. обраб. кнопки Играть
};
table.addEventListener('click',handler,true);  // обработчик кликов в обл. табл.
function handler(e){  // функ. откл. клик в ячейках табл.
	console.log('ready');
	e.stopPropagation();
};
function fi(e) {
	console.log( 'ФИ');
	return table.removeEventListener('click',handler,true); // функ. вкл. клик в ячейках табл.
};

table.addEventListener("click", handlerCell);
function  handlerCell(e) {
	switch ( e.target.id ) {
	  case 'one1' :
		crossId( 'one1', gamer );
		break;
	  case 'two2' :
	    crossId( 'two2', gamer );
		break;
	}
};
