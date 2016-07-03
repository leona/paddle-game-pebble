var UI = require('ui');
var els = require('./custom_ui');

require('./key_handler');

var windSize = els.wind.size();
var xIncrement = 2;
var yIncrement = 1;

setTimeout(function() {
  
  function anim() {
    var inBoundsResult = inBounds();
    var pos = els.ball.position();

    if (!inBoundsResult.status) {
      switch (inBoundsResult.result) {
        case 'gameOver':
          return console.log('Game over');
          break;
        case 'collisionTop':
          yIncrement = 1
          console.log('Hit top bar');
          break;
        case 'collisionBottom':
          yIncrement = -1
          console.log('Hit bottom bar');
          break;
        case 'collisionRight':
          console.log('Hit right paddle');
          xIncrement = -2;
          break;
        case 'collisionLeft':
          console.log('Hit left paddle')
          xIncrement = 2;
          break;
      }
    }
    
    pos.y = pos.y + yIncrement;
    pos.x = pos.x + xIncrement;

    els.ball.animate('position', pos, 50);
    setTimeout(anim , 50)
  }
  anim();
}, 2000);

function inBounds() {
  var pos = els.ball.position();
  
  if (pos.y >= windSize.y - 32.5) {
    return {
      status: false,
      result: 'collisionBottom'
    }
  }
  
  if (pos.y <= 32.5) {
    return {
      status: false,
      result: 'collisionTop'
    }
  }
  
  if (pos.x < 35) {
    var posPlayer = els.leftPlayer.position();
    var paddleHeight = 25;
    
    if (pos.y < posPlayer.y + paddleHeight && pos.y > posPlayer.y) {
      return {
        status: false,
        result: 'collisionLeft'
      }
    }
    
    return {
      status: false,
      result: 'gameOver',
      winner: 'rightPlayer'
    }
  }
  
  if (pos.x > windSize.x - 32.5) {
    var posPlayer = els.rightPlayer.position();
    var paddleHeight = 25;
    
    if (pos.y < posPlayer.y + paddleHeight && pos.y > posPlayer.y) {
      return {
        status: false,
        result: 'collisionRight'
      }
    }
    
    return {
      status: false,
      result: 'gameOver',
      winner: 'leftPlayer'
    }
  }  
  
  return {
    status: true
  }
}