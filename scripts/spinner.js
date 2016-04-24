(function(window) {
  console.log('spinner.js')
  var keyframes = sheet.add('@keyframes spin');
  var arrowStartPosition = Math.random();
  $('#arrow').css('transform', 'rotate(' + arrowStartPosition + 'turn)');

  $('.spinner').on('click', function() {
    var $arrow = $('#arrow');
    var $arrowClone = $arrow.clone(true);

    $arrow.replaceWith($arrowClone);
    $arrow = $('#arrow');

    // Set the start position using start data on the element and a random number.
    var startPosition = $arrow.data('start-pos') || arrowStartPosition;
    // Set the end position by adding a larger random number to the start value.
    var endPosition = startPosition + (Math.random() * 9 + 11);
    // Set the start data on the element at the end position to start at the same position on the next spin.
    $arrow.data('start-pos', endPosition);

    $arrow.css('transform', 'rotate(' + startPosition + 'turn)');

    keyframes.nested('from', { 'transform': 'rotate(' + startPosition + 'turn)' });
    keyframes.nested('to', { 'transform': 'rotate(' + endPosition + 'turn)' });
  });
})(window);
