$('.game-turn-type').on('click', 'button', function() {
  $(this).parent().siblings().children().removeClass('selected');
  $(this).addClass('selected');
  $('.decide-first button').removeClass('selected');
  $('.decide-first ul').next().remove();

  $('.gamerizer > section').hide();
  $('.' + $(this).data('turns')).fadeIn();

  if($(this).data('turns') === 'random-order') {
    var colors = [
      { red: { background: '#ff0000', text: '#800000'} },
      { green: { background: '#228b22', text: '#004000'} },
      { blue: { background: '#1e90ff', text: '#0000aa'} },
      { yellow: { background: '#FFFF2A', text: '#A88E00'} },
      { orange: { background: '#ffa500', text: '#ff4500'} },
      { purple: { background: '#8a2be2', text: '#4b0082' }},
      { black: { background: '#000000', text: '#101050'} },
      { white: { background: '#ffffff', text: '#deb080'} },
      { grey: { background: '#c0c0c0', text: '#404040'} }
    ];

    $('.random-order > ol > li').remove();

    while(colors.length) {
      var randomIndex = Math.floor(Math.random() * colors.length);
      var selectedColor = Object.keys(colors[randomIndex])[0];

      $('.random-order > ol').append('<li><p>' + selectedColor.toUpperCase() + '</p></li>');
      $('.random-order li:last-of-type > p')
        .css('background-color', colors[randomIndex][selectedColor].background);
      $('.random-order li:last-of-type > p').css('color', colors[randomIndex][selectedColor].text);

      for(var i = randomIndex; i < colors.length; i++) {
        colors[i] = colors[i + 1];
      }

      colors.length--;
    }
  }
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
