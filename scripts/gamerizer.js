$('.game-turn-type').on('click', 'button', function() {
  $(this).parent().siblings().children().removeClass('selected');
  $(this).addClass('selected');
  $('.decide-first button').removeClass('selected');
  $('.decide-first ul').next().remove();

  $('.gamerizer > section').hide();
  $('.' + $(this).data('turns')).fadeIn();
});

(function(window) {
  window.rules = [
    "is the oldest",
    "is the youngest",
    "is tallest",
    "is shortest",
    "has the longest hair",
    "has the shortest hair",
    "has been sick most recently",
    "had a birthday most recently",
    "has their birthday next",
    "left the country most recently",
    "went on vacation most recently"
  ];
}(window));

$('.decide-first').on('click', 'button', function() {
  $(this).parent().siblings().children().removeClass('selected');
  $(this).addClass('selected');

  var listElement = $('.decide-first ul');
  listElement.next().remove();


  if($(this).data('first') === 'rule') {
    $('.spinner').hide();
    listElement.after("<p>The person who "
      + window.rules[Math.floor(Math.random() * window.rules.length)]
      + " is first.</p>");
  }
  else if($(this).data('first') === 'spinner') {
    $('.spinner').show();
    $.getScript('scripts/spinner.js');
  }

});
