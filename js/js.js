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
let gamersCourse = [];
let valueId = 0;
const arrId = [ '0', 'one1', 'two2', 'three3', 'four4', 'five5', 'six6', 'seven7', 'eight8', 'nine9' ]; //массив id

const crossId = ( id, player ) => document.getElementById( id ).textContent = player; // функ. получает 
                                                                                     //id и метку и заполняет соотв. клетку
                                                                          
//console.log (artInt);
//crossId( '5', artInt);
//let text = document.getElementById('five').textContent;
//console.log(text);
