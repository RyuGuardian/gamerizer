var sheet = cssx();

//Click on icon to slide in modal. Click on option in modal to change view.

function namify(string) {
  return string.split('-').map(function(val) {return val[0].toUpperCase() + val.slice(1)}).join(' ');
}

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
