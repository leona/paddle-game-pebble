var UI      = require('ui');
var Vector2 = require('vector2');
var Helpers = require('./helpers');

var wind      = new UI.Window();
var windSize  = wind.size();
Helpers       = Helpers(wind);

var rectLeft = new UI.Rect({ 
  size: new Vector2(4, 25),
  position: new Vector2(30, Helpers.centerY(35)), 
  backgroundColor: 'white', 
  borderColor: 'white' 
});

var rectRight = new UI.Rect({ 
  size: new Vector2(4, 25),
  position: new Vector2(windSize.x - 30, windSize.y - 30 - 40/*Helpers.centerY(35)*/), 
  backgroundColor: 'white', 
  borderColor: 'white' 
});

var topLine = new UI.Line({
  position: new Vector2(30, 30),
  position2: new Vector2(windSize.x - 30, 30),
  strokeWidth: 1,
  strokeColor: 'white',
});

var bottomLine = new UI.Line({
  position: new Vector2(30, windSize.y - 30),
  position2: new Vector2(windSize.x - 30, windSize.y - 30),
  strokeWidth: 1,
  strokeColor: 'white',
});

var circle = new UI.Circle({
  position: new Vector2(72, Helpers.centerY(5)),
  radius: 3,
  backgroundColor: 'white',
});

wind.add(circle);
wind.add(rectLeft);
wind.add(rectRight);
wind.add(bottomLine);
wind.add(topLine);

wind.show()

module.exports = {
  wind: wind,
  ball: circle,
  bottomLine: bottomLine,
  topLine: topLine,
  leftPlayer: rectLeft,
  rightPlayer: rectRight,
}

