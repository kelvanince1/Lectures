require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Todo = require('./models/Todo');

// //READ COLLECTION
// Todo.find({
//   completed: true
// }, function(err, todos) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(todos);
//   }
// })
//
// // //READ MEMBER
// Todo.findOne({
//   _id: '57fd49d515307f0e4782c4ef'
// }, function(err, todo) {
//   if(err) {
//     console.log(err);
//   }
//   else {
//     if(todo) {
//       console.log(todo);
//     }
//     else {
//       console.log('Todo not found');
//     }
//   }
// })
//
// // UPDATE
// Todo.findOne({
//   _id: '57fd49d515307f0e4782c4ef'
// }, function (err, todo) {
//   if (err) {
//     console.error(err);
//   } else {
//     if (todo) {
//       console.log(todo);
//       var updatedTodo = Object.assign(todo, { completed: false })
//
//       updatedTodo.save(function (err) {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log(updatedTodo);
//         }
//       })
//     } else {
//       console.log('TODO NOT FOUND');
//     }
//   }
// })

//DELETE
// Todo.findOne({
//   _id: '57fd49d515307f0e4782c4ef'
// }, function(err, todo) {
//   if(err) {
//     console.log(err);
//   }
//   else {
//     if(todo) {
//       console.log(todo);
//       todo.remove(function(err) {
//         if (err) {
//           console.log(err);
//         }
//         else {
//           console.log('Todo was deleted');
//         }
//       })
//     }
//     else {
//       console.log('Todo not found');
//     }
//   }
// })

//CREATE
var todo = new Todo({
  task: 'Scotland',
  completed: true,
  userId: '118'
});

todo.save(function(err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(todo);
  }
})
