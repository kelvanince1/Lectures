$(document).ready(function() {

  $('nav a').on('click', function(e) {
    $('#main').empty();
    var context = $(this).text();

    loadResults(context)
    e.preventDefault();
  });

loadResults('top')

function loadResults(sortOrder) {

  var options = {
    url: 'https://www.reddit.com/' + sortOrder + '.json'
  };

  var request = $.ajax(options);

  request.done(function(response) {
    // console.log('success:', response.data.children);
    var responseCount = response.data.children.length;

    for (var i=0; i<responseCount; i++) {
      console.log(i + ': ', response.data.children[i]);
      var post = response.data.children[i];

      /*
      <div class="row">
        <div class="col-md-2">Image</div>
        <div class="col-md-10">Title</div>
      </div>
      */

      $row = $('<div />').addClass('row');
      $imageColumn = $('<div />').addClass('col-md-2');

      var imageSrc = (post.data.thumbnail !== 'default' && post.data.thumbnail !== 'self') ?
        post.data.thumbnail : '';

      if (imageSrc) {
        console.log(imageSrc);
        var $image = $('<img />').attr('src', post.data.thumbnail);
        var $imageLink = $('<a />').attr('href', post.data.url).append($image);
        $imageColumn.append($imageLink);
      }

      $link = $('<a />').attr('href', post.data.url).text(post.data.title);
      $title = $('<h3 />').html($link);
      $content = $('<div />').html($title).addClass('col-md-9');

      $row.append($imageColumn);
      $row.append($content);
      $('#main').append($row);
    }
  });

  request.fail(function(jqXHR, status, errorThrown) {
    console.log('Error', errorThrown);
  });


  request.always(function() {
    console.log('Always');
  });

  }
});
