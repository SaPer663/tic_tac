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

const crossId = ( id, player ) => document.getElementById( id ).textContent =
 player; // функ. получает id и метку и заполняет соотв. клетку
let gamersCourse = [];
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
//let b = findContentElemById(findArrId());
//console.log(b);
//;
//console.log( findContentElemById( findArrId() ) );
const show = () => alert( document.getElementById('one1').textContent);
document.addEventListener("click",handler,true);
function handler(e){
    if(e.target.querySelector('cell')) {
      e.stopPropagation();
      e.preventDefault();
    }
};
//handler(e);
let a = document.querySelector('cell');
console.log(a.id);
