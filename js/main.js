// let son = prompt("sonni kiriting")

// if ((son % 3 == 0)&&(son % 5 == 0)){
//     document.write("FizzBuzz")
// }
// else if (son % 3 == 0) {
//     document.write("Fizz")
// }
// else if (son % 5 == 0){
//     document.write("Buzz")
// } else {
//     document.write( `szi kiritgan son xato: ${son}` )
// }
     

// alert(null || 2 || undefined);
let userName = prompt("Who's there?",);

if (userName === 'Qosim') {

  let pass = prompt('Password?' );

  if (pass === '2006') {
    alert( 'Welcome!');
  } else if (pass === null || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
