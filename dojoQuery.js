(function (global) {

  function myAccessorFunction(elementId) {
    let htmlElement = document.createElement("html");
    let returnObject = {}
    returnObject.click = function (callback) {
      callback()
    }
    returnObject.hover = function (hoverOn, hoverOff) {
      if(typeof hoverOff != 'function')
        hoverOn()
      else
        hoverOff()
    }
    return returnObject;

  }

  global.$Dojo = myAccessorFunction;

}(window))