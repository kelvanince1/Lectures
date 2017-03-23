$(document).ready(function() {
  pageLoad({url: 'http://localhost:3000/todos'});
  $('#todoform').on('submit', newTodo);
  $(document).on('click', '.deletelink', deleteTodo);
  $(document).on('click', '.updatelink', updateTodo);
  $('#allTasks').on('click', allLoad);
  $('#completedTasks').on('click', completedLoad);
  $('#incompleteTasks').on('click', incompletedLoad);

  })
  function allLoad(e) {
    e.preventDefault();
    var options = {
      url: 'http://localhost:3000/todos'
    }
    pageLoad(options);
  }

  function completedLoad(e) {
    e.preventDefault();
    var options = {
      url: 'http://localhost:3000/todos/completed'
    }
    pageLoad(options);
  }

  function incompletedLoad(e) {
    e.preventDefault();
    var options = {
      url: 'http://localhost:3000/todos/incomplete'
    }
    pageLoad(options);
  }

  function pageLoad(options) {

    var request = $.ajax(options);

    request.done(function(response) {
      $('.todo-list').empty();
      // console.log('success: ',  response);
      for (var i=0; i<response.length; i++) {
        if (response[i].completed) {
            var completedStatus = "Completed"
        } else {
            var completedStatus = "Not Completed"
        }
        $('.todo-list').append(`<li> <span class="taskname"> ${response[i].task} </span> | <span class="taskcompleted"> ${completedStatus} </span> <a href='#' class='deletelink' id="` + response[i]._id + `">Delete task</a> | <a href='#' class='updatelink' id="` + response[i]._id + `">Update task</a> </li>`)
    }
  });

  request.fail(function(jqx, status, errorThrown) {
    console.log('Error: ' + errorThrown);
  });
}

function newTodo(e) {
  e.preventDefault();
  var newItem = $('#todoname').val();
  if ($('#toDoCompleted').is(':checked')) {
    var newCompleted = true;
  }
  else {
    var newCompleted = false;
  }
  if ($('#todoid').val() === "") {
    options = {
      url: 'http://localhost:3000/todos',
      method: 'POST',
      data: {
        task: newItem,
        completed: newCompleted
        }
      }
      var request = $.ajax(options);

      request.done(function(response) {
        // console.log('success: ',  response);
        pageLoad({url: 'http://localhost:3000/todos'});

      });

      request.fail(function(jqx, status, errorThrown) {
        console.log('Error: ' + errorThrown);
      });
  } else {
    options = {
      url: 'http://localhost:3000/todos/' + $('#todoid').val(),
      method: 'PUT',
      data: {
        task: newItem,
        completed: newCompleted
        }
      }
      var request = $.ajax(options);

      request.done(function(response) {
        // console.log('success: ',  response);
        pageLoad({url: 'http://localhost:3000/todos'});

      });

      request.fail(function(jqx, status, errorThrown) {
        console.log('Error: ' + errorThrown);
      });
    }
  $('#todoname').val("");
  $('#todoid').val("");
  $('#todocompleted').prop("checked", false);
}

function deleteTodo(e) {
  e.preventDefault();
  var deleteid = $(this).attr('id');
  // console.log(deleteid);}
  options = {
    url: 'http://localhost:3000/todos/' + deleteid,
    method: 'DELETE'
  }
  var request = $.ajax(options);

  request.done(function(response) {
    // console.log('success: ',  response);
    pageLoad({url: 'http://localhost:3000/todos'});

  });

  request.fail(function(jqx, status, errorThrown) {
    console.log('Error: ' + errorThrown);
  });
}

function updateTodo(e) {
  e.preventDefault();
  var taskName = $(this).parent().find('.taskname').text();
  $('#todoname').val(taskName);
  var taskId = $(this).attr('id');
  $('#todoid').val(taskId);
  var taskCompleted = $(this).parent().find('.taskCompleted').text();
  if (taskCompleted === "Completed") {
    $('toDoCompleted').prop('checked', true)
  } else {}
  console.log(taskId);
}
