var me = {
}

me.firstName = 'Kelvan'
console.log(me.firstName);

me["lastName"] = 'Ince'
console.log(me.lastName);

me.fullName = function() {
  return this['firstName'] + ' ' + this.lastName
}

// var numbers = [1, 2, 3, 4, 5]
// var oddNumbers = numbers.filter(function() {
//   for (n in numbers) {
//     if (n % 2 === 1) {
//       console.log(n);
//     }
//   }
// })



// function sumIfOdd(subtotal, numberToAdd) {
//   if (numberToAdd % 2 === 1) {
//     return subtotal + numberToAdd
//   }
//   else {
//     return subtotal
//   }
// }
//
// console.log('Odd total', numbers.reduce(sumIfOdd, 0));


function returnAFunction() {
  return function () {
    console.log('hello');
  }
}

var foo = returnAFunction()
foo()


var friends = ['Matt', 'Joey', 'Sarah']
var listItems = friends.map(createListItem)
function createListItem(friend) {
  return '<li>' + friend + '<li>'

}
console.log(friends);
console.log(listItems);
