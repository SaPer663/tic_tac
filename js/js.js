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

const playerX = ( i ) => {

	i = 'x';

};
const playerO = (i) => {
	i = 'o';
};

playerX( gamer );
console.log(gamer);
playerX( artInt, gamer );
console.log( artInt );
let gamersCourse = [];
const arrId = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
getElementById('id')
