module.exports = function(wind) {
  var windSize = wind.size();
  var App      = function() { return this; };
  
  App.prototype = {
    centerY: function(y) {
      return (windSize.y / 2) - (y / 2)
    }
  }
  
  return new App;
}