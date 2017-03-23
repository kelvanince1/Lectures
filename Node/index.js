require('dotenv').config({ silent: true });

var a = "foo";

console.log(a);

const Student = require('./student');

var me = new Student('Lance', 'Spaceman', 500);
console.log(me);
console.log(me.formattedSalary());

console.log(process.env.MY_VAR);
console.log(process.env.ANOTHER_VAR);
console.log(process.env.A_THIRD_VAR);
