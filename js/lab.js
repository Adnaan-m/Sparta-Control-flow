var bool = true;
var name = 'Adnaan';
var num = 1;
// Boolean only runs if the statement is truthy i.e. the statement is not empty, has a value..
// if (!num){
// console.log('condition is truthy');
// }
//
// // OR ---if you have one outcome no curly's required.
//
// if (!num) console.log('condition is truthy');
// // ----------------------------------------------
// if (num) {
//   console.log('condition is truthy');
// }
// else{ console.log('condition is not truthy');
// }
// ----------------------------------------------

// if(num === 1 && bool === true){
//   console.log('condition is truthy');
// }
// else {
//   console.log('condition is falsey');
// }

// ---------------------------------------------- Switch

switch (name) {
  case 'James':
  console.log('Name is James');
    break;
    case 'Zara':
    case 'Sarah':
  console.log('Name is Zara or Sarah');
    break;
  case 'Baine':
  console.log('Name is Baine');
    break;
  case 'Snow':
  console.log('Name is Snow');
    break;
  default:
  console.log('no match.');

}
