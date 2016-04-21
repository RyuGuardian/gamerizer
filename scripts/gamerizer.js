$('.game-turn-type').on('click', 'button', function() {
  $(this).parent().siblings().children().removeClass('selected');
  $(this).addClass('selected');
  $('.decide-first button').removeClass('selected');
  $('.decide-first ul').next().remove();

  $('.gamerizer > section').hide();
  $('.' + $(this).data('turns')).fadeIn();
});

var rules = [
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

$('.decide-first').on('click', 'button', function() {
  $(this).parent().siblings().children().removeClass('selected');
  $(this).addClass('selected');

  var listElement = $('.decide-first ul');


  if($(this).data('first') === 'rule') {
    $('.spinner').hide();
    listElement.after("<p>The person who " + rules[Math.floor(Math.random() * rules.length)] + " is first.</p>");
  }
  else if($(this).data('first') === 'spinner') {
    listElement.next().remove();
    $('.spinner').show();
  }

});
