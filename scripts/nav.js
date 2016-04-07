//Click on icon to slide in modal. Click on option in modal to change view.

$('#nav-icon').on('click', function() {
  console.log('nav click');
  $navMenu = $('nav');

  $navMenu.show().animate({right: '+=50%'});
});

$('nav').on('click', 'li', function() {
  var $navSelection = $(this).data('selection');

  $('nav').hide().css('right', '-50%')
  $('header').removeClass().addClass($navSelection + '-header-color');
  $('main').empty();

  if($navSelection !== 'generic') {
    $('main').load('html/' + $navSelection + '.html', function() {
      $.getScript('scripts/' + $navSelection + '.js');
    });
  }
});
