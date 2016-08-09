$(document).ready(function() {

  var $btn = $('#btn'); //button
  var $input = $('#input'); //input box
  var $result = $('#result'); //result box

$btn.on('click', function() {
  console.log('hello');
  $.ajax({
    url: 'https://yoda.p.mashape.com/yoda',

    type: 'GET',
    data: {
      sentence: $('#input').val()
    },
    datatype: 'json',
    success: function(data) {alert(data);
    $('#result').html(data);
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'bdIm0T3hHPmshYybF8dz13OmKT8qp1uIfxtjsn82CQmr2HKaMk');
    }
    })
    .fail(function(request, textStatus, errorThrown) {
      $result.html(request.status + ' ' + textStatus + ' ' + errorThrown);

    });
  });

});
