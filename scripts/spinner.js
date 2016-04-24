(function(window) {
  // var arrow = sheet.add('#arrow');
  console.log('spinner.js')
  var keyframes = sheet.add('@keyframes spin');
  var $arrow = $('#arrow');

  // Set the start position using start data on the element and a random number.
  var startPosition = $arrow.data('start-pos') || Math.random();
  console.log('start:', startPosition);
  // Set the end position by adding a larger random number to the start value.
  var endPosition = startPosition + (Math.random() * 9 + 11);
  console.log('end:', endPosition);
  // Set the start data on the element at the end position to start at the same position on the next spin.
  $arrow.data('start-pos', endPosition);

  $arrow.css('transform', 'rotate(' + startPosition + 'turn)');

  keyframes.nested('from', { 'transform': 'rotate(' + startPosition + 'turn)' });
  keyframes.nested('to', { 'transform': 'rotate(' + endPosition + 'turn)' });

})(window);
