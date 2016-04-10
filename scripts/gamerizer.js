$('.game-turn-type').on('click', 'button', function() {
  $(this).parent().siblings().children().removeClass('selected');
  $('.decide-first button').removeClass('selected');
  $(this).addClass('selected');

  $('.gamerizer > section').hide();
  $('.' + $(this).data('turns')).fadeIn();
});

$('.decide-first').on('click', 'button', function() {
  $(this).parent().siblings().children().removeClass('selected');
  $(this).addClass('selected');

});
