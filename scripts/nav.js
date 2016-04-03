$('header').on('click', function() {
  $(this).addClass('ad-astra-header-color');
  $('main').empty();

  $('main').load('html/ad_astra.html', function() {
    $.getScript('scripts/ad_astra.js');

    console.log($('.ad-astra .player-count li'));
  });
});
