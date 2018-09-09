//let arr = [ 1, 2, 3, 4 ] ;
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
let possibleCourse = [] ;  // массив возможных вариантов след. хода
const findArr = ( arr, elem ) => {
//	let rezult = [] ;
	let len = arr.length ;
	for ( let i = 0 ; i < len ; i += 1 ) {
	  let a = arr [ i ] ;
	  for ( let j = 0 ; j < a.length ; j += 1 ) {
			if ( a[ j ] === elem ) {
					possibleCourse.push ( delElem ( a , elem ) ) ;
			}
		}
	}
};

let artIntCourse = [];
let gamersCourse = [];
let gamer = '';
let artInt = '';
const gamerCoice = ( x, o ) => { // присвоение метки игроку
  gamer = x;
  artInt = o;
};

const beforeStartGame = () => gamer !== '' ? startGame() : alert( ' Выбери чем играешь и нажми "Играть"! ') ;

const startGame = () => {
  if ( gamer === 'o' ) {
    return  crossId ( 'five5', artInt ) ;
  }
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
let a = findArrId();
//console.log( a );
//console.log( typeof(document.getElementById('one1').textContent) );

const findContentElemById = ( arr ) => {
	let listContElemById = [];
	let len = arr.length;
    for ( let i = 0; i < len; i += 1 ) {
	   // alert( document.getElementById( arr[ i ]).textContent);
		listContElemById.push( document.getElementById( arr[ i ] ).textContent);
		//alert( document.getElementById( arr[ i ]).textContent);
	}
	return listContElemById;
};

const consLog = document.getElementById( 'consLog' );  // my helper console.log
consLog.addEventListener( 'click', consHelper );       // 
function consHelper( e ) {                           //
	console.log( gamersCourse );                    //
	console.log( artIntCourse );                    //
}



const startButton = document.getElementById( 'startButton' );
const partyO = document.getElementById( 'partyO' );
const partyX = document.getElementById( 'partyX' );
const table = document.getElementById( 'table');
partyO.addEventListener( 'click', startButtonOn );
partyX.addEventListener( 'click', startButtonOn );
function startButtonOn( e ) {                      // вкл. обраб. кнопки Играть
    startButton.addEventListener( 'click', fi );
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
function handlerCell(e){
	switch ( e.target.id ) {
	  case 'one1' :
		crossId( 'one1', gamer );
		break;
	  case 'two2' :
	    crossId( 'two2', gamer );
		break;
	}
};
//const startButtom = document.getElementById( 'startButtom' );
/*const add = document.getElementById('two2');
add.addEventListener('click', fi);*/
//add.removeEventListener('click', fi);

