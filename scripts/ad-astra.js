$('.ad-astra .player-count li').on('click', function() {
  $(this).siblings().removeClass('selected');
  $(this).addClass('selected');

  //Planet count is total in game (43) minus minimum of 3 per 8 stars minus number of players.
  var planetsLeft = 19 - $(this).text();
  var stars = [3,3,3,3,3,3,3,3];

  //Variables for looping
  var planetsToAssign = 0;
  var availableSlotsMultiplier = 5;
  //Evenly distribute 19 planets into an array of length 8 without going over 7 in any slot.
  while(planetsLeft > 0) {
    for(var i = 0; i < stars.length; i++) {
      if(stars[i] < 7) {
        availableSlotsMultiplier = 8 - stars[i];
        planetsToAssign = Math.floor(Math.random() * availableSlotsMultiplier);
        
        //Check that there are planets to assign and when there are, it isn't more than what's left.
        if(planetsToAssign && planetsLeft - planetsToAssign >= 0) {
          stars[i] += planetsToAssign;
          planetsLeft -= planetsToAssign;
        }
        //In case there are planets left but more planets being assigned than what's left...
        else if(planetsLeft && planetsLeft - planetsToAssign < 0) {
          //...just assign what's left.
          stars[i] += planetsLeft;
          planetsLeft = 0;
        }
      }
    }
  }

  //Take the values out of random slots when assigning them in list order, for good measure.
  $('.planet-count').each(function() {
    var randomIndex = Math.floor(Math.random() * stars.length)
    
    $(this).text(stars[randomIndex]);
    
    for(var i = randomIndex; i < stars.length - 1; i++) {
      stars[i] = stars[i + 1];
    }

    stars.length--;
  });
});
