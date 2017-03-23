var name = 'Kelvan'
console.log(name.split(''));


var numbers = [1, 2, 3]

numbers.push(5);
console.log(numbers);
numbers.shift()
console.log(numbers);

var sumNumbers = numbers.reduce(function (num) {
  return num * num;
}, 0)

console.log(sumNumbers);

var squaredNumbers = numbers.map(function (num) {
  return(num * num)
})
console.log(squaredNumbers);

var friends = ['Shady Davey', 'Slick Sam', 'Bill', 'Tom', 'Michael'];
var listOfMates = friends.join(' ');
console.log(listOfMates);
var conveniantFriends = friends.filter(function (friend) {
  return friend.length <= 4;
})

console.log(conveniantFriends);


// friends.forEach(function (friend) {
//   console.log(friend);
//   var greeting = "Hello " + friend
//   console.log(greeting);
// })
//
//
// var friendsListItems = friends.map(function (friend) {
//   return '<li>' + friend + '</li>'
// })
//
// console.log(friendsListItems);
//
// var numbers = [1, 2, 3, 4]
//
// var total = numbers.reduce(function (previousValue, number) {
//   return previousValue + number
// }, 0)
//
// console.log(total);
//
// // var average = total / numbers.length
// // console.log(average);
// // return average;
// //
// var numbers = [1, 2, 3, 4]
// var oddNumbers = numbers.filter(function (number) {
//   return number % 2 === 1;
// })
//
// console.log(oddNumbers);
//
//
// var numbers = [1, 2, 3, 4]
// var evenNumbers = numbers.filter(function (num) {
//   return number % 2 === 0;
// })
//
// console.log(evenNumbers);
//
//
//
//
//
//
//
//
//
// // var lastName;
// // var myName = 'Kelvan';
// // var age = 24;
// // var canLegallyVote = true;
// // var foobar = null;
// //
// // console.log(myName);
// //
// // var firstName = 'Kelvan';
// // var lastName = 'Ince';
// //
// // var friends = ['Pete', 'Shaun', 'Noodle'];
// // console.log('# of friends ',friends.length);
// //
// // function sayHello() {
// //   alert('Hello')
// // }
// //
// // var howdy = greeting()
// // console.log(howdy);
// //
// // function calculateTip(total) {
// //   return total * 0.20
// // }
// //
// // debugger;
// // var tip = calculateTip(200)
// // comsole.log(calculateTip(15));
// // console.log('tip', tip)
// //
// // function fullName(firstName, lastName) {
// //   return firstName + ' ' + lastName
// // }
// //
// // console.log(fullName('Kelvan' 'Ince;'));
// //
// // // sayHello()
// //
// // function greeting() {
// //   console.log('Before the return');
// //   return 'Hello Texans!'
// //   console.log('After the return');
// // }
// //
// // var howdy = greeting()
// // console.log(howdy);
