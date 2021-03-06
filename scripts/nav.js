var sheet = cssx();

function namify(string) {
  return string.split('-').map(function(val) {return val[0].toUpperCase() + val.slice(1)}).join(' ');
}

//Click on icon to slide in menu. Click on option in menu to change view.
$('#nav-icon').on('click', function() {
  if($('nav').css('right') === '-50%') {
    $('nav').show().animate({right: '+=50%'});
  }
});

$('nav').on('click', 'li', function() {
  var navSelection = $(this).data('selection');

  $('nav').hide().css('right', '-50%')
  $('header').removeClass().addClass(navSelection + '-header-color');
  $('header > h1').text(namify(navSelection));
  $('main').empty();

  $('main').load('html/' + navSelection + '.html', function() {
    $.getScript('scripts/' + navSelection + '.js');
  });
});

$('nav>ul>li:first').click();
