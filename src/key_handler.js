var els = require('./custom_ui');

var moveIncrement = 5;

els.wind.on('click', 'up', function(e) {
  var pos = els.leftPlayer.position();
  pos.y -= moveIncrement;
  els.leftPlayer.animate('position', pos, 1);
});

els.wind.on('click', 'down', function(e) {
  var pos = els.leftPlayer.position();
  pos.y += moveIncrement;
  els.leftPlayer.animate('position', pos, 1);
});
